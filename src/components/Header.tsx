import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { ACADEMY_SITE_URL, SERVICES } from '../config/siteData';
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Kanban,
  Menu,
  RefreshCw,
  Search,
  TrendingUp,
  X,
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
  activeServiceId: string;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'service-strategy': TrendingUp,
  'service-analysis': FileCheck,
  'service-transformation': Cpu,
  'service-process': RefreshCw,
  'service-delivery': Kanban,
  'service-bid': GraduationCap,
};

const routeClass = (active: boolean) =>
  `focus-visible-brand rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
    active ? 'bg-white/10 text-[#FFB81C]' : 'text-slate-200 hover:bg-white/5 hover:text-white'
  }`;

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenConsultation, activeServiceId }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverVideoBackground, setIsOverVideoBackground] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 18;
      const headerBottom = 92;
      const overVideo = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-glass]')).some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= headerBottom && bounds.bottom > 0;
      });
      setIsScrolled(scrolled);
      setIsOverVideoBackground(scrolled && overVideo);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const isRoute = (path: string) => location.pathname === path;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,box-shadow,padding,backdrop-filter] duration-300 ${isOverVideoBackground ? 'border-white/15 bg-[#001F3F]/60 py-2 shadow-lg shadow-black/15 backdrop-blur-xl' : isScrolled ? 'border-white/10 bg-[#001429]/95 py-2 shadow-lg shadow-black/20 backdrop-blur-xl' : 'border-white/15 bg-[#001F3F]/60 py-3 shadow-sm shadow-black/10 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenus} aria-label="HTB Consult homepage" className="focus-visible-brand shrink-0 rounded-sm py-1 transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          <Link to="/" aria-current={isRoute('/') ? 'page' : undefined} className={routeClass(isRoute('/'))}>Home</Link>
          <Link to="/about" aria-current={isRoute('/about') ? 'page' : undefined} className={routeClass(isRoute('/about'))}>About</Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocusCapture={() => setIsServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsServicesOpen(false);
            }}
          >
            <div className="flex items-center">
              <Link
                to="/services"
                aria-current={isRoute('/services') ? 'page' : undefined}
                className={`${routeClass(isRoute('/services'))} pr-1`}
                onClick={closeMenus}
              >
                Services
              </Link>
              <button
                type="button"
                aria-label="Toggle Services menu"
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
                onClick={() => setIsServicesOpen((open) => !open)}
                className="focus-visible-brand -ml-1 rounded-md p-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-[#FFB81C]"
              >
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </div>

            <div
              id="services-dropdown"
              aria-label="Services navigation"
              className={`absolute left-0 top-full mt-2 w-[22rem] origin-top-left rounded-xl border border-white/15 bg-[#001730] p-2.5 shadow-2xl shadow-black/30 transition duration-150 ${isServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
            >
              <Link to="/services" onClick={closeMenus} className="focus-visible-brand mb-1 flex items-center justify-between rounded-lg border-b border-white/10 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFB81C] hover:bg-white/5">
                Explore all services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="grid gap-1">
                {SERVICES.map((service) => {
                  const Icon = SERVICE_ICONS[service.id] || TrendingUp;
                  const active = activeServiceId === service.id && isRoute('/services');
                  return (
                    <Link
                      key={service.id}
                      to={`/services#${service.id}`}
                      onClick={closeMenus}
                      aria-current={active ? 'location' : undefined}
                      className={`focus-visible-brand group flex items-start gap-3 rounded-lg border p-2.5 transition-colors ${active ? 'border-[#FFB81C]/50 bg-white/10' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
                    >
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${active ? 'bg-[#FFB81C] text-[#001F3F]' : 'bg-white/10 text-[#FFB81C] group-hover:bg-[#FFB81C] group-hover:text-[#001F3F]'}`}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold leading-snug text-white">{service.name}</span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-slate-400">{service.shortTagline}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/case-studies" aria-current={isRoute('/case-studies') ? 'page' : undefined} className={routeClass(isRoute('/case-studies'))}>Case Studies</Link>
          <Link to="/insights" aria-current={isRoute('/insights') ? 'page' : undefined} className={routeClass(isRoute('/insights'))}>Insights</Link>
          <a href={ACADEMY_SITE_URL} target="_blank" rel="noopener noreferrer" className={`${routeClass(false)} inline-flex items-center gap-1.5`}>
            Academy <ExternalLink className="h-3 w-3 text-slate-400" aria-hidden="true" />
          </a>
          <Link to="/contact" aria-current={isRoute('/contact') ? 'page' : undefined} className={routeClass(isRoute('/contact'))}>Contact</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button type="button" onClick={onOpenSearch} aria-label="Search services and insights" className="focus-visible-brand flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={onOpenConsultation} className="focus-visible-brand hidden min-h-10 items-center gap-2 rounded-md bg-[#FFB81C] px-4 py-2 text-sm font-bold text-[#001F3F] shadow-sm transition-colors hover:bg-[#FFD166] sm:inline-flex">
            Let’s Talk <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="focus-visible-brand flex h-10 w-10 items-center justify-center rounded-md text-slate-200 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-b border-white/10 bg-[#001429] px-4 pb-6 pt-4 shadow-2xl xl:hidden sm:px-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-1.5">
            {[
              ['Home', '/'],
              ['About', '/about'],
            ].map(([label, path]) => (
              <Link key={path} to={path} onClick={closeMenus} aria-current={isRoute(path) ? 'page' : undefined} className={`focus-visible-brand rounded-lg px-3 py-3 text-sm font-semibold ${isRoute(path) ? 'bg-white/10 text-[#FFB81C]' : 'text-white hover:bg-white/5'}`}>
                {label}
              </Link>
            ))}

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center justify-between gap-3">
                <Link to="/services" onClick={closeMenus} className="focus-visible-brand rounded-sm text-sm font-bold text-[#FFB81C]">Services</Link>
                <button type="button" onClick={() => setIsServicesOpen((open) => !open)} aria-expanded={isServicesOpen} aria-controls="mobile-services" className="focus-visible-brand flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10">
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </div>
              {isServicesOpen && (
                <div id="mobile-services" className="mt-2 grid gap-1 border-t border-white/10 pt-2">
                  <Link to="/services" onClick={closeMenus} className="focus-visible-brand rounded-md px-3 py-2 text-xs font-bold text-white hover:bg-white/10">All Services</Link>
                  {SERVICES.map((service) => (
                    <Link key={service.id} to={`/services#${service.id}`} onClick={closeMenus} aria-current={activeServiceId === service.id && isRoute('/services') ? 'location' : undefined} className="focus-visible-brand rounded-md px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-[#FFB81C]">
                      <span className="block font-semibold">{service.name}</span>
                      <span className="mt-0.5 block text-xs text-slate-400">{service.shortTagline}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              ['Case Studies', '/case-studies'],
              ['Insights', '/insights'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <Link key={path} to={path} onClick={closeMenus} aria-current={isRoute(path) ? 'page' : undefined} className={`focus-visible-brand rounded-lg px-3 py-3 text-sm font-semibold ${isRoute(path) ? 'bg-white/10 text-[#FFB81C]' : 'text-white hover:bg-white/5'}`}>
                {label}
              </Link>
            ))}
            <a href={ACADEMY_SITE_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenus} className="focus-visible-brand inline-flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5">
              <span>Academy</span>
              <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </a>
            <button type="button" onClick={() => { closeMenus(); onOpenConsultation(); }} className="focus-visible-brand mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#FFB81C] px-4 py-3 text-sm font-bold text-[#001F3F] sm:hidden">
              Let’s Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
