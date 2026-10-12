import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS_ARTICLES } from '../config/siteData';
import { ArrowRight, Clock } from 'lucide-react';

const articlePath = (slug: string) => `/insights/${slug}`;
const imageAlt = (alt: string | undefined, title: string) => alt ?? `Illustrative image for ${title}`;

export const InsightsSection: React.FC = () => {
  const [featuredArticle, ...otherArticles] = INSIGHTS_ARTICLES;

  return (
    <section id="insights" className="relative bg-white bg-blueprint-subtle py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="htb-glass-panel mb-12 flex flex-col justify-between gap-6 rounded-2xl p-5 sm:flex-row sm:items-end sm:p-7">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A4B08]">
              <span aria-hidden="true" className="h-[2px] w-5 bg-[#FFB81C]" />
              <span>Insights &amp; Articles</span>
            </div>
            <h2 className="font-editorial text-3xl font-medium leading-tight text-[#001F3F] sm:text-4xl">
              Practical Insights for <span className="italic text-[#0A2E5C]">Real Progress.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Practical guidance to help organisations and entrepreneurs make clearer decisions, improve operations and deliver change.
            </p>
          </div>
          <div className="hidden font-script text-2xl text-[#8A4B08] md:block">“Think. Analyse. Improve. Grow.”</div>
        </div>

        {featuredArticle && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <article className="htb-card htb-card--dark flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#001F3F] text-white shadow-lg lg:col-span-6">
              <Link to={articlePath(featuredArticle.slug)} aria-label={`Read full article: ${featuredArticle.title}`} className="block overflow-hidden focus-visible-brand">
                <img
                  src={featuredArticle.shareImage}
                  alt={imageAlt(featuredArticle.shareImageAlt, featuredArticle.title)}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wider text-[#FFB81C]">
                    <span>Featured Guide</span><span aria-hidden="true">·</span><span>{featuredArticle.category}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold leading-snug sm:text-3xl">
                    <Link to={articlePath(featuredArticle.slug)} className="focus-visible-brand rounded-sm transition-colors hover:text-[#FFB81C]">
                      {featuredArticle.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{featuredArticle.excerpt}</p>
                  {featuredArticle.author && (
                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFB81C] text-sm font-bold text-[#001F3F]">OA</div>
                      <div><p className="text-xs font-bold text-white">{featuredArticle.author.name}</p><p className="text-[11px] text-slate-400">{featuredArticle.author.role}</p></div>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs text-slate-300"><Clock className="h-3.5 w-3.5 text-[#FFB81C]" aria-hidden="true" />{featuredArticle.readTime}</span>
                  <Link to={articlePath(featuredArticle.slug)} className="focus-visible-brand inline-flex items-center gap-2 rounded-md bg-[#FFB81C] px-4 py-2.5 text-xs font-bold text-[#001F3F] shadow-sm transition-colors hover:bg-[#E5A312]">
                    Read the guide<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>

            <div className="space-y-4 lg:col-span-6">
              {otherArticles.map((article) => (
                <article key={article.id} className="htb-card group overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC] shadow-xs transition-colors hover:bg-white">
                  <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 p-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4 sm:p-5">
                    <Link to={articlePath(article.slug)} aria-label={`Read full article: ${article.title}`} className="block self-start overflow-hidden rounded-lg focus-visible-brand">
                      <img
                        src={article.shareImage}
                        alt={imageAlt(article.shareImageAlt, article.title)}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-col justify-between gap-3">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A4B08] sm:text-[11px]">{article.category}</span>
                          <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] sm:text-xs"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{article.readTime}</span>
                        </div>
                        <h3 className="font-editorial text-base font-semibold leading-snug text-[#001F3F] transition-colors group-hover:text-[#0A2E5C] sm:text-lg">
                          <Link to={articlePath(article.slug)} className="focus-visible-brand rounded-sm">{article.title}</Link>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{article.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                        <span className="truncate text-[10px] text-slate-400 sm:text-[11px]">By {article.author?.name ?? 'HTB Consult'}</span>
                        <Link to={articlePath(article.slug)} className="focus-visible-brand inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#001F3F] hover:text-[#8A4B08]">
                          Read article<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
