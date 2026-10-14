import React from 'react';
import { Compass, FileText, GitBranch, Users } from 'lucide-react';
import { FOUR_PILLARS } from '../config/siteData';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  FileText,
  GitBranch,
  Users,
};

const PILLARS_IMAGE_ALT = FOUR_PILLARS.map(
  (pillar) => `${pillar.title}: ${pillar.description}`
).join(' ');

export const TrustPillarsStrip: React.FC = () => (
  <section id="trust-pillars" aria-label="How HTB Consult supports clients" className="relative z-20 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-2xl border border-white/80 bg-white p-2.5 shadow-xl shadow-slate-900/10 sm:p-3">
      <div className="overflow-hidden rounded-xl bg-[#001F3F]">
        <div className="hidden aspect-[5.6/1] lg:block">
          <img
            src="/media/trust-pillars-emailed.webp"
            alt={PILLARS_IMAGE_ALT}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="grid grid-cols-2 lg:hidden">
          {FOUR_PILLARS.map((pillar, index) => {
            const Icon = ICON_MAP[pillar.icon] || Compass;
            return (
              <article
                key={pillar.title}
                className={`flex min-h-40 flex-col items-center justify-center px-3 py-5 text-center sm:min-h-44 sm:px-6 sm:py-6 ${
                  index < 2 ? 'border-b border-white/10' : ''
                } ${index % 2 === 0 ? 'border-r border-white/10' : ''}`}
              >
                <Icon
                  className="mb-3 h-7 w-7 shrink-0 text-[#FFB81C] sm:h-8 sm:w-8"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-slate-200">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
