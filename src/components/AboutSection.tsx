import React from 'react';
import { ArrowRight, CheckCircle2, Star, Award, Handshake, BarChart2 } from 'lucide-react';
import { CORE_VALUES } from '../config/siteData';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface AboutSectionProps {
  onLearnMoreServices: () => void;
  onBookConsultation: () => void;
  showIntro?: boolean;
}

const VALUE_ICONS: Record<string, React.ElementType> = {
  Star,
  Award,
  Handshake,
  BarChart2,
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreServices,
  onBookConsultation,
  showIntro = true,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] bg-blueprint-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showIntro && (
        <div className="max-w-3xl" data-reveal>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
            <span className="w-5 h-[2px] bg-[#FFB81C]" />
            <span>About HTB Consult</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#001F3F] leading-tight text-balance">
            People. Insight.{' '}
            <span className="text-[#0A2E5C] italic">Practical Solutions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We are a UK-based digital transformation and business strategy consultancy helping organisations turn complex challenges into clear, practical and measurable solutions.
          </p>
        </div>
        )}

        {/* Story & Visual Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Story & Mission Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Our Story</div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#001F3F] mt-1">
                A consultancy built on real-world experience.
              </h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                HTB Consult was founded to bridge the gap between strategy and delivery, helping organisations turn ideas into practical solutions that work in the real world. We combine business analysis, digital capability and hands-on support to deliver solutions that create measurable value.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#001F3F] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB81C]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  To help organisations plan, improve, transform and deliver with clarity, confidence and measurable results.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#001F3F] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB81C]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  To be a trusted partner for organisations seeking practical digital and business solutions that create real and lasting impact.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onLearnMoreServices}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#001F3F] hover:bg-slate-100 rounded-md border border-slate-300 transition-colors focus-visible-brand cursor-pointer"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          {/* Visual Side: Strategy Workshop Image & Handwritten Tag */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group">
              <img
                src={VISUAL_ASSETS.strategyWorkshop}
                alt="HTB Consult team collaborating on business strategy and workflow mapping"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/90 via-[#001F3F]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-script text-[#FFB81C] text-2xl sm:text-3xl block">
                  “Different Sectors. Practical Impact.”
                </span>
                <p className="text-xs text-slate-200 mt-1">
                  Experienced consulting tailored for public, private and third-sector organisations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose HTB Consult - 4 Values Grid */}
        <div className="mt-16 bg-[#001F3F] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#FFB81C]">
              Why Choose HTB Consult
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium mt-1">
              A partner you can trust.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              We work with organisations of all sizes across different sectors, bringing a clear, practical and collaborative approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComp = VALUE_ICONS[val.icon] || Star;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFB81C]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFB81C]/20 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">{val.title}</h4>
                  <p className="text-xs text-slate-300 mt-1">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
