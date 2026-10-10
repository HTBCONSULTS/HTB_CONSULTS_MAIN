import React from 'react';
import { PageHero } from '../components/PageHero';
import { AcademySection } from '../components/AcademySection';
import { VISUAL_ASSETS } from '../config/visualAssets';
import { ACADEMY_SITE_URL } from '../config/siteData';
import academyLogo from '../assets/images/brand/htb-academy-logo.webp';

interface AcademyPageProps {
  onEnquireTraining: (courseTitle: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onEnquireTraining }) => (
  <>
    <PageHero
      eyebrow="HTB Consult Academy"
      title="Build capability for the future of work."
      description="Practical learning. Real project simulation. Industry readiness. Explore Business Analysis, digital transformation, leadership, Agile delivery and industry specialisation."
      image={VISUAL_ASSETS.academyHero}
      brandLogo={academyLogo}
      brandLogoAlt="HTB Academy logo"
      ctaLabel="Visit HTB Consult Academy"
      ctaTo={ACADEMY_SITE_URL}
      ctaExternal
    />
    <div id="courses"><AcademySection onEnquireTraining={onEnquireTraining} /></div>
  </>
);
