import React, { useState } from 'react';
import { CASE_STUDIES } from '../config/siteData';
import { CaseStudy } from '../types';
import { ArrowRight, Building2, Clock, Layers, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onBookConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
  onBookConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Healthcare & Social Care' | 'Private Sector'>('all');

  const filteredStudies = selectedFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.sector === selectedFilter);

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#F8FAFC] bg-blueprint-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="htb-glass-panel flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 rounded-2xl p-5 sm:p-7">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
              <span className="w-5 h-[2px] bg-[#FFB81C]" />
              <span>Proven Impact</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#001F3F] leading-tight">
              Real Challenges.{' '}
              <span className="text-[#0A2E5C] italic">Practical Solutions.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore selected examples of how HTB Consult has helped organisations improve processes, implement digital solutions and achieve measurable results.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#001F3F] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({CASE_STUDIES.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('Healthcare & Social Care')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                selectedFilter === 'Healthcare & Social Care'
                  ? 'bg-white text-[#001F3F] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Healthcare
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('Private Sector')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                selectedFilter === 'Private Sector'
                  ? 'bg-white text-[#001F3F] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Private Sector
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="htb-card bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs flex flex-col group"
            >
              {/* Optional Visual Banner */}
              {study.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={`Illustrative stock photography for a ${study.sector} project`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-[#FFB81C] uppercase tracking-wider text-[11px]">
                      {study.sector}
                    </span>
                    <span>{study.duration}</span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-1">
                    {study.serviceArea}
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#001F3F] group-hover:text-[#0A2E5C] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {study.subtitle}
                  </p>
                </div>

                {/* Quantitative Metric Callout */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2 bg-[#FFF8E7] p-3 rounded-xl border border-[#FFB81C]/25">
                    {study.results.slice(0, 2).map((res) => (
                      <div key={res.label}>
                        <div className="text-base font-extrabold text-[#001F3F]">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-slate-600 line-clamp-1 font-medium">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    className="mt-4 w-full py-2.5 px-3 text-xs font-bold text-[#001F3F] bg-slate-100 hover:bg-[#FFB81C] rounded-lg transition-colors flex items-center justify-center gap-1.5 focus-visible-brand cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Informational Callout: More Case Studies Coming Soon */}
        <div className="htb-card mt-12 bg-white rounded-xl border border-dashed border-slate-300 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001F3F]">
                More Case Studies Continually Added
              </h4>
              <p className="text-xs text-slate-500">
                We are actively supporting organisations across multiple sectors. Additional project stories will be published as initiatives complete.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBookConsultation}
            className="text-xs font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] px-4 py-2 rounded-md transition-colors whitespace-nowrap focus-visible-brand cursor-pointer"
          >
            Discuss Your Requirement
          </button>
        </div>

      </div>
    </section>
  );
};
