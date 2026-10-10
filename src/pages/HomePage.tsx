import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { TrustPillarsStrip } from '../components/TrustPillarsStrip';
import { SERVICES } from '../config/siteData';
import { VISUAL_ASSETS } from '../config/visualAssets';
import { COLLABORATION_VIDEO_SOURCE } from '../config/videoConfig';

interface HomePageProps {
  onExploreServices: () => void;
  onDiscussProject: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onExploreServices, onDiscussProject }) => (
  <>
    <Hero onExploreServices={onExploreServices} onDiscussProject={onDiscussProject} />
    <TrustPillarsStrip />

    <section className="relative overflow-hidden bg-white bg-blueprint-subtle py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8" data-reveal>
        <div className="lg:col-span-6">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B00]">
            <span className="h-px w-7 bg-[#FFB81C]" />
            A practical partner
          </p>
          <h2 className="font-editorial text-balance text-3xl font-medium leading-tight text-[#001F3F] sm:text-4xl lg:text-5xl">
            People. Insight. <span className="italic text-[#31547A]">Practical Solutions.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            HTB Consult helps organisations move from complex business challenges to clear decisions and confident delivery. We bring strategy, analysis and digital expertise together around the outcomes that matter.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {['Clear direction, grounded in your context', 'Practical plans that people can deliver', 'A collaborative partner from insight to implementation'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A96500]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="focus-visible-brand mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-[#001F3F]/15 px-5 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:border-[#FFB81C] hover:bg-[#FFF8E7]">
            Discover HTB Consult <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative lg:col-span-6">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#FFB81C]/60" aria-hidden="true" />
          <div className="htb-card relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-[#001F3F]/10">
            <img src={VISUAL_ASSETS.strategyWorkshop} alt="A team mapping strategy and processes in a collaborative workshop" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/70 via-transparent to-transparent" />
            <p className="font-script absolute bottom-5 left-6 right-6 text-3xl text-[#FFD166] sm:text-4xl">“Ideas. Strategy. Solutions. Results.”</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F6F8FB] bg-blueprint-subtle py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B00]">
              <span className="h-px w-7 bg-[#FFB81C]" />
              What we do
            </p>
            <h2 className="font-editorial text-balance text-3xl font-medium leading-tight text-[#001F3F] sm:text-4xl lg:text-5xl">
              Six ways to move your organisation forward.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Explore the areas where we bring practical expertise. Every service has its own detailed section on the Services page.
            </p>
          </div>
          <Link to="/services" className="focus-visible-brand inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-[#001F3F] hover:text-[#9A5B00]">
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="htb-card group focus-visible-brand relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300"
            >
              <span className="font-mono text-xs font-bold tracking-widest text-[#A96500]">0{index + 1}</span>
              <h3 className="mt-3 font-editorial text-xl font-semibold leading-snug text-[#001F3F]">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.shortTagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#001F3F]">
                Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFB81C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-[#001F3F] py-20 text-white lg:py-24">
      <BackgroundVideo
        src={COLLABORATION_VIDEO_SOURCE}
        poster={VISUAL_ASSETS.crmHealthcare}
        videoClassName="brightness-105 contrast-105"
        controlPositionClassName="bottom-4 left-4"
      />
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-[#001429]/80 via-[#001F3F]/66 to-[#001F3F]/54" />
      <div aria-hidden="true" className="htb-ambient-glow absolute inset-0 z-[2]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8" data-reveal>
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FFB81C]">Evidence in practice</p>
          <h2 className="font-editorial text-balance text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">Real challenges. Practical solutions.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">See how structured analysis, thoughtful technology choices and hands-on delivery support create meaningful improvements.</p>
        </div>
        <Link to="/case-studies" className="focus-visible-brand inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#FFB81C] px-5 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:bg-[#FFD166]">
          Explore case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>

    <section className="bg-[#FFF8E7] bg-blueprint-subtle py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8" data-reveal>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A5100]">Ready for the next step?</p>
          <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#001F3F] sm:text-3xl">Let’s make progress together.</h2>
        </div>
        <button type="button" onClick={onDiscussProject} className="focus-visible-brand inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#001F3F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#15385F]">
          Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  </>
);
