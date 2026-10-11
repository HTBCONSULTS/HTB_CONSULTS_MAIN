import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE_METADATA } from '../config/siteData';

export const WhatsAppButton: React.FC = () => (
  <a
    href={SITE_METADATA.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Chat with HTB Consult on WhatsApp at ${SITE_METADATA.phone}`}
    title="Chat with HTB Consult on WhatsApp"
    className="focus-visible-brand group fixed z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-[#25D366] text-white shadow-[0_6px_18px_rgba(0,0,0,0.24)] ring-1 ring-black/10 transition duration-200 hover:-translate-y-0.5 hover:bg-[#20C45D] hover:shadow-[0_9px_22px_rgba(0,0,0,0.28)] active:translate-y-0"
    style={{
      right: 'max(1.5rem, env(safe-area-inset-right))',
      bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
    }}
  >
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden="true">
      <MessageCircle className="h-6 w-6" strokeWidth={1.9} />
      <Phone className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg]" strokeWidth={2.4} />
    </span>
    <span className="sr-only">Opens a new tab to start a WhatsApp chat.</span>
  </a>
);
