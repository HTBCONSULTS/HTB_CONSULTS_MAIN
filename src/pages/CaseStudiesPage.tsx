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
      title="Consulting project case studies"
      description="Explore how HTB supported a healthcare CRM implementation, a Salesforce enquiry journey and an HR cloud migration. Each project sets out the challenge, our role and the reported outcomes."
      image={VISUAL_ASSETS.caseStudiesHero}
      ctaLabel="Discuss your project"
      ctaTo="/contact"
    />
    <CaseStudiesSection onBookConsultation={onBookConsultation} />
  </>
);
