import React from 'react';
import { PageHero } from '../components/PageHero';
import { InsightsSection } from '../components/InsightsSection';
import { VISUAL_ASSETS } from '../config/visualAssets';

export const InsightsPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Insights & Articles"
      title="Business analysis and digital delivery guides"
      description="Explore how to test a business idea, scope a first software release, map a process or plan a digital change for a growing business."
      image={VISUAL_ASSETS.insightsHero}
    />
    <InsightsSection />
  </>
);
