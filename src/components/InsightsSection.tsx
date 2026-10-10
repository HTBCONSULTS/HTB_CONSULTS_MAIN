import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../config/siteData';
import { InsightArticle } from '../types';
import { ArrowRight, BookOpen, Clock, User, X, Quote } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-20 lg:py-24 bg-white bg-blueprint-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="htb-glass-panel flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 rounded-2xl p-5 sm:p-7">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
              <span className="w-5 h-[2px] bg-[#FFB81C]" />
              <span>Insights & Articles</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#001F3F] leading-tight">
              Practical Insights for{' '}
              <span className="text-[#0A2E5C] italic">Real Progress.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Ideas, guidance and practical knowledge to help organisations, teams and professionals solve problems and improve operations.
            </p>
          </div>

          <div className="font-script text-[#B45309] text-2xl hidden md:block">
            “Think. Analyse. Improve. Grow.”
          </div>
        </div>

        {/* Featured Article + Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Marquee Featured: Working MVP by Founder Oluwasegun Ajibola */}
          <article className="htb-card htb-card--dark lg:col-span-6 bg-[#001F3F] text-white rounded-2xl p-7 sm:p-9 shadow-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#FFB81C] font-semibold uppercase tracking-wider mb-2">
                <span>Featured Guide</span>
                <span aria-hidden="true">·</span>
                <span>{INSIGHTS_ARTICLES[0].category}</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-white leading-snug">
                {INSIGHTS_ARTICLES[0].title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                {INSIGHTS_ARTICLES[0].excerpt}
              </p>

              {/* Author badge */}
              {INSIGHTS_ARTICLES[0].author && (
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFB81C] text-[#001F3F] font-bold flex items-center justify-center text-sm shrink-0">
                    OA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {INSIGHTS_ARTICLES[0].author.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {INSIGHTS_ARTICLES[0].author.role}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#FFB81C]" />
                <span>{INSIGHTS_ARTICLES[0].readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{INSIGHTS_ARTICLES[0].date}</span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(INSIGHTS_ARTICLES[0])}
                className="px-4 py-2 text-xs font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer"
              >
                Read Guide
              </button>
            </div>
          </article>

          {/* Secondary 3 Articles List */}
          <div className="lg:col-span-6 space-y-4">
            {INSIGHTS_ARTICLES.slice(1).map((article) => (
              <article
                key={article.id}
                className="htb-card p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white transition-colors shadow-xs group"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold text-[#B45309] text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h4 className="font-editorial text-lg font-semibold text-[#001F3F] group-hover:text-[#0A2E5C] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400">Practical Framework</span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold text-[#001F3F] hover:text-[#B45309] flex items-center gap-1 focus-visible-brand cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold text-[#B45309] uppercase tracking-wider mb-2">
              {selectedArticle.category} · {selectedArticle.date}
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#001F3F]">
              {selectedArticle.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {selectedArticle.excerpt}
            </p>

            {selectedArticle.keyTakeaway && (
              <div className="mt-6 p-5 rounded-xl bg-[#FFF8E7] border border-[#FFB81C]/40">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B45309] mb-1">
                  Key Takeaway
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {selectedArticle.keyTakeaway}
                </p>
              </div>
            )}

            {selectedArticle.author && (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#001F3F] text-[#FFB81C] font-bold flex items-center justify-center shrink-0">
                  OA
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#001F3F]">{selectedArticle.author.name}</div>
                  <div className="text-slate-500">{selectedArticle.author.role}</div>
                  <p className="text-slate-600 mt-1">{selectedArticle.author.bio}</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-[#001F3F] bg-slate-100 hover:bg-slate-200 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
