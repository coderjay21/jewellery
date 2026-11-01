"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#211D1A] text-[#F8F6F1] border-t border-[#3D3530]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3D3530]/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.25em] uppercase text-[#F8F6F1] font-light">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-[#D8CFC2] font-light leading-relaxed max-w-sm">
              Contemporary fine jewellery celebrating quiet luxury, architectural balance, and the enduring beauty of precious metals and gemstones.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B69A62] hover:text-[#CBB484] transition-colors group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#B69A62] font-medium">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#D8CFC2]/80">
              <li>
                <Link href="/collections" className="hover:text-[#F8F6F1] transition-colors">
                  All Jewellery
                </Link>
              </li>
              {siteConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="hover:text-[#F8F6F1] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasions & Stories */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#B69A62] font-medium">
              Curations
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#D8CFC2]/80">
              {siteConfig.occasions.map((occ) => (
                <li key={occ.id}>
                  <Link
                    href={`/collections?occasion=${occ.slug}`}
                    className="hover:text-[#F8F6F1] transition-colors"
                  >
                    {occ.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/our-story" className="text-[#F8F6F1] hover:text-[#B69A62] transition-colors">
                  Our Story & Craft
                </Link>
              </li>
            </ul>
          </div>

          {/* Private Concierge & Showroom */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#B69A62] font-medium">
              Concierge
            </h4>
            <div className="space-y-2 text-xs text-[#D8CFC2]/80 leading-relaxed font-light">
              <p>Appointments & Inquiries:</p>
              <p className="text-[#F8F6F1] font-mono tracking-wider">{siteConfig.whatsapp.formattedNumber}</p>
              <p className="pt-2 text-[11px] text-[#D8CFC2]/60">
                {siteConfig.concierge.hours}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs text-[#B69A62] hover:underline underline-offset-4 tracking-wider uppercase"
                >
                  Book Private Viewing →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Demo Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#D8CFC2]/60 font-light space-y-4 md:space-y-0">
          <div>
            © {currentYear} {siteConfig.name} Fine Jewellery. All rights reserved.
            <span className="hidden sm:inline mx-2">•</span>
            <span className="text-[#B69A62]/80">Illustrative Demo Catalogue</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#F8F6F1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F8F6F1] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#F8F6F1] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
