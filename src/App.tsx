import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SearchModal } from './components/SearchModal';
import { PolicyModal } from './components/PolicyModal';
import { SERVICES, CASE_STUDIES } from './config/siteData';
import { CaseStudy } from './types';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { InsightsPage } from './pages/InsightsPage';
import { AcademyPage } from './pages/AcademyPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const PAGE_TITLES: Record<string, string> = {
  '/': 'HTB Consult | Clarity in Strategy. Confidence in Delivery.',
  '/about': 'About HTB Consult | People. Insight. Practical Solutions.',
  '/services': 'Services | HTB Consult',
  '/case-studies': 'Case Studies | HTB Consult',
  '/insights': 'Insights & Articles | HTB Consult',
  '/academy': 'HTB Consult Academy | Build Capability for the Future of Work',
  '/contact': 'Contact HTB Consult | Let’s talk about your next step.',
};

const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const targetId = decodeURIComponent(location.hash.replace(/^#/, ''));
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

      if (targetId) {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior, block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
};

const RouteMotion: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  return null;
};

const SiteApp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeServiceId, setActiveServiceId] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [initialEnquiryService, setInitialEnquiryService] = useState('');

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? 'HTB Consult | Business & Digital Solutions';
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/services') {
      setActiveServiceId('');
      return;
    }

    let observer: IntersectionObserver | undefined;
    const frame = window.requestAnimationFrame(() => {
      const serviceElements = SERVICES
        .map((service) => document.getElementById(service.id))
        .filter((element): element is HTMLElement => element instanceof HTMLElement);

      if (serviceElements.length === 0) return;
      setActiveServiceId(serviceElements[0].id);

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActiveServiceId(visible.target.id);
        },
        { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.35, 0.65] }
      );

      serviceElements.forEach((element) => observer?.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  const goToContact = (serviceName?: string) => {
    if (serviceName) setInitialEnquiryService(serviceName);
    navigate(serviceName ? '/contact#contact' : '/contact');
  };

  const openCaseStudy = (caseId: string) => {
    const found = CASE_STUDIES.find((study) => study.id === caseId);
    if (found) setSelectedCaseStudy(found);
    else navigate('/case-studies');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-[#FFB81C]/30 selection:text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#FFB81C] focus:px-4 focus:py-2 focus:font-bold focus:text-[#001F3F] focus:shadow-lg"
      >
        Skip to main content
      </a>

      <ScrollManager />
      <RouteMotion />
      <Header
        activeServiceId={activeServiceId}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => goToContact()}
      />

      <main key={location.pathname} id="main-content" tabIndex={-1} className="page-enter min-h-[60vh] flex-grow focus:outline-none">
        <Routes>
          <Route path="/" element={<HomePage onExploreServices={() => navigate('/services')} onDiscussProject={() => goToContact()} />} />
          <Route path="/about" element={<AboutPage onLearnMoreServices={() => navigate('/services')} onBookConsultation={() => goToContact()} />} />
          <Route path="/services" element={<ServicesPage activeServiceId={activeServiceId} onSelectServiceForEnquiry={(name) => goToContact(name)} onOpenConsultation={() => goToContact()} onOpenCaseStudy={openCaseStudy} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onSelectCaseStudy={setSelectedCaseStudy} onBookConsultation={() => goToContact()} />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/academy" element={<AcademyPage onEnquireTraining={(course) => goToContact(`Academy Training: ${course}`)} />} />
          <Route path="/contact" element={<ContactPage initialEnquiryType={initialEnquiryService} onClearInitialType={() => setInitialEnquiryService('')} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer onOpenPolicy={setActivePolicy} />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookConsultation={() => {
          setSelectedCaseStudy(null);
          goToContact();
        }}
      />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(destination) => navigate(destination)}
      />
      <PolicyModal policyType={activePolicy} onClose={() => setActivePolicy(null)} />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <SiteApp />
    </BrowserRouter>
  );
}
