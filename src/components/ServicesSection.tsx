import React from 'react';
import { 
  SERVICES 
} from '../config/siteData';
import { ServiceItem } from '../types';
import { VISUAL_ASSETS } from '../config/visualAssets';
import {
  ArrowRight,
  TrendingUp,
  FileCheck,
  Cpu,
  RefreshCw,
  Kanban,
  GraduationCap,
  Compass,
  Target,
  CheckSquare,
  Search,
  FileText,
  Users,
  Settings,
  ListChecks,
  Lightbulb,
  BarChart,
  GitFork,
  Monitor,
  CheckCircle,
  Smile,
  Code,
  Layers,
  Zap,
  Coins,
  Repeat,
  Workflow,
  Calendar,
  GitMerge,
  ShieldCheck,
  Award,
  CheckCheck,
  BookOpen,
  Edit3,
  Heart,
  MessageSquare
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
  onOpenConsultation: () => void;
  onOpenCaseStudy: (caseId: string) => void;
  activeServiceId: string;
}

// Icon dictionary matching service requirements
const ICON_COMPONENTS: Record<string, React.ElementType> = {
  TrendingUp,
  FileCheck,
  Cpu,
  RefreshCw,
  Kanban,
  GraduationCap,
  Compass,
  Target,
  CheckSquare,
  Search,
  FileText,
  Users,
  Settings,
  ListChecks,
  Lightbulb,
  BarChart,
  GitFork,
  Monitor,
  CheckCircle,
  Smile,
  Code,
  Layers,
  Zap,
  Coins,
  Repeat,
  Workflow,
  Calendar,
  GitMerge,
  ShieldCheck,
  Award,
  CheckCheck,
  BookOpen,
  Edit3,
  Heart,
  MessageSquare
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
  onOpenConsultation,
  onOpenCaseStudy,
  activeServiceId,
}) => {
  return (
    <section id="services" className="relative scroll-mt-20">
      
      {/* 1. SINGLE SERVICES INTRODUCTION (ONLY ONE HERO FOR ALL SERVICES) */}
      <div className="bg-[#001F3F] text-white pt-20 pb-16 border-t border-b border-white/10 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: `url(\"${VISUAL_ASSETS.servicesHero}\")` }} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#001429]/95 via-[#001F3F]/90 to-[#001F3F]/65" />
        {/* Subtle grid signature */}
        <div className="absolute inset-0 bg-nodes-subtle opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FFB81C] mb-3">
              <span className="w-5 h-[2px] bg-[#FFB81C]" />
              <span>Our Services</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Integrated expertise for{' '}
              <span className="text-[#FFB81C] italic">lasting results.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Six core services, designed to help organisations plan, improve, transform and deliver with confidence.
            </p>
          </div>

          {/* Quick Service Anchor Navigation Bar */}
          <div className="mt-10 pt-8 border-t border-white/15">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
              Jump to a detailed service section:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SERVICES.map((s, idx) => {
                const isActive = activeServiceId === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`p-3 rounded-lg text-left transition-all block border text-xs focus-visible-brand ${
                      isActive
                        ? 'bg-[#FFB81C] text-[#001F3F] border-[#FFB81C] font-bold shadow-md'
                        : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/15 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[10px] opacity-75 font-mono mb-0.5">0{idx + 1}.</div>
                    <div className="font-semibold line-clamp-1">{s.name}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE SIX DETAILED SERVICE SECTIONS (ON ONE COHESIVE PAGE) */}
      <div className="divide-y divide-slate-200/80">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={service.id}
              id={service.id}
              data-reveal
              className={`scroll-mt-24 py-20 lg:py-28 relative ${
                isEven ? 'bg-white' : 'bg-[#F8FAFC] bg-blueprint-subtle'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Service Header & Tagline */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45309] mb-2">
                      <span>Service 0{index + 1} of 06</span>
                      <span aria-hidden="true">·</span>
                      <span>HTB Consult</span>
                    </div>

                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#001F3F] tracking-tight">
                      {service.name}
                    </h3>
                    
                    <p className="mt-2 text-lg text-slate-700 font-medium italic">
                      “{service.shortTagline}”
                    </p>
                    
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.heroIntro}
                    </p>
                  </div>

                  {/* Handwritten Script Accent for this specific service */}
                  <div className="lg:text-right shrink-0">
                    <span className="font-script text-[#B45309] text-2xl sm:text-3xl block">
                      “{service.scriptPhrase}”
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForEnquiry(service.name)}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer"
                    >
                      <span>Discuss Your Requirement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 4 Practical Benefits / Outcomes Pill Bar */}
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.benefits.map((b) => {
                    const BIcon = ICON_COMPONENTS[b.icon] || CheckCircle;
                    return (
                      <div
                        key={b.title}
                        className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-[#FFB81C]/60 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] mb-2.5">
                          <BIcon className="w-4 h-4" strokeWidth={1.8} />
                        </div>
                        <h4 className="text-xs font-bold text-[#001F3F]">{b.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                          {b.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Main 2-Column Details: What We Do & Our Service Includes */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left Column: What We Do & Approach */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <div className="text-xs font-bold tracking-wider uppercase text-[#B45309] mb-2">
                        What We Do
                      </div>
                      <h4 className="font-editorial text-xl sm:text-2xl font-semibold text-[#001F3F]">
                        {service.shortTagline}
                      </h4>
                      <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.whatWeDo}
                      </p>
                    </div>

                    {/* Service Approach Step Flow */}
                    <div className="p-6 rounded-2xl bg-[#001F3F] text-white shadow-md">
                      <div className="text-xs font-bold tracking-wider uppercase text-[#FFB81C] mb-4">
                        Structured Approach
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {service.approachSteps.map((st) => (
                          <div key={st.num} className="border-l-2 border-[#FFB81C]/40 pl-3">
                            <span className="text-[11px] font-mono text-[#FFB81C] font-bold block">
                              {st.num} · {st.title}
                            </span>
                            <span className="text-[11px] text-slate-300 leading-tight block mt-1">
                              {st.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Case Study snippet if present */}
                    {service.caseStudySnippet && (
                      <div className="p-5 rounded-xl bg-[#FFF8E7] border border-[#FFB81C]/40">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309]">
                          Related Impact
                        </div>
                        <div className="font-semibold text-sm text-[#001F3F] mt-1">
                          {service.caseStudySnippet.title}
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          {service.caseStudySnippet.description}
                        </p>
                        {service.caseStudySnippet.linkId && (
                          <button
                            type="button"
                            onClick={() => onOpenCaseStudy(service.caseStudySnippet!.linkId!)}
                            className="mt-3 text-xs font-bold text-[#001F3F] hover:text-[#B45309] flex items-center gap-1.5 underline"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Our Service Includes 6 Distinct Areas */}
                  <div className="lg:col-span-7">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                        <div className="text-xs font-bold tracking-wider uppercase text-[#B45309]">
                          Our Service Includes
                        </div>
                        <span className="text-xs text-slate-400 font-medium">
                          6 Key Focus Areas
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {service.includes.map((inc) => {
                          const IncIcon = ICON_COMPONENTS[inc.icon] || FileText;
                          return (
                            <div
                              key={inc.title}
                              className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/60 hover:bg-[#FFF8E7]/40 hover:border-[#FFB81C]/40 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#001F3F]">
                                  <IncIcon className="w-4 h-4 text-[#B45309]" strokeWidth={1.75} />
                                </div>
                                <div>
                                  <h5 className="text-xs sm:text-sm font-bold text-[#001F3F]">
                                    {inc.title}
                                  </h5>
                                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    {inc.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Service Action Footer Strip */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-500">
                          Need tailored support for <strong className="text-slate-800">{service.name}</strong>?
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => onSelectServiceForEnquiry(service.name)}
                            className="px-4 py-2 text-xs font-semibold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors focus-visible-brand cursor-pointer"
                          >
                            Send Enquiry
                          </button>
                          <button
                            type="button"
                            onClick={onOpenConsultation}
                            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-md transition-colors focus-visible-brand cursor-pointer"
                          >
                            Book Teams Call
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
};
