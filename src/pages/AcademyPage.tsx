import React from 'react';
import { PageHero } from '../components/PageHero';
import { AcademySection } from '../components/AcademySection';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface AcademyPageProps {
  onEnquireTraining: (courseTitle: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onEnquireTraining }) => (
  <>
    <PageHero
      eyebrow="HTB Consult Academy"
      title="Learn. Apply. Grow."
      description="Practical, industry-relevant learning designed to help professionals build confidence and create new opportunities."
      image={VISUAL_ASSETS.academyHero}
      ctaLabel="Explore courses"
      ctaTo="#courses"
    />
    <div id="courses"><AcademySection onEnquireTraining={onEnquireTraining} /></div>
  </>
);
