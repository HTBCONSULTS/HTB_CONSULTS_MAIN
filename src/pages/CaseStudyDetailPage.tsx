import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Layers3,
  Quote,
} from 'lucide-react';
import { CASE_STUDIES } from '../config/siteData';
import { NotFoundPage } from './NotFoundPage';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((item) => item.id === slug);

  if (!study) return <NotFoundPage />;

  return (
    <>
      <header className="relative isolate overflow-hidden bg-[#001F3F] pb-12 pt-28 text-white sm:pb-16 sm:pt-32">
        {study.image && (
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url("${study.image}")` }}
          />
        )}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001429]/95 via-[#001F3F]/90 to-[#001F3F]/75" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="focus-visible-brand inline-flex items-center gap-2 rounded-md text-sm font-semibold text-slate-200 transition-colors hover:text-[#FFB81C]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All case studies
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">
              <span>{study.sector}</span>
              <span aria-hidden="true">·</span>
              <span>{study.serviceArea}</span>
            </div>
            <h1 className="font-editorial text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {study.subtitle}
            </p>
            <dl className="mt-8 grid gap-4 border-t border-white/15 pt-6 text-sm sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB81C]" aria-hidden="true" />
                <div><dt className="text-xs text-slate-400">Organisation</dt><dd className="mt-1 font-medium text-white">{study.clientType}</dd></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB81C]" aria-hidden="true" />
                <div><dt className="text-xs text-slate-400">Duration</dt><dd className="mt-1 font-medium text-white">{study.duration}</dd></div>
              </div>
              <div className="flex items-start gap-3">
                <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB81C]" aria-hidden="true" />
                <div><dt className="text-xs text-slate-400">HTB Consult role</dt><dd className="mt-1 font-medium text-white">{study.role}</dd></div>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="relative bg-[#F8FAFC] bg-blueprint-subtle py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <article className="min-w-0 space-y-6 lg:col-span-8">
            {study.image && (
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={study.image}
                  alt={`Illustrative project visual for ${study.title}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[30rem] w-full object-contain"
                />
              </figure>
            )}

            <section aria-labelledby="challenge-heading" className="htb-glass-panel rounded-2xl p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A4B08]">The context</p>
              <h2 id="challenge-heading" className="mt-2 font-editorial text-2xl font-semibold text-[#001F3F]">The challenge</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{study.challenge}</p>
            </section>

            <section aria-labelledby="approach-heading" className="htb-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A4B08]">The response</p>
              <h2 id="approach-heading" className="mt-2 font-editorial text-2xl font-semibold text-[#001F3F]">Our approach</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{study.approach}</p>
            </section>

            <section aria-labelledby="process-heading" className="htb-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A4B08]">How the work progressed</p>
              <h2 id="process-heading" className="mt-2 font-editorial text-2xl font-semibold text-[#001F3F]">Delivery process</h2>
              <ol className="mt-5 space-y-4">
                {study.process.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF2CC] text-xs font-bold text-[#7A4A00]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="pt-0.5">{step.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ol>
            </section>

            {study.quote && (
              <blockquote className="relative rounded-2xl bg-[#001F3F] p-6 text-white sm:p-8">
                <Quote className="absolute right-5 top-5 h-7 w-7 text-[#FFB81C]/60" aria-hidden="true" />
                <p className="pr-8 font-editorial text-lg italic leading-relaxed text-slate-100 sm:text-xl">“{study.quote.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-[#FFB81C]">— {study.quote.author}</footer>
              </blockquote>
            )}
          </article>

          <aside className="space-y-5 lg:col-span-4">
            <section aria-labelledby="results-heading" className="htb-glass-panel rounded-2xl p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A4B08]">The outcomes</p>
              <h2 id="results-heading" className="mt-2 font-editorial text-xl font-semibold text-[#001F3F]">Project results</h2>
              <ul className="mt-4 space-y-3">
                {study.results.map((result) => (
                  <li key={result.label} className="rounded-xl border border-[#FFB81C]/25 bg-[#FFF8E7]/75 p-4">
                    <p className="font-editorial text-2xl font-bold text-[#001F3F]">{result.metric}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{result.label}</p>
                  </li>
                ))}
              </ul>
            </section>

            {study.technologies && study.technologies.length > 0 && (
              <section aria-labelledby="tools-heading" className="htb-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 id="tools-heading" className="font-editorial text-lg font-semibold text-[#001F3F]">Platforms &amp; capabilities</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">{technology}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="rounded-2xl bg-[#001F3F] p-5 text-white shadow-lg sm:p-6">
              <CheckCircle2 className="h-6 w-6 text-[#FFB81C]" aria-hidden="true" />
              <h2 className="mt-3 font-editorial text-xl font-semibold">Facing a similar challenge?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Talk with HTB Consult about practical next steps for your organisation.</p>
              <Link to="/contact" className="focus-visible-brand mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FFB81C] px-4 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:bg-[#E5A312]">
                Discuss your project<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
};
