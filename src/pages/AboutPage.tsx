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
      title="People. Insight. Practical Solutions."
      description="A collaborative UK consultancy connecting clear thinking with practical delivery for organisations ready to make meaningful progress."
      image={VISUAL_ASSETS.aboutHero}
      ctaLabel="Explore our services"
      ctaTo="/services"
    />
    <AboutSection showIntro={false} onLearnMoreServices={onLearnMoreServices} onBookConsultation={onBookConsultation} />
    <FounderProfileSection />
    <ApproachSection onBookConsultation={onBookConsultation} />
  </>
);
