import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { ACADEMY_SITE_URL, SERVICES, SITE_METADATA } from '../config/siteData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'cookie') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#001429] pb-8 pt-14 text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start grid-cols-1 gap-x-8 gap-y-9 border-b border-white/10 pb-9 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" aria-label="HTB Consult homepage" className="focus-visible-brand inline-flex rounded-sm"><Logo /></Link>
            <p className="max-w-sm text-xs leading-relaxed text-slate-300">A UK-based consultancy helping organisations turn complex challenges into clear, practical and measurable solutions.</p>
            <div className="font-script text-xl text-[#FFB81C]">“Clarity in Strategy. Confidence in Delivery.”</div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">Our Core Services</h2>
            <ul className="grid gap-2 text-xs leading-5 text-slate-300">
              {SERVICES.map((service) => (
                <li key={service.id}><Link to={`/services#${service.id}`} className="focus-visible-brand rounded-sm hover:text-white hover:underline">{service.name}</Link></li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">Explore HTB Consult</h2>
            <ul className="grid gap-2 text-xs leading-5 text-slate-300">
              <li><Link to="/" className="focus-visible-brand rounded-sm hover:text-white">Home</Link></li>
              <li><Link to="/about" className="focus-visible-brand rounded-sm hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="focus-visible-brand rounded-sm hover:text-white">All Services</Link></li>
              <li><Link to="/about#approach" className="focus-visible-brand rounded-sm hover:text-white">Our Approach</Link></li>
              <li><Link to="/case-studies" className="focus-visible-brand rounded-sm hover:text-white">Case Studies</Link></li>
              <li><Link to="/insights" className="focus-visible-brand rounded-sm hover:text-white">Insights & Articles</Link></li>
              <li><a href={ACADEMY_SITE_URL} target="_blank" rel="noopener noreferrer" className="focus-visible-brand rounded-sm hover:text-white">Academy</a></li>
              <li><Link to="/contact" className="focus-visible-brand rounded-sm hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB81C]">Contact</h2>
            <address className="space-y-2.5 text-xs leading-5 not-italic text-slate-300">
              <div className="flex items-start gap-2"><Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFB81C]" aria-hidden="true" /><a href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`} className="focus-visible-brand break-words rounded-sm hover:text-white">{SITE_METADATA.phone}</a></div>
              <div className="flex items-start gap-2"><Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFB81C]" aria-hidden="true" /><a href={`mailto:${SITE_METADATA.email}`} className="focus-visible-brand break-words rounded-sm hover:text-white">{SITE_METADATA.email}</a></div>
              <div className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFB81C]" aria-hidden="true" /><a href={SITE_METADATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="focus-visible-brand break-words rounded-sm hover:text-white">WhatsApp: {SITE_METADATA.phone}</a></div>
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFB81C]" aria-hidden="true" /><span>{SITE_METADATA.location}</span></div>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center">
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
