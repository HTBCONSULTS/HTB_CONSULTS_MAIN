import React from 'react';
import { TrendingUp, Lightbulb, Users, ShieldCheck } from 'lucide-react';
import { FOUR_PILLARS, TRUST_METRICS } from '../config/siteData';

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  Lightbulb,
  Users,
  ShieldCheck,
};

export const TrustPillarsStrip: React.FC = () => {
  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 4 Pillars Card Row */}
      <div className="bg-white rounded-xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {FOUR_PILLARS.map((pillar, index) => {
            const Icon = ICON_MAP[pillar.icon] || TrendingUp;
            return (
              <div
                key={pillar.title}
                className={`flex items-center gap-4 ${
                  index > 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''
                }`}
              >
                {/* Thin-line circular icon style matching reference */}
                <div className="w-12 h-12 rounded-full bg-[#FFF8E7] border border-[#FFB81C]/40 flex items-center justify-center shrink-0 text-[#001F3F] transition-transform hover:scale-105">
                  <Icon className="w-5 h-5 text-[#B45309]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#001F3F] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mt-8 bg-[#001F3F] text-white rounded-xl p-6 sm:p-8 shadow-lg border border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-white/10">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="px-2 sm:px-4 py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFB81C] tracking-tight font-sans">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-100 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
