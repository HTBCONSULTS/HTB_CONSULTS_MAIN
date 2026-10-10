import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../config/siteData';
import { Logo } from './Logo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  TrendingUp,
  FileCheck,
  Cpu,
  RefreshCw,
  Kanban,
  GraduationCap
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

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenConsultation,
  activeServiceId,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll state for slight header refinement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const scrollToAnchor = (id: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#001F3F]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5 border-b border-white/10'
          : 'bg-[#001F3F] py-3.5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor('hero');
            }}
            className="flex items-center gap-2 focus-visible-brand rounded-sm py-1 transition-opacity hover:opacity-95"
            aria-label="HTB Consult homepage"
          >
            <Logo variant="light" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-200"
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('hero');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('about');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onFocus={() => setIsServicesOpen(true)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible-brand ${
                  isServicesOpen || activeServiceId
                    ? 'text-[#FFB81C] bg-white/5 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#FFB81C]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-1.5 w-96 rounded-xl bg-[#001730] border border-white/15 shadow-2xl p-2.5 z-50 text-slate-200 animate-in fade-in duration-150"
                  role="menu"
                  aria-label="Services List"
                >
                  <div className="px-3 py-2 border-b border-white/10 mb-1.5 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#FFB81C]">
                      Our Core Services (6)
                    </span>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToAnchor('services');
                      }}
                      className="text-[11px] text-white/70 hover:text-white flex items-center gap-1 underline"
                    >
                      All Services
                    </a>
                  </div>

                  <div className="space-y-1">
                    {SERVICES.map((service, index) => {
                      const IconComp = SERVICE_ICONS[service.id] || TrendingUp;
                      const isActive = activeServiceId === service.id;

                      return (
                        <a
                          key={service.id}
                          href={`#${service.id}`}
                          role="menuitem"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor(service.id);
                          }}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all text-left group ${
                            isActive
                              ? 'bg-white/15 border border-[#FFB81C]/40'
                              : 'hover:bg-white/10 border border-transparent'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isActive
                                ? 'bg-[#FFB81C] text-[#001F3F]'
                                : 'bg-white/10 text-[#FFB81C] group-hover:bg-[#FFB81C] group-hover:text-[#001F3F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-slate-100 group-hover:text-white">
                                {service.name}
                              </span>
                              {isActive && (
                                <span className="text-[10px] bg-[#FFB81C] text-[#001F3F] font-bold px-1.5 py-0.2 rounded">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 group-hover:text-slate-300 line-clamp-1 mt-0.5">
                              {service.shortTagline}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('approach');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              Approach
            </a>

            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('case-studies');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              Case Studies
            </a>

            <a
              href="#insights"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('insights');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              Insights
            </a>

            <a
              href="#academy"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('academy');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5 flex items-center gap-1"
            >
              <span>Academy</span>
              <span className="text-[10px] text-[#FFB81C] font-semibold">↗</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor('contact');
              }}
              className="px-3 py-2 rounded-md hover:text-white transition-colors focus-visible-brand hover:bg-white/5"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible-brand"
              aria-label="Search services and articles"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Let's Talk CTA */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] active:bg-[#C98E0E] rounded-md transition-all shadow-sm focus-visible-brand whitespace-nowrap cursor-pointer group"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus-visible-brand"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-[#001833] border-b border-white/15 max-h-[calc(100vh-57px)] overflow-y-auto px-5 py-6 text-slate-200 shadow-2xl z-40">
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => scrollToAnchor('hero')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('about')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              About Us
            </button>

            {/* Mobile Services Accordion */}
            <div className="border border-white/10 rounded-lg p-3 bg-white/5">
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-[#FFB81C]"
              >
                <span>Services (All 6)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="mt-3 space-y-1.5 pt-2 border-t border-white/10">
                  {SERVICES.map((service) => {
                    const IconComp = SERVICE_ICONS[service.id] || TrendingUp;
                    const isActive = activeServiceId === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => scrollToAnchor(service.id)}
                        className={`w-full flex items-start gap-3 p-2 rounded-lg text-left text-sm ${
                          isActive
                            ? 'bg-[#FFB81C] text-[#001F3F] font-semibold'
                            : 'text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        <IconComp className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <div>{service.name}</div>
                          <div className={`text-xs ${isActive ? 'text-[#001F3F]/80' : 'text-slate-400'}`}>
                            {service.shortTagline}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => scrollToAnchor('approach')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              Approach
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('case-studies')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              Case Studies
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('insights')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              Insights
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('academy')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white flex items-center justify-between"
            >
              <span>Academy</span>
              <span className="text-xs text-[#FFB81C]">Learn Practical Skills ↗</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('contact')}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg hover:bg-white/10 text-white"
            >
              Contact
            </button>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center font-bold text-sm text-[#001F3F] bg-[#FFB81C] rounded-lg shadow"
              >
                Book a Free Consultation
              </button>
              <div className="text-xs text-center text-slate-400">
                UK Phone: <a href="tel:+447435964309" className="text-white hover:underline">+44 7435 964309</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
