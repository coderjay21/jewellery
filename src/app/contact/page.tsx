"use client";

import { useState } from "react";
import { MessageCircle, Mail, Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("Private Viewing");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format custom enquiry message for WhatsApp
    const enquiryText = `Hello AURELLE, my name is ${name || "a private client"}. I am interested in: ${interest}${preferredDate ? ` (Preferred Date: ${preferredDate})` : ""}. ${message ? `Note: ${message}` : ""}`;
    const url = getWhatsAppUrl(enquiryText);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Top Header */}
      <section className="py-16 md:py-24 bg-[#FCFAF6] border-b border-[#D8CFC2]/50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69A62] font-medium block">
            Private Concierge & Enquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
            Connect with Aurelle
          </h1>
          <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-3" />
          <p className="text-base text-[#5A5049] font-light leading-relaxed">
            Whether inquiring about a specific creation, discussing a bespoke ring commission, or scheduling a private viewing, our concierge is at your service.
          </p>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info & WhatsApp Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="p-8 bg-[#211D1A] text-[#F8F6F1] rounded-xs shadow-xl border border-[#3D3530] space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B69A62] text-[#211D1A] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F8F6F1]">Direct WhatsApp Concierge</h3>
                  <p className="text-xs text-[#B69A62] tracking-wider uppercase">Instant Response</p>
                </div>
              </div>

              <p className="text-xs text-[#D8CFC2] font-light leading-relaxed">
                Connect instantly with our jewellery advisory team for real-time video viewings, certificate requests, and bespoke quotes.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#B69A62] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#CBB484] transition-colors rounded-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

              <div className="text-[11px] text-[#D8CFC2]/70 font-mono tracking-wider pt-2 border-t border-[#3D3530]">
                Direct Line: {siteConfig.whatsapp.formattedNumber}
              </div>
            </div>

            {/* Studio Hours & Viewing Protocol */}
            <div className="p-8 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs space-y-4">
              <div className="flex items-center gap-3 text-[#211D1A]">
                <Clock className="w-5 h-5 text-[#B69A62]" />
                <h3 className="font-serif text-xl">Consultation Hours</h3>
              </div>
              <p className="text-xs text-[#5A5049] leading-relaxed">
                {siteConfig.concierge.hours}
              </p>
              <div className="w-full h-[1px] bg-[#D8CFC2]/40 my-3" />
              <div className="flex items-start gap-3 text-[#211D1A]">
                <Calendar className="w-5 h-5 text-[#B69A62] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-medium">Viewing Policy</h4>
                  <p className="text-xs text-[#5A5049] font-light leading-relaxed mt-1">
                    {siteConfig.concierge.consultationNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="p-6 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EDE8DE] text-[#B69A62] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5A5049]">Electronic Correspondence</p>
                <a
                  href={`mailto:${siteConfig.concierge.email}`}
                  className="text-xs text-[#211D1A] hover:text-[#B69A62] font-mono transition-colors"
                >
                  {siteConfig.concierge.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Private Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs p-8 sm:p-10 luxury-card-shadow">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Appointment & Inquiry Request
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#211D1A] font-light mb-6">
              Arrange a Private Consultation
            </h2>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EDE8DE] text-[#B69A62] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#211D1A]">Enquiry Transmitted</h3>
                <p className="text-sm text-[#5A5049] max-w-md mx-auto">
                  Your enquiry has been formatted and opened directly in WhatsApp. Our concierge representative will respond promptly during studio hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest text-[#B69A62] underline underline-offset-4"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#211D1A] mb-2">
                    Your Name <span className="text-[#B69A62]">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Roy"
                    className="w-full px-4 py-3 bg-[#F8F6F1] border border-[#D8CFC2] focus:border-[#B69A62] text-sm text-[#211D1A] rounded-xs focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="interest" className="block text-xs uppercase tracking-wider text-[#211D1A] mb-2">
                      Nature of Inquiry
                    </label>
                    <select
                      id="interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F1] border border-[#D8CFC2] focus:border-[#B69A62] text-sm text-[#211D1A] rounded-xs focus:outline-none transition-colors"
                    >
                      <option value="Private Showroom Viewing">Private Showroom Viewing</option>
                      <option value="Product Price & Sizing Inquiry">Product Price & Sizing Inquiry</option>
                      <option value="Bridal Suite Consultation">Bridal Suite Consultation</option>
                      <option value="Bespoke Commission">Bespoke Commission</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#211D1A] mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F1] border border-[#D8CFC2] focus:border-[#B69A62] text-sm text-[#211D1A] rounded-xs focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#211D1A] mb-2">
                    Message or Specific Pieces of Interest
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us which creations you are drawn to, or any specific celebratory milestones..."
                    className="w-full px-4 py-3 bg-[#F8F6F1] border border-[#D8CFC2] focus:border-[#B69A62] text-sm text-[#211D1A] rounded-xs focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#211D1A] hover:bg-[#3D3530] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-xs shadow-md flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 text-[#B69A62]" />
                  <span>Send Enquiry via WhatsApp Concierge</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-[#5A5049] font-light">
                  Submitting directly formats your request and opens WhatsApp with our concierge team.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-[#D8CFC2]/60">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
                Frequently Asked
              </span>
              <h2 className="font-serif text-3xl text-[#211D1A] font-light">
                Concierge Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs">
                <h4 className="font-serif text-lg text-[#211D1A] mb-2">How are viewings arranged?</h4>
                <p className="text-xs text-[#5A5049] font-light leading-relaxed">
                  All appointments are scheduled directly through WhatsApp or our contact inquiry form to ensure private, undivided access to our atelier consultants.
                </p>
              </div>

              <div className="p-6 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs">
                <h4 className="font-serif text-lg text-[#211D1A] mb-2">Can pieces be made in custom finger or wrist sizes?</h4>
                <p className="text-xs text-[#5A5049] font-light leading-relaxed">
                  Yes, each ring and bangle can be calibrated to your exact specifications. For pieces marked &ldquo;Crafted to Order&rdquo;, atelier lead times typically range from 2 to 4 weeks.
                </p>
              </div>

              <div className="p-6 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs">
                <h4 className="font-serif text-lg text-[#211D1A] mb-2">Are prices listed on the website final?</h4>
                <p className="text-xs text-[#5A5049] font-light leading-relaxed">
                  This website is an illustrative demonstration for Aurelle contemporary fine jewellery. Exact pricing and current metal rates are confirmed directly via our WhatsApp concierge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
