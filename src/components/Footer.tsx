import React from 'react';
import { Logo } from './Logo';
import { SERVICES, SITE_METADATA } from '../config/siteData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'cookie') => void;
  onNavigateAnchor: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onNavigateAnchor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001429] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative fine pattern */}
      <div className="absolute inset-0 bg-nodes-subtle opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              We are a UK-based digital transformation consultancy helping organisations turn complex challenges into clear, practical and measurable solutions.
            </p>
            <div className="pt-2 font-script text-[#FFB81C] text-xl">
              “Clarity in Strategy. Confidence in Delivery.”
            </div>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB81C]">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateAnchor(s.id)}
                    className="hover:text-white hover:underline transition-colors text-left focus-visible-brand cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Direct Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB81C] mb-3">
                Quick Navigation
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('hero')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('about')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  About Us
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('services')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  All Services
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('approach')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Our Approach
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('case-studies')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Case Studies
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('insights')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Insights & Articles
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('academy')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Academy Courses ↗
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAnchor('contact')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Contact & Bookings
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFB81C]" />
                <a href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {SITE_METADATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFB81C]" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-white">
                  {SITE_METADATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFB81C]" />
                <span>{SITE_METADATA.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} HTB Consult Ltd. All rights reserved. Registered in the United Kingdom.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('cookie')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible-brand"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
