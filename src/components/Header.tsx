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
  const [isOverHeroOrVideo, setIsOverHeroOrVideo] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 18;
      const headerBottom = document.querySelector('header')?.getBoundingClientRect().height ?? 92;
      const overVideo = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-glass]')).some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= headerBottom && bounds.bottom > 0;
      });
      setIsScrolled(scrolled);
      setIsOverHeroOrVideo(overVideo);
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const animationFrame = window.requestAnimationFrame(() => mobileMenuCloseRef.current?.focus());
    const getFocusableItems = () => Array.from(mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    ) ?? []).filter((item) => item.getClientRects().length > 0 && !item.closest('[hidden]'));
    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const items = getFocusableItems();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const handleDesktopResize = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleMenuKeyDown);
    window.addEventListener('resize', handleDesktopResize);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleMenuKeyDown);
      window.removeEventListener('resize', handleDesktopResize);
      mobileMenuTriggerRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  const isRoute = (path: string) => location.pathname === path;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,box-shadow,padding,backdrop-filter] duration-300 ${isOverHeroOrVideo ? 'border-white/20 bg-[#001F3F]/35 py-2 shadow-lg shadow-black/15 backdrop-blur-lg' : isScrolled ? 'border-white/10 bg-[#001429]/95 py-2 shadow-lg shadow-black/20 backdrop-blur-xl' : 'border-white/10 bg-[#001429]/95 py-3 shadow-lg shadow-black/15 backdrop-blur-xl'}`}>
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
            ref={mobileMenuTriggerRef}
            onClick={() => {
              if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
              } else {
                setIsServicesOpen(false);
                setIsMobileMenuOpen(true);
              }
            }}
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
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation menu"
            onClick={closeMenus}
            className="mobile-nav-backdrop absolute inset-0 bg-[#000814]/70 backdrop-blur-[2px]"
          />
          <section
            id="mobile-navigation"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="mobile-nav-drawer-enter relative ml-auto flex h-[100dvh] w-[min(88vw,420px)] max-w-[420px] flex-col overflow-hidden rounded-l-2xl border-l border-white/10 bg-[linear-gradient(160deg,#0A2B4E_0%,#001F3F_46%,#001429_100%)] text-white shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 pb-4 pt-5">
              <Link to="/" onClick={closeMenus} aria-label="HTB Consult homepage" className="focus-visible-brand rounded-sm">
                <Logo />
              </Link>
              <button
                ref={mobileMenuCloseRef}
                type="button"
                onClick={closeMenus}
                aria-label="Close navigation menu"
                className="focus-visible-brand flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-200 transition-colors hover:border-[#FFB81C]/50 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="shrink-0 px-5 pb-4 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFB81C]">Business &amp; Digital Solutions</p>
              <h2 id="mobile-navigation-title" className="mt-1 font-editorial text-2xl font-medium text-white">Explore HTB Consult</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">Practical expertise for your next step.</p>
            </div>

            <nav aria-label="Mobile navigation" className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain px-4 pb-5">
              {[
                ['01', 'Home', '/'],
                ['02', 'About', '/about'],
              ].map(([number, label, path]) => {
                const active = isRoute(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMenus}
                    aria-current={active ? 'page' : undefined}
                    className={`focus-visible-brand group flex min-h-12 items-center gap-3 rounded-xl border px-3 transition-colors ${active ? 'border-[#FFB81C]/30 bg-[#FFB81C]/[0.08] text-white' : 'border-transparent text-slate-200 hover:border-white/10 hover:bg-white/[0.05]'}`}
                  >
                    <span className={`w-7 font-mono text-[10px] ${active ? 'text-[#FFB81C]' : 'text-slate-500'}`}>{number}</span>
                    <span className="flex-1 text-sm font-semibold">{label}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${active ? 'text-[#FFB81C]' : 'text-slate-500'}`} aria-hidden="true" />
                  </Link>
                );
              })}

              <div className={`overflow-hidden rounded-xl border transition-colors ${isRoute('/services') ? 'border-[#FFB81C]/35 bg-[#FFB81C]/[0.07]' : 'border-white/10 bg-white/[0.035]'}`}>
                <div className="flex items-center gap-1 p-1.5">
                  <Link
                    to="/services"
                    onClick={closeMenus}
                    aria-current={isRoute('/services') ? 'page' : undefined}
                    className="focus-visible-brand group flex min-h-11 min-w-0 flex-1 items-center gap-3 rounded-lg px-1.5 text-white"
                  >
                    <span className="w-7 font-mono text-[10px] text-[#FFB81C]">03</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold">Services</span>
                      <span className="mt-0.5 block text-[10px] text-slate-400">Six areas of expertise</span>
                    </span>
                    <ArrowRight className="mr-1 h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((open) => !open)}
                    aria-label={isServicesOpen ? 'Collapse service links' : 'Expand service links'}
                    aria-expanded={isServicesOpen}
                    aria-controls="mobile-services"
                    className="focus-visible-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-[#FFB81C]/40 hover:text-[#FFB81C]"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#FFB81C]' : ''}`} aria-hidden="true" />
                  </button>
                </div>

                <div id="mobile-services" hidden={!isServicesOpen} className="mx-3 mb-3 space-y-1 border-l border-white/15 pl-2">
                    <Link to="/services" onClick={closeMenus} className="focus-visible-brand flex min-h-9 items-center rounded-lg px-3 text-xs font-bold text-[#FFB81C] transition-colors hover:bg-white/[0.06]">
                      Browse all services <ArrowRight className="ml-auto h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    {SERVICES.map((service, index) => {
                      const active = activeServiceId === service.id && isRoute('/services');
                      return (
                        <Link
                          key={service.id}
                          to={`/services#${service.id}`}
                          onClick={closeMenus}
                          aria-current={active ? 'location' : undefined}
                          className={`focus-visible-brand flex min-h-10 items-center gap-3 rounded-lg border px-3 py-2 transition-colors ${active ? 'border-[#FFB81C]/25 bg-white/[0.08] text-white' : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white'}`}
                        >
                          <span className={`font-mono text-[10px] ${active ? 'text-[#FFB81C]' : 'text-slate-500'}`}>0{index + 1}</span>
                          <span className="min-w-0 flex-1 text-xs font-medium leading-snug">{service.name}</span>
                          {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB81C]" aria-hidden="true" />}
                        </Link>
                      );
                    })}
                </div>
              </div>

              {[
                ['04', 'Case Studies', '/case-studies'],
                ['05', 'Insights', '/insights'],
              ].map(([number, label, path]) => {
                const active = isRoute(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMenus}
                    aria-current={active ? 'page' : undefined}
                    className={`focus-visible-brand group flex min-h-12 items-center gap-3 rounded-xl border px-3 transition-colors ${active ? 'border-[#FFB81C]/30 bg-[#FFB81C]/[0.08] text-white' : 'border-transparent text-slate-200 hover:border-white/10 hover:bg-white/[0.05]'}`}
                  >
                    <span className={`w-7 font-mono text-[10px] ${active ? 'text-[#FFB81C]' : 'text-slate-500'}`}>{number}</span>
                    <span className="flex-1 text-sm font-semibold">{label}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${active ? 'text-[#FFB81C]' : 'text-slate-500'}`} aria-hidden="true" />
                  </Link>
                );
              })}

              <a href={ACADEMY_SITE_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenus} className="focus-visible-brand group flex min-h-12 items-center gap-3 rounded-xl border border-transparent px-3 text-slate-200 transition-colors hover:border-white/10 hover:bg-white/[0.05]">
                <span className="w-7 font-mono text-[10px] text-slate-500">06</span>
                <span className="flex-1 text-sm font-semibold">Academy</span>
                <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-[#FFB81C]" aria-hidden="true" />
              </a>

              <Link
                to="/contact"
                onClick={closeMenus}
                aria-current={isRoute('/contact') ? 'page' : undefined}
                className={`focus-visible-brand group flex min-h-12 items-center gap-3 rounded-xl border px-3 transition-colors ${isRoute('/contact') ? 'border-[#FFB81C]/30 bg-[#FFB81C]/[0.08] text-white' : 'border-transparent text-slate-200 hover:border-white/10 hover:bg-white/[0.05]'}`}
              >
                <span className={`w-7 font-mono text-[10px] ${isRoute('/contact') ? 'text-[#FFB81C]' : 'text-slate-500'}`}>07</span>
                <span className="flex-1 text-sm font-semibold">Contact</span>
                <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${isRoute('/contact') ? 'text-[#FFB81C]' : 'text-slate-500'}`} aria-hidden="true" />
              </Link>
            </nav>

            <div className="shrink-0 border-t border-white/10 bg-[#001020]/55 px-5 pt-4" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
              <p className="mb-3 text-xs text-slate-400">Have a project in mind? Let’s make progress together.</p>
              <button type="button" onClick={() => { closeMenus(); onOpenConsultation(); }} className="focus-visible-brand inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FFB81C] px-4 py-3 text-sm font-bold text-[#001F3F] shadow-lg shadow-black/20 transition-colors hover:bg-[#FFD166]">
                Let’s Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </section>
        </div>
      )}
    </header>
  );
};
