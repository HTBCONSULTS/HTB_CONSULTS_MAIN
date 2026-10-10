import React from 'react';
import { PageHero } from '../components/PageHero';
import { InsightsSection } from '../components/InsightsSection';
import { VISUAL_ASSETS } from '../config/visualAssets';

export const InsightsPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Insights & Articles"
      title="Ideas for your next step."
      description="Guidance and perspectives to help organisations understand challenges, improve operations and deliver useful change."
      image={VISUAL_ASSETS.insightsHero}
    />
    <InsightsSection />
  </>
);
