import React from 'react';
import { PageHero } from '../components/PageHero';
import { AboutSection } from '../components/AboutSection';
import { FounderProfileSection } from '../components/FounderProfileSection';
import { ApproachSection } from '../components/ApproachSection';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface AboutPageProps {
  onLearnMoreServices: () => void;
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onLearnMoreServices, onBookConsultation }) => (
  <>
    <PageHero
      eyebrow="About HTB Consult"
      title="Meet HTB Consult"
      description="We’re a business analysis and digital transformation consultancy based in Chesterfield, Derbyshire. We help UK teams understand where work gets stuck, decide what needs to change and put that change into practice."
      image={VISUAL_ASSETS.aboutHero}
      ctaLabel="See our project case studies"
      ctaTo="/case-studies"
    />
    <AboutSection showIntro={false} onLearnMoreServices={onLearnMoreServices} onBookConsultation={onBookConsultation} />
    <FounderProfileSection />
    <ApproachSection onBookConsultation={onBookConsultation} />
  </>
);
