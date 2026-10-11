import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderPortrait from '../assets/images/leadership/oluwasegun-ajibola-portrait.webp';

const AREAS_OF_EXPERTISE = [
  'Business strategy',
  'Business analysis',
  'Digital transformation',
  'Platform development',
];

export const FounderProfileSection: React.FC = () => (
  <section
    id="founder"
    aria-labelledby="founder-heading"
    className="relative isolate bg-[#F8FAFC] bg-blueprint-subtle bg-blueprint-mobile-soft py-14 sm:py-20 lg:py-24"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="htb-glass-panel grid items-center gap-7 rounded-3xl p-4 sm:gap-10 sm:p-7 lg:grid-cols-12 lg:gap-12 lg:p-10"
        data-reveal
      >
        <div className="relative mx-auto w-full max-w-sm px-2 py-2 lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-2 translate-x-2 translate-y-2 rounded-[1.4rem] border border-[#FFB81C]/60"
          />
          <figure className="htb-card relative overflow-hidden rounded-[1.25rem] border border-white/70 bg-[#001F3F] shadow-lg">
            <img
              src={founderPortrait}
              alt="Portrait of Oluwasegun Ajibola, Founder and Managing Director of HTB Consult"
              width={1122}
              height={1402}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001429]/95 via-[#001429]/55 to-transparent px-5 pb-5 pt-16 text-white sm:px-6 sm:pb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB81C]">
                Founder &amp; Managing Director
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-7 lg:py-3">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B45309]">
            <span aria-hidden="true" className="h-[2px] w-5 bg-[#FFB81C]" />
            <span>Leadership</span>
          </div>
          <h2
            id="founder-heading"
            className="font-editorial text-balance text-3xl font-medium leading-tight tracking-tight text-[#001F3F] sm:text-4xl lg:text-[3.25rem]"
          >
            Oluwasegun Ajibola
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#7A4A00] sm:text-base">
            Founder &amp; Managing Director, HTB Consult
          </p>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-relaxed">
            <p>
              With extensive experience in business strategy, business analysis, digital transformation and platform development, Segun leads HTB Consult with a vision to support organisations through structured growth, innovation and practical digital solutions.
            </p>
            <p>
              His leadership reflects the consultancy’s wider purpose: bringing strategic insight and practical delivery together to help organisations improve performance and turn complex challenges into clear next steps.
            </p>
          </div>

          <div className="mt-6 border-t border-[#001F3F]/10 pt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Areas of expertise
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Oluwasegun Ajibola's areas of expertise">
              {AREAS_OF_EXPERTISE.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[#001F3F]/10 bg-white/55 px-3 py-1.5 text-xs font-medium text-[#001F3F] shadow-sm backdrop-blur-sm sm:text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/contact"
            className="focus-visible-brand mt-7 inline-flex items-center gap-2 rounded-md bg-[#FFB81C] px-5 py-3 text-sm font-semibold text-[#001F3F] shadow-sm transition-colors hover:bg-[#E5A312]"
          >
            Discuss a project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
