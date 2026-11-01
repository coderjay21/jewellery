"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SearchModal } from "@/components/SearchModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open

  const categoryQuickLinks = siteConfig.categories;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#D8CFC2]/50 shadow-sm"
            : "bg-[#F8F6F1] border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Wordmark */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex flex-col items-start focus:outline-none"
                aria-label="Aurelle Home"
              >
                <span className="font-serif text-2xl md:text-3xl tracking-[0.22em] text-[#211D1A] font-light uppercase transition-colors group-hover:text-[#B69A62]">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#5A5049] font-sans -mt-1 hidden sm:block">
                  Fine Jewellery
                </span>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/collections"
                className={`text-xs uppercase tracking-[0.18em] transition-colors py-2 relative group ${
                  pathname === "/collections"
                    ? "text-[#B69A62] font-medium"
                    : "text-[#211D1A] hover:text-[#B69A62]"
                }`}
              >
                Collections
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B69A62] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Individual Category Quick Links for Luxury Discovery */}
              {categoryQuickLinks.slice(0, 4).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/collections/${cat.slug}`}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors py-2 relative group ${
                    pathname === `/collections/${cat.slug}`
                      ? "text-[#B69A62] font-medium"
                      : "text-[#5A5049] hover:text-[#211D1A]"
                  }`}
                >
                  {cat.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B69A62] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <Link
                href="/our-story"
                className={`text-xs uppercase tracking-[0.18em] transition-colors py-2 relative group ${
                  pathname === "/our-story"
                    ? "text-[#B69A62] font-medium"
                    : "text-[#211D1A] hover:text-[#B69A62]"
                }`}
              >
                Our Story
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B69A62] transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                href="/contact"
                className={`text-xs uppercase tracking-[0.18em] transition-colors py-2 relative group ${
                  pathname === "/contact"
                    ? "text-[#B69A62] font-medium"
                    : "text-[#211D1A] hover:text-[#B69A62]"
                }`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B69A62] transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* Right: Actions (Search + WhatsApp Enquiry CTA) */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#211D1A] hover:text-[#B69A62] transition-colors rounded-full focus:outline-none"
                aria-label="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Concierge CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#211D1A] bg-[#211D1A] text-[#F8F6F1] text-[11px] uppercase tracking-[0.18em] hover:bg-transparent hover:text-[#211D1A] transition-all duration-300 rounded-xs group"
                aria-label="Enquire via WhatsApp Concierge"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B69A62] group-hover:text-[#211D1A] transition-colors" />
                <span>Concierge</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#211D1A] hover:text-[#B69A62] transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F8F6F1] z-50 flex flex-col justify-between overflow-y-auto px-6 py-8 border-t border-[#D8CFC2]/60 animate-fade-in">
            <div className="space-y-6">
              <div className="border-b border-[#D8CFC2]/40 pb-4">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#B69A62] mb-3">
                  Catalogue
                </p>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/collections"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl text-[#211D1A] hover:text-[#B69A62] transition-colors"
                  >
                    All Jewellery
                  </Link>
                  {siteConfig.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/collections/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm tracking-wider uppercase text-[#5A5049] hover:text-[#211D1A] transition-colors pl-2"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#B69A62]">
                  Brand
                </p>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/our-story"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-xl text-[#211D1A] hover:text-[#B69A62] transition-colors"
                  >
                    Our Story & Craft
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-xl text-[#211D1A] hover:text-[#B69A62] transition-colors"
                  >
                    Private Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-8 border-t border-[#D8CFC2]/50 space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#211D1A] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] hover:bg-[#3D3530] transition-colors rounded-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#B69A62]" />
                <span>WhatsApp Concierge</span>
              </a>
              <p className="text-[11px] text-center text-[#5A5049]">
                Showroom viewings available strictly by appointment
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
