import React, { useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, Layout, LifeBuoy, Search } from 'lucide-react';
import { BackgroundVideo } from './BackgroundVideo';
import { APPROACH_STEPS } from '../config/siteData';
import { VISUAL_ASSETS } from '../config/visualAssets';
import { COLLABORATION_VIDEO_SOURCE } from '../config/videoConfig';

interface ApproachSectionProps {
  onBookConsultation: () => void;
}

const STEP_ICONS = [Search, BarChart3, Layout, LifeBuoy];

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onBookConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="relative isolate overflow-hidden bg-[#001F3F] py-20 text-white lg:py-28">
      <BackgroundVideo
        src={COLLABORATION_VIDEO_SOURCE}
        poster={VISUAL_ASSETS.aboutHero}
        videoClassName="brightness-105 contrast-105"
      />
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-br from-[#001429]/82 via-[#001F3F]/70 to-[#001F3F]/58" />
      <div aria-hidden="true" className="htb-ambient-glow absolute inset-0 z-[2]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFB81C]">
            <span className="h-[2px] w-5 bg-[#FFB81C]" />
            <span>Our Approach</span>
          </div>
          <h2 className="font-editorial text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            From insight to{' '}
            <span className="italic text-[#FFB81C]">measurable results.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
            We follow a structured and collaborative four-step process to understand your challenges, define practical solutions and ensure lasting delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                aria-pressed={isSelected}
                className={`htb-card htb-card--dark group relative cursor-pointer rounded-xl border p-5 text-left transition-all focus-visible-brand ${
                  isSelected
                    ? 'border-[#FFB81C] bg-white/15 shadow-lg'
                    : 'border-white/15 bg-[#001429]/45 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold ${isSelected ? 'bg-[#FFB81C] text-[#001F3F]' : 'bg-white/10 text-[#FFB81C]'}`}>
                    Step {step.number}
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isSelected ? 'bg-[#FFB81C] text-[#001F3F]' : 'bg-white/10 text-white/80'}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#FFB81C]">{step.title}</h3>
                <p className="mt-1 line-clamp-1 text-xs text-slate-200">{step.tagline}</p>
                {isSelected && <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-xs bg-[#FFB81C]" />}
              </button>
            );
          })}
        </div>

        <div
          key={currentStep.number}
          className="step-content-enter htb-card htb-card--dark mt-8 rounded-2xl border border-white/20 bg-[#001429]/45 p-6 shadow-xl backdrop-blur-md sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FFB81C]">Phase {currentStep.number}</span>
                <span className="text-white/40">/</span>
                <span className="text-sm text-slate-200">{currentStep.tagline}</span>
              </div>

              <h3 className="font-editorial text-2xl font-semibold text-white sm:text-3xl">
                {currentStep.title}: {currentStep.tagline}
              </h3>
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base">{currentStep.description}</p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="focus-visible-brand inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#FFB81C] px-5 py-2.5 text-xs font-bold text-[#001F3F] shadow-sm transition-colors hover:bg-[#E5A312] sm:text-sm"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="htb-card htb-card--dark rounded-xl border border-white/15 bg-[#001429]/65 p-6 lg:col-span-5">
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FFB81C]">Typical Deliverables</div>
              <ul className="space-y-3">
                {currentStep.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs text-slate-100 sm:text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB81C]" aria-hidden="true" />
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
