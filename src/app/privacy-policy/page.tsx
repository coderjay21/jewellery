import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aurelle Fine Jewellery Privacy Policy and Client Data Standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F1] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#5A5049]">
            <li>
              <Link href="/" className="hover:text-[#211D1A] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#B69A62] font-medium" aria-current="page">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
          Legal & Disclosures
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light mb-8">
          Privacy Policy
        </h1>
        <div className="w-12 h-[1px] bg-[#B69A62] mb-10" />

        <div className="prose prose-stone max-w-none text-[#5A5049] text-sm leading-relaxed space-y-8 font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              1. Overview and Demonstration Status
            </h2>
            <p>
              This website is an illustrative demonstration platform created for the fictional brand <strong>AURELLE</strong>. We take client privacy with the utmost seriousness. This document outlines how information submitted through our inquiry channels is managed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              2. Information We Receive Through Inquiries
            </h2>
            <p>
              When you initiate an inquiry via WhatsApp or our private appointment request form, we may receive:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name and contact phone number.</li>
              <li>Details regarding the jewellery creations, categories, or occasions of interest.</li>
              <li>Requested dates and personal preferences for bespoke consultations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              3. Use of Information
            </h2>
            <p>
              Any information shared is used strictly to coordinate private viewings, provide pricing clarifications, and answer questions regarding jewellery availability. We never sell, lease, or distribute private client details to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              4. WhatsApp Communications
            </h2>
            <p>
              Communications conducted via WhatsApp are subject to WhatsApp&apos;s standard end-to-end encryption protocols and terms of service. You retain full control over your chat history and can terminate dialogue at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              5. Contacting the Concierge
            </h2>
            <p>
              For inquiries regarding data privacy or to request the removal of any shared consultation notes, please contact our concierge at <a href={`mailto:${siteConfig.concierge.email}`} className="text-[#B69A62] underline">{siteConfig.concierge.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
