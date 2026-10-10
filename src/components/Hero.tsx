import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { BackgroundVideo } from './BackgroundVideo';
import { HERO_VIDEO_CONFIG } from '../config/videoConfig';

interface HeroProps {
  onExploreServices: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onDiscussProject }) => (
  <section
    id="hero"
    data-nav-glass
    aria-labelledby="hero-heading"
    className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#001F3F] pb-16 pt-24 text-white md:min-h-[88vh]"
  >
    <BackgroundVideo
      src={HERO_VIDEO_CONFIG.videoSource}
      showPoster={false}
      eager
      videoClassName="brightness-110 contrast-105"
    />
    <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-[#001429]/70 via-[#001F3F]/48 to-[#001F3F]/30" />
    <div aria-hidden="true" className="absolute inset-0 z-[1] bg-radial-[at_20%_30%] from-transparent via-[#001429]/10 to-[#001429]/38" />
    <div aria-hidden="true" className="htb-ambient-glow absolute inset-0 z-[2]" />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFB81C]">
            <span className="h-[2px] w-6 bg-[#FFB81C]" />
            <span>Business &amp; Digital Solutions</span>
          </div>

          <h1
            id="hero-heading"
            className="font-editorial text-balance text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Clarity in Strategy.{' '}
            <span className="block font-semibold italic text-[#FFB81C] sm:inline">
              Confidence in Delivery.
            </span>
          </h1>

          <p className="max-w-2xl text-base font-normal leading-relaxed text-slate-100 sm:text-lg lg:text-xl">
            We help organisations solve complex challenges, define practical solutions and turn business ideas into measurable outcomes through business analysis, digital transformation and strategic delivery.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onExploreServices}
              className="focus-visible-brand group inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-[#FFB81C] px-6 py-3.5 text-sm font-bold text-[#001F3F] shadow-lg shadow-black/20 transition-all hover:bg-[#E5A312] active:bg-[#C98E0E]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onDiscussProject}
              className="focus-visible-brand inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 active:bg-white/15"
            >
              <MessageSquare className="h-4 w-4 text-[#FFB81C]" />
              <span>Discuss Your Project</span>
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4 text-xs text-slate-200">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#FFB81C]" />
              <span>Chesterfield, Derbyshire, UK</span>
            </span>
            <span className="text-white/40">|</span>
            <span>Serving Public, Private &amp; Third Sector</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center lg:col-span-4 lg:items-end">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/25 bg-white/[0.12] p-6 shadow-2xl shadow-black/30 backdrop-blur-lg sm:p-8">
            <div className="font-script text-2xl leading-snug text-[#FFB81C] sm:text-3xl">
              “Ideas. Strategy. Solutions. Results.”
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-100">
              Practical consulting tailored to your operating environment, delivering genuine business clarity and lasting change.
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-xs">
              <span className="text-slate-200">Initial Discovery</span>
              <span className="flex items-center gap-1 font-semibold text-[#FFB81C]">
                <Sparkles className="h-3.5 w-3.5" /> 30-min Microsoft Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
