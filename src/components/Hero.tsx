import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { HERO_VIDEO_CONFIG } from '../config/videoConfig';

interface HeroProps {
  onExploreServices: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onDiscussProject }) => {
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check user's reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] md:min-h-[88vh] flex items-center justify-center bg-[#001F3F] text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Background Layer: Video or Static Fallback Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {!prefersReducedMotion && !videoError ? (
          <video
            ref={videoRef}
            src={HERO_VIDEO_CONFIG.videoSource}
            poster={HERO_VIDEO_CONFIG.posterImage}
            autoPlay
            muted
            loop
            playsInline
            preload={HERO_VIDEO_CONFIG.preload}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
        ) : (
          <img
            src={HERO_VIDEO_CONFIG.posterImage}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Sophisticated Dual Scrim for Maximum Text Contrast and Luxury Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001429] via-[#001F3F]/90 to-[#001F3F]/60" />
        <div className="absolute inset-0 bg-radial-[at_20%_30%] from-transparent via-[#001429]/40 to-[#001429]/90" />
        
        {/* Subtle decorative fine blueprint lines */}
        <div className="absolute inset-0 bg-nodes-subtle opacity-15 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FFB81C]">
              <span className="w-6 h-[2px] bg-[#FFB81C]" />
              <span>Business & Digital Solutions</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1
              id="hero-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] text-balance"
            >
              Clarity in Strategy.{' '}
              <span className="text-[#FFB81C] font-semibold italic block sm:inline">
                Confidence in Delivery.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed font-normal">
              We help organisations solve complex challenges, define practical solutions and turn business ideas into measurable outcomes through business analysis, digital transformation and strategic delivery.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] active:bg-[#C98E0E] rounded-md transition-all shadow-lg shadow-black/20 focus-visible-brand cursor-pointer group whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onDiscussProject}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/15 border border-white/25 rounded-md transition-all focus-visible-brand cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#FFB81C]" />
                <span>Discuss Your Project</span>
              </button>
            </div>

            {/* Location & Trust Marker */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFB81C]" />
                <span>Chesterfield, Derbyshire, UK</span>
              </span>
              <span className="text-white/30">|</span>
              <span>Serving Public, Private & Third Sector</span>
            </div>
          </div>

          {/* Right Column: Hand-drawn script accent badge & visual card */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 shadow-2xl max-w-sm w-full">
              {/* Handwritten script signature matching reference */}
              <div className="font-script text-[#FFB81C] text-2xl sm:text-3xl leading-snug">
                “Ideas. Strategy. Solutions. Results.”
              </div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Practical consulting tailored to your operating environment, delivering genuine business clarity and lasting change.
              </p>
              
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Initial Discovery</span>
                <span className="font-semibold text-white flex items-center gap-1 text-[#FFB81C]">
                  <Sparkles className="w-3.5 h-3.5" /> 30-min Microsoft Teams
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
