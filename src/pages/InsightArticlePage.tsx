import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Clock, UserRound } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../config/siteData';

type ArticleBlock =
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; label: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const parseArticle = (markdown: string): ArticleBlock[] => {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks: ArticleBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let table: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', text: paragraph.join(' ').trim() });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', items: list });
    list = [];
  };
  const flushTable = () => {
    if (table.length) {
      const rows = table
        .filter((row) => !/^\|?\s*:?-{3,}/.test(row.replace(/\|/g, '').trim()))
        .map((row) => row.replace(/^\|\s*/, '').replace(/\s*\|$/, '').split('|').map((cell) => cell.trim()));
      if (rows.length > 1) blocks.push({ type: 'table', headers: rows[0], rows: rows.slice(1) });
    }
    table = [];
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushAll();
      continue;
    }
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushAll();
      const text = heading[2].trim();
      blocks.push({ type: 'heading', level: heading[1].length as 2 | 3, text, id: slugify(text) });
      continue;
    }
    if (line.startsWith('|')) {
      flushParagraph();
      flushList();
      table.push(line);
      continue;
    }
    const quote = line.match(/^>\s*(?:\*\*(.+?):\*\*\s*)?(.*)$/);
    if (quote) {
      flushAll();
      blocks.push({ type: 'callout', label: quote[1] ?? 'Takeaway', text: quote[2] });
      continue;
    }
    const bullet = line.match(/^[-•]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      flushTable();
      list.push(bullet[1]);
      continue;
    }
    flushList();
    flushTable();
    paragraph.push(line);
  }
  flushAll();
  return blocks;
};

const renderInline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={`${index}-${part}`} className="font-semibold text-[#001F3F]">{part.slice(2, -2)}</strong>
      : part
  );

export const InsightArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS_ARTICLES.find((item) => item.slug === slug);
  const blocks = useMemo(() => article ? parseArticle(article.content) : [], [article]);
  const headings = blocks.filter((block): block is Extract<ArticleBlock, { type: 'heading' }> => block.type === 'heading' && block.level === 2);

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <section aria-label={article.title} className="relative bg-[#F8FAFC] bg-blueprint-subtle bg-blueprint-mobile-soft pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link to="/insights" className="font-medium text-[#001F3F] hover:text-[#B45309]">Insights &amp; Articles</Link>
          <span aria-hidden="true">/</span>
          <span>{article.category}</span>
        </nav>

        <article>
          <header className="htb-glass-panel rounded-3xl p-5 sm:p-8 lg:p-10" data-reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[#8A4B08]">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 normal-case tracking-normal">
                <Clock className="h-3.5 w-3.5 text-[#B45309]" aria-hidden="true" />{article.readTime}
              </span>
            </div>
            <h1 className="mt-4 max-w-4xl font-editorial text-balance text-3xl font-semibold leading-tight tracking-tight text-[#001F3F] sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">{article.excerpt}</p>
            {article.author && (
              <div className="mt-6 flex items-start gap-3 border-t border-[#001F3F]/10 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#001F3F] text-[#FFB81C]">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#001F3F]">{article.author.name}</p>
                  <p className="text-xs text-slate-500">{article.author.role}</p>
                </div>
              </div>
            )}
          </header>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <details className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-[#001F3F]">In this article</summary>
                <ol className="mt-3 space-y-2 border-l border-[#FFB81C]/70 pl-4">
                  {headings.map((heading) => (
                    <li key={heading.id}><a className="text-xs leading-relaxed text-slate-600 hover:text-[#8A4B08]" href={`#${heading.id}`}>{heading.text}</a></li>
                  ))}
                </ol>
              </details>
              <nav aria-label="In this article" className="sticky top-28 hidden rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur-xl lg:block">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#001F3F]">In this article</h2>
                <ol className="mt-4 space-y-3 border-l border-[#FFB81C]/70 pl-4">
                  {headings.map((heading) => (
                    <li key={heading.id}><a className="text-xs leading-relaxed text-slate-600 transition-colors hover:text-[#8A4B08]" href={`#${heading.id}`}>{heading.text}</a></li>
                  ))}
                </ol>
                <Link to="/insights" className="mt-6 inline-flex items-center gap-2 border-t border-slate-200 pt-4 text-xs font-semibold text-[#001F3F] hover:text-[#8A4B08]">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />All insights
                </Link>
              </nav>
            </aside>

            <div className="min-w-0 lg:col-span-9">
              {article.keyTakeaway && (
                <div className="mb-8 rounded-2xl border border-[#FFB81C]/40 bg-[#FFF8E7]/90 p-5 sm:p-6" data-reveal>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A4B08]">The central idea</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[#001F3F] sm:text-base">{article.keyTakeaway}</p>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-6 shadow-sm sm:px-8 sm:py-9 lg:px-10">
                <div className="insight-article-body">
                  {blocks.map((block, index) => {
                    if (block.type === 'heading') {
                      return block.level === 2
                        ? <h2 id={block.id} key={`${block.id}-${index}`} className="scroll-mt-28 font-editorial text-2xl font-semibold leading-tight text-[#001F3F] sm:text-3xl">{block.text}</h2>
                        : <h3 id={block.id} key={`${block.id}-${index}`} className="scroll-mt-28 font-editorial text-xl font-semibold leading-tight text-[#001F3F] sm:text-2xl">{block.text}</h3>;
                    }
                    if (block.type === 'paragraph') {
                      return <p key={`p-${index}`} className={`${index === 0 ? 'text-lg font-medium text-slate-700 sm:text-xl' : 'text-base text-slate-600'} leading-8`}>{renderInline(block.text)}</p>;
                    }
                    if (block.type === 'list') {
                      return <ul key={`list-${index}`} className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-600 marker:text-[#C17A00]">{block.items.map((item, itemIndex) => <li key={`${index}-${itemIndex}`}>{renderInline(item)}</li>)}</ul>;
                    }
                    if (block.type === 'callout') {
                      return <aside key={`callout-${index}`} className="rounded-r-xl border-l-4 border-[#FFB81C] bg-[#FFF8E7]/80 px-5 py-4 text-sm leading-7 text-[#334155]"><span className="font-bold text-[#8A4B08]">{block.label}:</span>{' '}{renderInline(block.text)}</aside>;
                    }
                    return (
                      <div key={`table-${index}`} className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                          <thead className="bg-[#001F3F] text-white"><tr>{block.headers.map((header, cellIndex) => <th key={cellIndex} scope="col" className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead>
                          <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className={rowIndex % 2 ? 'bg-slate-50' : 'bg-white'}>{row.map((cell, cellIndex) => <td key={cellIndex} className="border-t border-slate-200 px-4 py-3 align-top leading-6 text-slate-600">{renderInline(cell)}</td>)}</tr>)}</tbody>
                        </table>
                      </div>
                    );
                  })}
                </div>
              </div>

              {article.internalLinks.length > 0 && (
                <section aria-labelledby="related-services-heading" className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 sm:p-7" data-reveal>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A4B08]"><BookOpen className="h-4 w-4" aria-hidden="true" />Continue exploring</div>
                  <h2 id="related-services-heading" className="mt-2 font-editorial text-xl font-semibold text-[#001F3F]">Related services</h2>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {article.internalLinks.map((link) => (
                      <li key={link.href}><Link to={link.href} className="focus-visible-brand flex h-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] transition-colors hover:border-[#FFB81C]/70 hover:bg-[#FFF8E7]/60">{link.label}<ArrowRight className="h-4 w-4 shrink-0 text-[#A16207]" aria-hidden="true" /></Link></li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#001F3F] p-5 text-white sm:flex-row sm:items-center sm:p-7">
                <div><p className="text-xs font-semibold uppercase tracking-wider text-[#FFB81C]">Ready to take the next step?</p><p className="mt-1 text-sm text-slate-200">Talk to HTB Consult about your business challenge.</p></div>
                <Link to="/contact" className="focus-visible-brand inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#FFB81C] px-5 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:bg-[#E5A312]">Discuss a project<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>

              <Link to="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#001F3F] hover:text-[#8A4B08] lg:hidden"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to all insights</Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
