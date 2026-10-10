import React from 'react';
import { PageHero } from '../components/PageHero';
import { ContactSection } from '../components/ContactSection';
import { VISUAL_ASSETS } from '../config/visualAssets';

interface ContactPageProps {
  initialEnquiryType: string;
  onClearInitialType: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialEnquiryType, onClearInitialType }) => (
  <>
    <PageHero
      eyebrow="Contact HTB Consult"
      title="Let’s make your next move clear."
      description="Tell us about the opportunity or challenge in front of you. We’ll listen, understand what matters and explore a practical way forward."
      image={VISUAL_ASSETS.contactHero}
    />
    <ContactSection initialEnquiryType={initialEnquiryType} onClearInitialType={onClearInitialType} />
  </>
);
