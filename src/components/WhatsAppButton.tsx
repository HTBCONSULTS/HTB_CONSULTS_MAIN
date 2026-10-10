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
    className="focus-visible-brand group fixed z-40 inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] ring-1 ring-black/10 transition duration-200 hover:-translate-y-1 hover:bg-[#20C45D] hover:shadow-[0_14px_34px_rgba(0,0,0,0.32)] active:translate-y-0 sm:w-auto sm:justify-start sm:px-5"
    style={{
      right: 'max(1rem, env(safe-area-inset-right))',
      bottom: 'max(1rem, env(safe-area-inset-bottom))',
    }}
  >
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden="true">
      <MessageCircle className="h-8 w-8" strokeWidth={1.8} />
      <Phone className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg]" strokeWidth={2.4} />
    </span>
    <span className="hidden whitespace-nowrap text-sm font-bold sm:inline">WhatsApp</span>
    <span className="sr-only">Opens a new tab to start a WhatsApp chat.</span>
  </a>
);
