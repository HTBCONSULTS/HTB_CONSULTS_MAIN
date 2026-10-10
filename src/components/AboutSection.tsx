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
    <section id="about" className="relative bg-[#F8FAFC] bg-blueprint-subtle bg-blueprint-mobile-soft py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showIntro && (
        <div className="htb-glass-panel max-w-3xl rounded-2xl p-5 sm:p-8" data-reveal>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
            <span className="w-5 h-[2px] bg-[#FFB81C]" />
            <span>About HTB Consult</span>
          </div>
          <h2 className="font-editorial text-[clamp(1.875rem,7.8vw,3rem)] font-medium leading-[1.12] text-[#001F3F] text-balance sm:text-4xl lg:text-5xl">
            People. Insight.{' '}
            <span className="text-[#0A2E5C] italic">Practical Solutions.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            We are a UK-based digital transformation and business strategy consultancy helping organisations turn complex challenges into clear, practical and measurable solutions.
          </p>
        </div>
        )}

        {/* Story & Visual Split */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-7 sm:mt-12 sm:gap-10 lg:grid-cols-12">
          
          {/* Story & Mission Content */}
          <div className="htb-card flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:space-y-8 sm:p-10 lg:col-span-7">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Our Story</div>
              <h3 className="font-editorial mt-1 text-[21px] font-semibold leading-snug text-[#001F3F] sm:text-3xl">
                A consultancy built on real-world experience.
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-relaxed">
                HTB Consult was founded to bridge the gap between strategy and delivery, helping organisations turn ideas into practical solutions that work in the real world. We combine business analysis, digital capability and hands-on support to deliver solutions that create measurable value.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2 sm:gap-4">
              <div className="htb-card rounded-xl border border-slate-200/60 bg-[#F8FAFC] p-3.5 sm:p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#001F3F] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB81C]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  To help organisations plan, improve, transform and deliver with clarity, confidence and measurable results.
                </p>
              </div>

              <div className="htb-card rounded-xl border border-slate-200/60 bg-[#F8FAFC] p-3.5 sm:p-4">
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
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
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
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="htb-card group relative aspect-[4/3] min-h-[260px] overflow-hidden rounded-2xl border border-slate-200/80 shadow-md sm:aspect-[16/10] sm:min-h-[320px] lg:aspect-auto lg:h-full">
              <img
                src={VISUAL_ASSETS.strategyWorkshop}
                alt="Professionals collaborating during a business strategy workshop"
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
        <div className="htb-card htb-card--dark mt-12 rounded-2xl border border-white/10 bg-[#001F3F] p-5 text-white shadow-xl sm:mt-16 sm:p-12">
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
                  className="htb-card htb-card--dark p-5 rounded-xl bg-white/5 border border-white/10 transition-colors"
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
