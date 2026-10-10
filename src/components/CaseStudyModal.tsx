import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle, Clock, Building2, Layers, Quote } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onBookConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col focus:outline-none"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="bg-[#001F3F] text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible-brand"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FFB81C] mb-2">
            <span>{caseStudy.sector}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.serviceArea}</span>
          </div>

          <h3 id="case-modal-title" className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
            {caseStudy.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-3 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#FFB81C]" />
              <span>{caseStudy.clientType}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFB81C]" />
              <span>Duration: {caseStudy.duration}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#FFB81C]" />
              <span>Role: {caseStudy.role}</span>
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-sm">
          {/* Key Results Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B45309] mb-3">
              Measurable Results
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {caseStudy.results.map((res) => (
                <div key={res.label} className="p-3 bg-[#FFF8E7] rounded-xl border border-[#FFB81C]/30 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-[#001F3F] font-sans">
                    {res.metric}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div className="border-t border-slate-100 pt-5">
            <h4 className="font-editorial text-lg font-semibold text-[#001F3F]">The Challenge</h4>
            <p className="mt-2 text-slate-600 leading-relaxed text-xs sm:text-sm">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Our Approach */}
          <div className="border-t border-slate-100 pt-5">
            <h4 className="font-editorial text-lg font-semibold text-[#001F3F]">Our Approach</h4>
            <p className="mt-2 text-slate-600 leading-relaxed text-xs sm:text-sm">
              {caseStudy.approach}
            </p>
          </div>

          {/* Our Process */}
          <div className="border-t border-slate-100 pt-5">
            <h4 className="font-editorial text-lg font-semibold text-[#001F3F]">Process Executed</h4>
            <div className="mt-3 space-y-2">
              {caseStudy.process.map((step) => (
                <div key={step} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote */}
          {caseStudy.quote && (
            <div className="p-5 rounded-xl bg-[#001F3F] text-white mt-4 relative">
              <Quote className="w-6 h-6 text-[#FFB81C]/40 absolute top-4 right-4" />
              <p className="italic text-xs sm:text-sm text-slate-200 leading-relaxed">
                “{caseStudy.quote.text}”
              </p>
              <div className="mt-2 text-xs font-semibold text-[#FFB81C]">
                — {caseStudy.quote.author}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Have a similar challenge in your organisation?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-4 py-2 text-xs font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
