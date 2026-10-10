import React, { useState } from 'react';
import { APPROACH_STEPS } from '../config/siteData';
import { ArrowRight, CheckCircle2, Search, BarChart3, Layout, LifeBuoy } from 'lucide-react';

interface ApproachSectionProps {
  onBookConsultation: () => void;
}

const STEP_ICONS = [Search, BarChart3, Layout, LifeBuoy];

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onBookConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#001F3F] text-white relative overflow-hidden">
      {/* Background blueprint signature */}
      <div className="absolute inset-0 bg-nodes-subtle opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FFB81C] mb-3">
            <span className="w-5 h-[2px] bg-[#FFB81C]" />
            <span>Our Approach</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            From insight to{' '}
            <span className="text-[#FFB81C] italic">measurable results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            We follow a structured and collaborative four-step process to understand your challenges, define practical solutions and ensure lasting delivery.
          </p>
        </div>

        {/* 4 Steps Interactive Navigation Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-xl text-left transition-all border cursor-pointer focus-visible-brand relative group ${
                  isSelected
                    ? 'bg-white/15 border-[#FFB81C] shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#FFB81C] text-[#001F3F]' : 'bg-white/10 text-[#FFB81C]'
                  }`}>
                    Step {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-[#FFB81C] text-[#001F3F]' : 'bg-white/10 text-white/80'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FFB81C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {step.tagline}
                </p>

                {isSelected && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFB81C] rotate-45 rounded-xs" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded Details Card */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-[#FFB81C]">
                  Phase {currentStep.number}
                </span>
                <span className="text-white/40">/</span>
                <span className="text-sm text-slate-300">
                  {currentStep.tagline}
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                {currentStep.title}: {currentStep.tagline}
              </h4>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="lg:col-span-5 bg-black/25 rounded-xl p-6 border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFB81C] mb-4">
                Typical Deliverables
              </div>
              <ul className="space-y-3">
                {currentStep.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB81C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
