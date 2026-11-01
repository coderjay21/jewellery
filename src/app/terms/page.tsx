import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Aurelle Fine Jewellery Terms and Conditions of Discovery.",
};

export default function TermsPage() {
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
              Terms & Conditions
            </li>
          </ol>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
          Terms of Engagement
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light mb-8">
          Terms & Conditions
        </h1>
        <div className="w-12 h-[1px] bg-[#B69A62] mb-10" />

        <div className="prose prose-stone max-w-none text-[#5A5049] text-sm leading-relaxed space-y-8 font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              1. Demo Catalogue Nature
            </h2>
            <p>
              The website represents an illustrative digital catalogue for <strong>AURELLE</strong>. Product names, codes, photographs, and pricing figures are curated for demonstration purposes. This platform facilitates customer discovery and inquiries rather than automated e-commerce checkout.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              2. Inquiries and Consultations
            </h2>
            <p>
              Inquiries initiated through WhatsApp or our contact forms do not constitute a binding purchase contract. Confirmation of custom specifications, gold purity rates, gemstone certifications, and delivery schedules will be established during direct private atelier consultations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              3. Pricing and Availability
            </h2>
            <p>
              Precious metal and gemstone valuations naturally fluctuate with international bullion markets. Any illustrative prices listed on this demonstration site are subject to confirmation at the time of bespoke order finalization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#211D1A] font-normal">
              4. Intellectual Property
            </h2>
            <p>
              All visual compositions, editorial texts, brand concepts, and styling motifs featured on this demo website are protected under copyright laws. No part of this design may be reproduced without prior written consent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
