import React, { useState, useEffect } from 'react';
import { SERVICES, CASE_STUDIES, INSIGHTS_ARTICLES } from '../config/siteData';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (destination: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingServices = cleanQuery
    ? SERVICES.filter(
        (s) =>
          s.name.toLowerCase().includes(cleanQuery) ||
          s.shortTagline.toLowerCase().includes(cleanQuery) ||
          s.whatWeDo.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingCases = cleanQuery
    ? CASE_STUDIES.filter(
        (c) =>
          c.title.toLowerCase().includes(cleanQuery) ||
          c.sector.toLowerCase().includes(cleanQuery) ||
          c.serviceArea.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingInsights = cleanQuery
    ? INSIGHTS_ARTICLES.filter(
        (i) =>
          i.title.toLowerCase().includes(cleanQuery) ||
          i.category.toLowerCase().includes(cleanQuery) ||
          i.excerpt.toLowerCase().includes(cleanQuery) ||
          i.primaryKeyword.toLowerCase().includes(cleanQuery) ||
          i.relatedTopics?.some((topic) => topic.toLowerCase().includes(cleanQuery))
      )
    : [];

  const hasResults =
    matchingServices.length > 0 ||
    matchingCases.length > 0 ||
    matchingInsights.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, requirements, case studies, insights..."
            className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!cleanQuery ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type keywords such as <span className="font-semibold text-slate-700">“CRM”</span>,{' '}
              <span className="font-semibold text-slate-700">“Process”</span>,{' '}
              <span className="font-semibold text-slate-700">“Requirements”</span>, or{' '}
              <span className="font-semibold text-slate-700">“Tender”</span>.
            </div>
          ) : !hasResults ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No results found for “{query}”. Try searching for “Strategy”, “Analysis”, or “Delivery”.
            </div>
          ) : (
            <div className="space-y-4">
              {/* Services */}
              {matchingServices.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-2 px-2">
                    Services ({matchingServices.length})
                  </div>
                  <div className="space-y-1">
                    {matchingServices.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          onSelectResult(`/services#${s.id}`);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-slate-100 flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#001F3F] group-hover:text-[#B45309]">
                            {s.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {s.shortTagline}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#001F3F] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies */}
              {matchingCases.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-2 px-2">
                    Case Studies ({matchingCases.length})
                  </div>
                  <div className="space-y-1">
                    {matchingCases.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          onSelectResult('/case-studies');
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-slate-100 flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#001F3F] group-hover:text-[#B45309]">
                            {c.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {c.sector} · {c.serviceArea}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#001F3F]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Insights */}
              {matchingInsights.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-2 px-2">
                    Insights & Articles ({matchingInsights.length})
                  </div>
                  <div className="space-y-1">
                    {matchingInsights.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        onClick={() => {
                          onSelectResult(`/insights/${i.slug}`);
                          onClose();
                        }}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-slate-100 flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#001F3F] group-hover:text-[#B45309]">
                            {i.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {i.category}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#001F3F]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
