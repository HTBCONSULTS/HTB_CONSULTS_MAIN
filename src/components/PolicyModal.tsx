import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  policyType: 'privacy' | 'terms' | 'cookie' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (policyType) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [policyType, onClose]);

  if (!policyType) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      updated: 'October 2026',
      body: `HTB Consult ("we", "us", or "our") is committed to protecting and respecting your privacy in compliance with UK GDPR and the Data Protection Act 2018.

1. Information We Collect
We collect personal information that you provide directly to us through our website enquiry form, consultation booking calendar, or direct email correspondence (such as your full name, work email address, organisation name, and enquiry message).

2. How We Use Your Information
We use your information solely to:
- Respond to your business enquiries and discuss consultancy requirements.
- Arrange and coordinate Microsoft Teams discovery consultations.
- Deliver agreed digital transformation, business analysis, or training services.

3. Data Sharing & Security
We do not sell, rent, or lease your personal information to third parties. All personal data is stored securely and processed with industry-standard administrative and technical safeguards.

4. Contact
For data privacy enquiries, please contact info@htbconsults.com.`,
    },
    terms: {
      title: 'Terms & Conditions',
      updated: 'October 2026',
      body: `Welcome to HTB Consult. By accessing or using this website, you agree to be bound by these terms.

1. Professional Advisory Services
The information provided on this landing page is for general informational and marketing purposes regarding HTB Consult's advisory and digital transformation capabilities.

2. Intellectual Property
All content, branding, service descriptions, methodologies, and visual materials on this website are the intellectual property of HTB Consult.

3. Consultation Bookings
Initial discovery consultations booked via this platform are complimentary and non-obligatory, lasting approximately 30 minutes via Microsoft Teams. Formal engagements are governed by separate master service agreements.

4. Governing Law
These terms are governed by the laws of England and Wales.`,
    },
    cookie: {
      title: 'Cookie Policy',
      updated: 'October 2026',
      body: `HTB Consult uses minimal, essential cookies and local storage tokens to ensure site functionality, remember your reduced-motion preferences, and improve user experience.

1. Essential Cookies
We use cookies strictly necessary for navigation state, active service scrolling detection, and enquiry session persistence.

2. Third-Party Cookies
No tracking or unsolicited advertising cookies are loaded without your consent.

3. Managing Cookies
You can manage or disable cookies via your browser settings at any time.`,
    },
  };

  const current = contentMap[policyType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
          Legal Notice · Last Updated {current.updated}
        </div>
        <h3 className="font-editorial text-2xl font-semibold text-[#001F3F]">
          {current.title}
        </h3>

        <div className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
          {current.body}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#001F3F] bg-slate-100 hover:bg-slate-200 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
