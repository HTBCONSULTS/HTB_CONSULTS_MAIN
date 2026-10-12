import React from 'react';
import { PageHero } from '../components/PageHero';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface CaseStudiesPageProps {
  onBookConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onBookConsultation }) => (
  <>
    <PageHero
      eyebrow="Case Studies"
      title="Practical work. Measurable impact."
      description="Explore practical examples of strategy, analysis and digital delivery supporting better ways of working."
      image={VISUAL_ASSETS.caseStudiesHero}
      ctaLabel="Discuss your project"
      ctaTo="/contact"
    />
    <CaseStudiesSection onBookConsultation={onBookConsultation} />
  </>
);
