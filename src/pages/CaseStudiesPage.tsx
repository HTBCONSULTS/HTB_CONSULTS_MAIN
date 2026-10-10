import React from 'react';
import { PageHero } from '../components/PageHero';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { CaseStudy } from '../types';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onBookConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onSelectCaseStudy, onBookConsultation }) => (
  <>
    <PageHero
      eyebrow="Case Studies"
      title="Practical work. Measurable impact."
      description="Explore practical examples of strategy, analysis and digital delivery supporting better ways of working."
      image={VISUAL_ASSETS.caseStudiesHero}
      ctaLabel="Discuss your project"
      ctaTo="/contact"
    />
    <CaseStudiesSection onSelectCaseStudy={onSelectCaseStudy} onBookConsultation={onBookConsultation} />
  </>
);
