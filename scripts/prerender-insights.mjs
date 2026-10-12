import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer, loadEnv } from 'vite';

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'dist');
const htmlPath = path.join(outputDir, 'index.html');
const buildEnv = loadEnv('production', projectRoot, 'VITE_');
const configuredOrigin = buildEnv.VITE_PUBLIC_SITE_URL?.trim();
let publicOrigin = '';

if (configuredOrigin) {
  const parsedOrigin = new URL(configuredOrigin);
  if (parsedOrigin.protocol !== 'https:' || parsedOrigin.pathname !== '/' || parsedOrigin.search || parsedOrigin.hash) {
    throw new Error('VITE_PUBLIC_SITE_URL must be an explicit HTTPS origin without a path, query, or fragment.');
  }
  publicOrigin = parsedOrigin.origin;
}

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');

const upsertMeta = (html, attribute, key, content) => {
  const escapedKey = escapeRegExp(key);
  const matcher = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}=["']${escapedKey}["'])[^>]*>`, 'i');
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`;
  return matcher.test(html) ? html.replace(matcher, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
};

const upsertCanonical = (html, href) => {
  const matcher = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  return matcher.test(html) ? html.replace(matcher, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
};

const resolveBundledAssetUrl = async (sourceUrl) => {
  if (!sourceUrl.startsWith('/src/assets/')) return sourceUrl;
  const assetDirectory = path.join(outputDir, 'assets');
  const bundledFiles = await readdir(assetDirectory);
  const sourceName = path.basename(sourceUrl);
  const extension = path.extname(sourceName);
  const baseName = path.basename(sourceName, extension);
  const matches = bundledFiles.filter((name) => name === sourceName || (name.startsWith(`${baseName}-`) && path.extname(name) === extension));
  if (matches.length !== 1) throw new Error(`Expected one production asset for ${sourceUrl}, found ${matches.length}.`);
  return `/assets/${matches[0]}`;
};

const rewriteBundledAssetUrls = async (markup) => {
  const sourceUrls = [...new Set([...markup.matchAll(/(["'(])\/?src\/assets\/([^"')?]+)(?:\?[^"')]+)?["')]/g)].map((match) => `/src/assets/${match[2]}`))];
  let resolved = markup;
  for (const sourceUrl of sourceUrls) resolved = resolved.replaceAll(sourceUrl, await resolveBundledAssetUrl(sourceUrl));
  return resolved;
};

const vite = await createServer({
  configFile: path.join(projectRoot, 'vite.config.ts'),
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const [{ SiteApp }, { INSIGHTS_ARTICLES, INSIGHTS_PAGE_SEO, SITE_SEO }] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    vite.ssrLoadModule('/src/config/siteData.ts'),
  ]);
  const shell = await readFile(htmlPath, 'utf8');
  const rootPlaceholder = '<div id="root"></div>';
  if (!shell.includes(rootPlaceholder)) throw new Error('Could not find the empty #root in dist/index.html.');

  const renderRoute = async (route) => {
    const rendered = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(SiteApp))
    );
    return rewriteBundledAssetUrls(rendered);
  };

  const createPage = async ({ route, title, description, keywords, type = 'website', shareImage = '' }) => {
    const markup = await renderRoute(route);
    let page = shell
      .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`)
      .replace(rootPlaceholder, `<div id="root" data-prerendered="article">${markup}</div>`);

    page = upsertMeta(page, 'name', 'description', description);
    page = upsertMeta(page, 'name', 'keywords', keywords);
    page = upsertMeta(page, 'property', 'og:title', title);
    page = upsertMeta(page, 'property', 'og:description', description);
    page = upsertMeta(page, 'property', 'og:type', type);
    page = upsertMeta(page, 'property', 'og:site_name', 'HTB Consult');
    page = upsertMeta(page, 'name', 'twitter:card', type === 'article' ? 'summary' : 'summary_large_image');
    page = upsertMeta(page, 'name', 'twitter:title', title);
    page = upsertMeta(page, 'name', 'twitter:description', description);
    if (publicOrigin) page = upsertMeta(page, 'property', 'og:url', `${publicOrigin}${route}`);
    if (publicOrigin && shareImage) {
      const imagePath = await resolveBundledAssetUrl(shareImage);
      const imageUrl = imagePath.startsWith('http') ? imagePath : `${publicOrigin}${imagePath}`;
      page = upsertMeta(page, 'property', 'og:image', imageUrl);
      page = upsertMeta(page, 'property', 'og:image:alt', 'Colleagues collaborating in a business meeting');
      page = upsertMeta(page, 'name', 'twitter:image', imageUrl);
    }
    return { page, markup };
  };

  const listing = await createPage({
    route: '/insights',
    title: INSIGHTS_PAGE_SEO.title,
    description: INSIGHTS_PAGE_SEO.description,
    keywords: INSIGHTS_PAGE_SEO.keywords,
    shareImage: INSIGHTS_PAGE_SEO.shareImage,
  });
  const listingPath = path.join(outputDir, 'insights', 'index.html');
  await mkdir(path.dirname(listingPath), { recursive: true });
  await writeFile(listingPath, publicOrigin ? upsertCanonical(listing.page, `${publicOrigin}/insights`) : listing.page, 'utf8');
  console.log(`Prerendered /insights (${listing.markup.length.toLocaleString()} HTML characters)`);

  for (const article of INSIGHTS_ARTICLES) {
    const route = `/insights/${article.slug}`;
    const result = await createPage({
      route,
      title: article.seoTitle,
      description: article.metaDescription,
      keywords: [article.primaryKeyword, ...(article.relatedTopics ?? [])].slice(0, 8).join(', '),
      type: 'article',
      shareImage: article.shareImage,
    });
    const page = publicOrigin ? upsertCanonical(result.page, `${publicOrigin}${route}`) : result.page;
    const target = path.join(outputDir, 'insights', article.slug, 'index.html');
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, page, 'utf8');
    console.log(`Prerendered ${route} (${result.markup.length.toLocaleString()} HTML characters)`);
  }

  if (publicOrigin) {
    const routes = ['/', '/about', '/services', '/case-studies', '/insights', '/academy', '/contact', ...INSIGHTS_ARTICLES.map((article) => `/insights/${article.slug}`)];
    const urls = routes.map((route) => `  <url><loc>${escapeHtml(`${publicOrigin}${route}`)}</loc></url>`).join('\n');
    await writeFile(path.join(outputDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
    await writeFile(path.join(outputDir, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/*\nSitemap: ${publicOrigin}/sitemap.xml\n`, 'utf8');
    console.log(`Generated sitemap and robots.txt for ${publicOrigin}`);
  } else {
    console.log('No VITE_PUBLIC_SITE_URL configured; omitted absolute canonical URLs and sitemap.');
  }
} finally {
  await vite.close();
}
