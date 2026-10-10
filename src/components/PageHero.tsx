import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  image,
  ctaLabel,
  ctaTo,
}) => (
  <section className="relative isolate flex min-h-[22rem] items-end overflow-hidden bg-[#001F3F] pb-12 pt-32 text-white sm:min-h-[26rem] sm:pb-16 lg:min-h-[30rem] lg:pb-20">
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-20 bg-cover bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    />
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001429]/95 via-[#001F3F]/80 to-[#001F3F]/40" />
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-nodes-subtle opacity-25" />
    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001429]/60 to-transparent" />

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs text-white/70">
        <Link to="/" className="rounded-sm hover:text-[#FFB81C] focus-visible-brand">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span aria-current="page" className="text-[#FFB81C]">{eyebrow}</span>
      </nav>

      <div className="max-w-3xl" data-reveal>
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFB81C]">
          <span className="h-px w-7 bg-[#FFB81C]" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="font-editorial text-balance text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {description}
        </p>
        {ctaLabel && ctaTo && (
          <Link
            to={ctaTo}
            className="focus-visible-brand mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#FFB81C] px-5 py-3 text-sm font-bold text-[#001F3F] shadow-lg shadow-black/20 transition-colors hover:bg-[#FFD166]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  </section>
);
