import React from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, Lightbulb, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { FeaturedCaseStudyDeviceMockup } from '../components/FeaturedCaseStudyDeviceMockup';
import { TrustPillarsStrip } from '../components/TrustPillarsStrip';
import { SERVICES } from '../config/siteData';
import { VISUAL_ASSETS } from '../config/visualAssets';

const ORAPY_STORY_STEPS = [
  {
    title: 'The challenge',
    description: 'A clear summary of the key challenges faced by the organisation.',
    Icon: Target,
  },
  {
    title: 'Our approach',
    description: 'How HTB worked with the team to design and deliver the solution.',
    Icon: Lightbulb,
  },
  {
    title: 'The outcome',
    description: 'The results and impact achieved through our collaboration.',
    Icon: BarChart3,
  },
];

interface HomePageProps {
  onExploreServices: () => void;
  onDiscussProject: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onExploreServices, onDiscussProject }) => (
  <>
    <Hero onExploreServices={onExploreServices} onDiscussProject={onDiscussProject} />
    <TrustPillarsStrip />

    <section id="home-about" className="relative overflow-hidden bg-white bg-blueprint-subtle bg-blueprint-mobile-soft py-14 sm:py-16 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8" data-reveal>
        <div className="htb-glass-panel rounded-2xl p-5 sm:p-7 lg:col-span-6">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B00]">
            <span className="h-px w-7 bg-[#FFB81C]" />
            A practical partner
          </p>
          <h2 className="font-editorial text-balance text-[clamp(1.875rem,7.8vw,3rem)] font-medium leading-[1.12] text-[#001F3F] sm:text-4xl lg:text-5xl">
            People. Insight. <span className="italic text-[#31547A]">Practical Solutions.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-relaxed">
            HTB Consult helps organisations move from complex business challenges to clear decisions and confident delivery. We bring strategy, analysis and digital expertise together around the outcomes that matter.
          </p>
          <ul className="mt-5 space-y-2.5 text-[13px] text-slate-700 sm:mt-6 sm:space-y-3 sm:text-sm">
            {['Clear direction, grounded in your context', 'Practical plans that people can deliver', 'A collaborative partner from insight to implementation'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A96500]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="focus-visible-brand mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-[#001F3F]/15 px-5 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:border-[#FFB81C] hover:bg-[#FFF8E7] sm:mt-8">
            Discover HTB Consult <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative lg:col-span-6">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#FFB81C]/60" aria-hidden="true" />
          <div className="htb-card relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-[#001F3F]/10">
            <img src={VISUAL_ASSETS.practicalPartnerTeam} alt="Colleagues sharing ideas around a conference table in a bright office" className="aspect-[16/10] w-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/70 via-transparent to-transparent" />
            <p className="font-script absolute bottom-5 left-6 right-6 text-3xl text-[#FFD166] sm:text-4xl">“Ideas. Strategy. Solutions. Results.”</p>
          </div>
        </div>
      </div>
    </section>

    <section id="home-services" className="bg-[#F6F8FB] bg-blueprint-subtle bg-blueprint-mobile-soft py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="htb-glass-panel mb-7 flex flex-col gap-3 rounded-2xl p-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:p-7">
          <div className="max-w-3xl">
            <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A5B00] sm:mb-3 sm:text-xs">
              <span className="h-px w-7 bg-[#FFB81C]" />
              What we do
            </p>
            <h2 className="font-editorial text-balance text-[clamp(1.8rem,7.5vw,3rem)] font-medium leading-[1.12] text-[#001F3F] sm:text-4xl lg:text-5xl">
              Six ways to move your organisation forward.
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-relaxed">
              Explore the areas where we bring practical expertise. Every service has its own detailed section on the Services page.
            </p>
          </div>
          <Link to="/services" className="focus-visible-brand inline-flex min-h-10 shrink-0 self-start items-center gap-2 rounded-md px-2 text-sm font-bold text-[#001F3F] transition-colors hover:bg-white/70 hover:text-[#9A5B00] sm:self-auto sm:pb-1">
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" data-reveal>
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="htb-card group focus-visible-brand relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4.5 transition-colors duration-300 sm:p-6"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#FFF8E7] font-mono text-xs font-bold tracking-wide text-[#8A5100] transition-colors group-hover:bg-[#FFB81C] group-hover:text-[#001F3F] sm:h-10 sm:w-10">
                  0{index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-editorial text-[17px] font-semibold leading-snug text-[#001F3F] sm:text-xl">{service.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-slate-600 sm:text-sm sm:leading-relaxed">{service.shortTagline}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 pl-[3.125rem] text-[13px] font-bold text-[#001F3F] sm:mt-5 sm:text-xs">
                Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFB81C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section id="home-featured-case-study" aria-labelledby="home-featured-case-study-heading" className="bg-white bg-blueprint-subtle bg-blueprint-mobile-soft py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="mb-7 max-w-4xl sm:mb-9">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B00]">
            <span className="h-px w-7 bg-[#FFB81C]" aria-hidden="true" />
            Our work
          </p>
          <h2 id="home-featured-case-study-heading" className="font-editorial text-balance text-[clamp(1.85rem,7.5vw,3.35rem)] font-medium leading-[1.12] text-[#001F3F]">
            See how ideas become practical solutions.
          </h2>
        </div>

        <article aria-labelledby="featured-case-study-title" className="htb-card grid overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-[#001F3F]/10 lg:grid-cols-2">
          <FeaturedCaseStudyDeviceMockup />

          <div className="flex flex-col justify-between bg-[#F4F7FB] p-5 sm:p-7 lg:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A4B08]">
                Illustrative case study layout
              </p>
              <h3 id="featured-case-study-title" className="mt-2 font-editorial text-[1.55rem] font-semibold leading-tight text-[#001F3F] sm:text-3xl">
                Orapy <span className="text-[#B07818]">|</span> Digital transformation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                A dedicated space to show the challenge, HTB’s contribution and verified project outcomes.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {ORAPY_STORY_STEPS.map(({ title, description, Icon }) => (
                  <div key={title} className="border-t border-slate-200 pt-3 md:border-t-0 md:pt-0 lg:border-t lg:pt-3 xl:border-t-0 xl:pt-0">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#001F3F]">
                      <Icon className="h-5 w-5 shrink-0 text-[#B07818]" aria-hidden="true" />
                      <h4>{title}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/case-studies" className="focus-visible-brand inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-[#FFB81C] px-5 py-3 text-sm font-bold text-[#001F3F] transition-colors hover:bg-[#FFD166]">
                Explore case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="max-w-xs text-xs leading-relaxed text-slate-500 sm:text-right">
                Concept preview. Case study content to be verified before publication.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="bg-[#FFF8E7] bg-blueprint-subtle py-14 sm:py-16">
      <div className="htb-glass-panel mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl p-5 sm:px-7 sm:py-6 md:flex-row md:items-center md:justify-between lg:px-8" data-reveal>
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
