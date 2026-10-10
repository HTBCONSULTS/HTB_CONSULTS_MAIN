import React, { useState } from 'react';
import { SITE_METADATA, FAQS, SERVICES } from '../config/siteData';
import { ContactFormData } from '../types';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  ChevronDown,
  Video,
  Users,
  FileText,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  initialEnquiryType?: string;
  onClearInitialType?: () => void;
}

const AVAILABLE_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialEnquiryType = '',
  onClearInitialType,
}) => {
  const [activeTab, setActiveTab] = useState<'message' | 'booking'>('message');

  // Form State
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organisation: '',
    enquiryType: initialEnquiryType || 'General Enquiry / Initial Consultation',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Booking State
  const [selectedDay, setSelectedDay] = useState<number>(14);
  const [selectedSlot, setSelectedSlot] = useState<string>('09:00');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingOrg, setBookingOrg] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync initialEnquiryType if passed
  React.useEffect(() => {
    if (initialEnquiryType) {
      setFormData((prev) => ({ ...prev, enquiryType: initialEnquiryType }));
      setActiveTab('message');
    }
  }, [initialEnquiryType]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Please share a brief note about your project.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (onClearInitialType) onClearInitialType();
    }, 600);
  };

  const validateBooking = () => {
    const errors: Record<string, string> = {};
    if (!bookingName.trim()) errors.name = 'Please provide your name.';
    if (!bookingEmail.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingEmail.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    setBookingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBooking()) return;
    setBookingConfirmed(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] bg-blueprint-subtle relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="htb-glass-panel max-w-3xl mb-12 rounded-2xl p-5 sm:p-7">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
            <span className="w-5 h-[2px] bg-[#FFB81C]" />
            <span>Contact HTB Consult</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#001F3F] leading-tight">
            Let’s Talk About{' '}
            <span className="text-[#0A2E5C] italic">Your Next Step.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you have a new idea, an existing challenge or a specific project in mind, we’re here to listen, understand your needs and explore practical solutions.
          </p>
        </div>

        {/* 4 Trust Commitment Cards matching Reference P13 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="htb-card p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#001F3F]">Friendly and Responsive</div>
              <p className="text-[11px] text-slate-500">We aim to respond within 1–2 working days.</p>
            </div>
          </div>

          <div className="htb-card p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#001F3F]">Understand Your Needs</div>
              <p className="text-[11px] text-slate-500">We take time to listen and ask the right questions.</p>
            </div>
          </div>

          <div className="htb-card p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#001F3F]">Practical Solutions</div>
              <p className="text-[11px] text-slate-500">Tailored to your organisation and objectives.</p>
            </div>
          </div>

          <div className="htb-card p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#001F3F]">Move Forward Together</div>
              <p className="text-[11px] text-slate-500">From initial discussion to successful delivery.</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Contact Details Sidebar + Dual Action Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="htb-card bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
              <h3 className="font-editorial text-xl font-semibold text-[#001F3F] mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</div>
                    <a
                      href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-[#001F3F] hover:text-[#B45309] transition-colors"
                    >
                      {SITE_METADATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${SITE_METADATA.email}`}
                      className="text-sm font-semibold text-[#001F3F] hover:text-[#B45309] transition-colors"
                    >
                      {SITE_METADATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">WhatsApp</div>
                    <a
                      href={SITE_METADATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#001F3F] hover:text-[#B45309] transition-colors"
                    >
                      Chat with us · {SITE_METADATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</div>
                    <p className="text-sm font-semibold text-[#001F3F]">
                      {SITE_METADATA.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Business Hours</div>
                    <p className="text-xs font-semibold text-[#001F3F]">
                      {SITE_METADATA.businessHours}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {SITE_METADATA.extendedHoursNotice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Highlight Box */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="htb-card htb-card--dark bg-[#001F3F] text-white p-5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFB81C] uppercase tracking-wider mb-1">
                    <Video className="w-4 h-4" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    30 minutes via Microsoft Teams with our senior consultancy team. No obligation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('booking')}
                    className="mt-3 w-full py-2 text-center text-xs font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors focus-visible-brand cursor-pointer"
                  >
                    Select Teams Slot
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs for Message Form vs Calendar Booking */}
          <div className="htb-card lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
            
            {/* Segmented Control Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 max-w-md">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('message');
                  setFormSubmitted(false);
                }}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'message'
                    ? 'bg-white text-[#001F3F] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Send Us a Message
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('booking');
                  setBookingConfirmed(false);
                }}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'booking'
                    ? 'bg-white text-[#001F3F] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Book a Free Consultation
              </button>
            </div>

            {/* TAB 1: SEND A MESSAGE FORM */}
            {activeTab === 'message' && (
              <div>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmitForm} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-editorial text-2xl font-semibold text-[#001F3F]">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Tell us a bit about your enquiry and we’ll get back to you shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F8FAFC] focus:bg-white transition-colors focus-visible-brand ${
                            formErrors.name ? 'border-red-400' : 'border-slate-300'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your email address"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F8FAFC] focus:bg-white transition-colors focus-visible-brand ${
                            formErrors.email ? 'border-red-400' : 'border-slate-300'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="organisation" className="block text-xs font-bold text-slate-700 mb-1">
                          Organisation <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <input
                          id="organisation"
                          type="text"
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="Your organisation or company"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white transition-colors focus-visible-brand"
                        />
                      </div>

                      <div>
                        <label htmlFor="enquiryType" className="block text-xs font-bold text-slate-700 mb-1">
                          Enquiry Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="enquiryType"
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white transition-colors focus-visible-brand"
                        >
                          <option value="General Enquiry / Initial Consultation">
                            General Enquiry / Initial Consultation
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                          <option value="HTB Consult Academy / Corporate Training">
                            HTB Consult Academy / Corporate Training
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, idea or current business challenge..."
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F8FAFC] focus:bg-white transition-colors focus-visible-brand ${
                          formErrors.message ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <p className="text-[11px] text-slate-500">
                        Information handled in accordance with UK GDPR.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] active:bg-[#C98E0E] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Confirmation State matching Reference P15 */
                  <div className="space-y-6 py-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                          Enquiry Received
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950">
                          Thank You, {formData.name || 'there'}!
                        </h4>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          Your message has been successfully logged with the HTB Consult team.
                        </p>
                      </div>
                    </div>

                    {/* What Happens Next 3-step checklist */}
                    <div className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200 space-y-4">
                      <h5 className="font-editorial text-base font-bold text-[#001F3F]">
                        What Happens Next?
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#001F3F] text-[#FFB81C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1
                          </span>
                          <div className="text-xs">
                            <strong className="text-slate-800">Review:</strong> We will review your enquiry details and understand your specific requirements.
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#001F3F] text-[#FFB81C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2
                          </span>
                          <div className="text-xs">
                            <strong className="text-slate-800">Response:</strong> A member of our team will get back to you within 1–2 working days.
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#001F3F] text-[#FFB81C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3
                          </span>
                          <div className="text-xs">
                            <strong className="text-slate-800">Next Steps:</strong> We will schedule a focused discussion to explore practical solutions tailored to your organisation.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                      <span>Urgent enquiry? Email us directly at <a href={`mailto:${SITE_METADATA.email}`} className="text-[#001F3F] font-bold underline">{SITE_METADATA.email}</a></span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            organisation: '',
                            enquiryType: 'General Enquiry / Initial Consultation',
                            message: '',
                          });
                        }}
                        className="text-xs font-bold text-[#001F3F] hover:underline"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: INTERACTIVE CONSULTATION CALENDAR & TIME SLOT BOOKING matching Reference P14 */}
            {activeTab === 'booking' && (
              <div>
                {!bookingConfirmed ? (
                  <form onSubmit={handleConfirmBooking} noValidate className="space-y-6">
                    <div>
                      <h3 className="font-editorial text-2xl font-semibold text-[#001F3F]">
                        Select a Date & Time
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Choose an available slot for a 30-minute Microsoft Teams discovery call.
                      </p>
                    </div>

                    {/* Interactive Calendar Strip */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      
                      {/* Left: Date Selector */}
                      <div className="md:col-span-6 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-[#001F3F]">
                          <span>October 2026</span>
                          <span className="text-[11px] text-slate-500">UK Time (GMT+1)</span>
                        </div>

                        {/* Calendar Day Grid (matching reference P14) */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                            <span key={i} className="text-[11px] font-bold text-slate-400 py-1">
                              {d}
                            </span>
                          ))}
                          {/* Sample days */}
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => {
                            const isSelected = selectedDay === day;
                            const isAvailable = day >= 12 && day <= 28 && day % 7 !== 3 && day % 7 !== 4; // realistic weekdays
                            return (
                              <button
                                key={day}
                                type="button"
                                disabled={!isAvailable}
                                onClick={() => setSelectedDay(day)}
                                className={`py-1.5 rounded-md text-xs font-medium transition-colors ${
                                  isSelected
                                    ? 'bg-[#FFB81C] text-[#001F3F] font-bold shadow-xs'
                                    : isAvailable
                                    ? 'hover:bg-slate-200 text-slate-800'
                                    : 'text-slate-300 cursor-not-allowed'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right: Available Times */}
                      <div className="md:col-span-6 space-y-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-4">
                        <div className="text-xs font-bold text-[#001F3F] mb-1">
                          Available Times: {selectedDay} October 2026
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                          {AVAILABLE_SLOTS.map((slot) => {
                            const isSlotSelected = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                                  isSlotSelected
                                    ? 'bg-[#FFB81C] text-[#001F3F] border-[#FFB81C] font-bold'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Attendee Details Form */}
                    <div className="space-y-4 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                        Your Contact Details
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="bookingName" className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="bookingName"
                            type="text"
                            required
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            placeholder="Full name"
                            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus-visible-brand"
                          />
                          {bookingErrors.name && (
                            <p className="text-[11px] text-red-600 mt-1">{bookingErrors.name}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="bookingEmail" className="block text-xs font-bold text-slate-700 mb-1">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="bookingEmail"
                            type="email"
                            required
                            value={bookingEmail}
                            onChange={(e) => setBookingEmail(e.target.value)}
                            placeholder="name@organisation.co.uk"
                            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus-visible-brand"
                          />
                          {bookingErrors.email && (
                            <p className="text-[11px] text-red-600 mt-1">{bookingErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="bookingOrg" className="block text-xs font-bold text-slate-700 mb-1">
                            Organisation
                          </label>
                          <input
                            id="bookingOrg"
                            type="text"
                            value={bookingOrg}
                            onChange={(e) => setBookingOrg(e.target.value)}
                            placeholder="Organisation name"
                            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus-visible-brand"
                          />
                        </div>

                        <div>
                          <label htmlFor="bookingNotes" className="block text-xs font-bold text-slate-700 mb-1">
                            What would you like to discuss?
                          </label>
                          <input
                            id="bookingNotes"
                            type="text"
                            value={bookingNotes}
                            onChange={(e) => setBookingNotes(e.target.value)}
                            placeholder="e.g. CRM rollout, process review, bid writing"
                            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus-visible-brand"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        Selected: <strong className="text-slate-800">{selectedDay} October 2026 at {selectedSlot}</strong> (UK Time)
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3 text-xs sm:text-sm font-bold text-[#001F3F] bg-[#FFB81C] hover:bg-[#E5A312] rounded-md transition-colors shadow-sm focus-visible-brand cursor-pointer"
                      >
                        Confirm Teams Consultation
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Booking Confirmation State */
                  <div className="space-y-6 py-4 animate-in fade-in duration-200">
                    <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                        <div>
                          <div className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                            Consultation Confirmed
                          </div>
                          <h4 className="text-lg font-bold text-emerald-950">
                            Looking forward to speaking, {bookingName}!
                          </h4>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-white rounded-lg border border-emerald-100 text-xs text-slate-700 space-y-1.5">
                        <div><strong>Date:</strong> {selectedDay} October 2026</div>
                        <div><strong>Time:</strong> {selectedSlot} (UK Time)</div>
                        <div><strong>Duration:</strong> 30 minutes</div>
                        <div><strong>Platform:</strong> Microsoft Teams (online link sent to {bookingEmail})</div>
                        {bookingOrg && <div><strong>Organisation:</strong> {bookingOrg}</div>}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500">
                      A calendar placeholder has been prepared. You will receive an email confirmation with the secure video meeting link.
                    </div>

                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs font-bold text-[#001F3F] underline"
                    >
                      Book Another Time Slot
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        {/* FAQs Accordion Section matching Reference P13 */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="htb-glass-panel max-w-3xl mb-8 rounded-2xl p-5 sm:p-7">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              Common Questions
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#001F3F] mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 max-w-4xl">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="htb-card bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-[#001F3F] hover:bg-slate-50 transition-colors focus-visible-brand cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B45309]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
