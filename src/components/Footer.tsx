import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES, SITE_METADATA } from '../config/siteData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'cookie') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#001429] pb-10 pt-16 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-nodes-subtle opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" aria-label="HTB Consult homepage" className="focus-visible-brand inline-flex rounded-sm"><Logo variant="light" /></Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">A UK-based consultancy helping organisations turn complex challenges into clear, practical and measurable solutions.</p>
            <div className="font-script text-2xl text-[#FFB81C]">“Clarity in Strategy. Confidence in Delivery.”</div>
          </div>

          <div className="space-y-3 lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">Our Core Services</h2>
            <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {SERVICES.map((service) => (
                <li key={service.id}><Link to={`/services#${service.id}`} className="focus-visible-brand rounded-sm hover:text-white hover:underline">{service.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">Explore HTB Consult</h2>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-slate-300">
                <Link to="/" className="focus-visible-brand rounded-sm hover:text-white">Home</Link>
                <Link to="/about" className="focus-visible-brand rounded-sm hover:text-white">About Us</Link>
                <Link to="/services" className="focus-visible-brand rounded-sm hover:text-white">All Services</Link>
                <Link to="/about#approach" className="focus-visible-brand rounded-sm hover:text-white">Our Approach</Link>
                <Link to="/case-studies" className="focus-visible-brand rounded-sm hover:text-white">Case Studies</Link>
                <Link to="/insights" className="focus-visible-brand rounded-sm hover:text-white">Insights & Articles</Link>
                <Link to="/academy" className="focus-visible-brand rounded-sm hover:text-white">Academy</Link>
                <Link to="/contact" className="focus-visible-brand rounded-sm hover:text-white">Contact</Link>
              </div>
            </div>

            <address className="space-y-2 border-t border-white/10 pt-4 text-sm not-italic text-slate-300">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#FFB81C]" aria-hidden="true" /><a href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`} className="focus-visible-brand rounded-sm hover:text-white">{SITE_METADATA.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#FFB81C]" aria-hidden="true" /><a href={`mailto:${SITE_METADATA.email}`} className="focus-visible-brand rounded-sm hover:text-white">{SITE_METADATA.email}</a></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FFB81C]" aria-hidden="true" /><span>{SITE_METADATA.location}</span></div>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HTB Consult Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button type="button" onClick={() => onOpenPolicy('privacy')} className="focus-visible-brand rounded-sm hover:text-white">Privacy Policy</button>
            <button type="button" onClick={() => onOpenPolicy('terms')} className="focus-visible-brand rounded-sm hover:text-white">Terms & Conditions</button>
            <button type="button" onClick={() => onOpenPolicy('cookie')} className="focus-visible-brand rounded-sm hover:text-white">Cookie Policy</button>
            <button type="button" onClick={scrollToTop} aria-label="Back to top" className="focus-visible-brand flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-[#FFB81C] hover:text-[#001F3F]">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
