/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustPillarsStrip } from './components/TrustPillarsStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InsightsSection } from './components/InsightsSection';
import { AcademySection } from './components/AcademySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { PolicyModal } from './components/PolicyModal';
import { CaseStudy } from './types';
import { CASE_STUDIES } from './config/siteData';

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState<string>('service-strategy');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [initialEnquiryService, setInitialEnquiryService] = useState<string>('');

  // IntersectionObserver to track the active service as user scrolls
  useEffect(() => {
    const serviceIds = [
      'service-strategy',
      'service-analysis',
      'service-transformation',
      'service-process',
      'service-delivery',
      'service-bid',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveServiceId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    serviceIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setInitialEnquiryService(serviceName);
    scrollToSection('contact');
  };

  const handleOpenCaseStudyById = (caseId: string) => {
    const found = CASE_STUDIES.find((c) => c.id === caseId);
    if (found) {
      setSelectedCaseStudy(found);
    } else {
      scrollToSection('case-studies');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#FFB81C]/30 selection:text-slate-900">
      
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFB81C] focus:text-[#001F3F] focus:font-bold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation Header */}
      <Header
        activeServiceId={activeServiceId}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => scrollToSection('contact')}
      />

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none flex-grow">
        
        {/* 1. Primary Top Hero (video-ready with static fallback poster) */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onDiscussProject={() => scrollToSection('contact')}
        />

        {/* 2. Four Pillars & Proof Value Strip */}
        <TrustPillarsStrip />

        {/* 3. About Us / Our Story / Values */}
        <AboutSection
          onLearnMoreServices={() => scrollToSection('services')}
          onBookConsultation={() => scrollToSection('contact')}
        />

        {/* 4. Single Services Introduction + Six Detailed Service Sections */}
        <ServicesSection
          activeServiceId={activeServiceId}
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
          onOpenConsultation={() => scrollToSection('contact')}
          onOpenCaseStudy={handleOpenCaseStudyById}
        />

        {/* 5. 4-Step Approach: Understand, Analyse, Design, Support */}
        <ApproachSection
          onBookConsultation={() => scrollToSection('contact')}
        />

        {/* 6. Case Studies Proof Section */}
        <CaseStudiesSection
          onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
          onBookConsultation={() => scrollToSection('contact')}
        />

        {/* 7. Compact Insights Preview */}
        <InsightsSection />

        {/* 8. HTB Consult Academy Preview */}
        <AcademySection
          onEnquireTraining={(courseTitle) => handleSelectServiceForEnquiry(`Academy Training: ${courseTitle}`)}
        />

        {/* 9. Contact Details, Enquiry Form & Booking Calendar */}
        <ContactSection
          initialEnquiryType={initialEnquiryService}
          onClearInitialType={() => setInitialEnquiryService('')}
        />

      </main>

      {/* 10. Complete Footer */}
      <Footer
        onOpenPolicy={(type) => setActivePolicy(type)}
        onNavigateAnchor={scrollToSection}
      />

      {/* Modals & Dialogs */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookConsultation={() => scrollToSection('contact')}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(anchorId) => scrollToSection(anchorId)}
      />

      <PolicyModal
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
}
