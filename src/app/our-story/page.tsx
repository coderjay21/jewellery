import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Feather, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Story & Atelier Craft",
  description:
    "Discover Aurelle's commitment to contemporary fine jewellery, architectural balance, and master bench goldsmithing.",
  openGraph: {
    title: `Our Story | ${siteConfig.name}`,
    description: "The philosophy of quiet luxury fine jewellery.",
  },
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Editorial Hero */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#D8CFC2]/50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69A62] font-medium block">
            The Aurelle Narrative
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#211D1A] font-light leading-tight">
            Crafting the Immortal Line.
          </h1>
          <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#5A5049] font-light leading-relaxed max-w-2xl mx-auto">
            Born from a desire to reconcile ancestral goldsmithing with radical modern minimalism, Aurelle explores the tension between structural geometry and feminine fluidity.
          </p>
        </div>
      </section>

      {/* Chapter 1: The Design Manifesto */}
      <section className="py-20 md:py-28 border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden border border-[#D8CFC2] luxury-shadow bg-[#EDE8DE]">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
                  alt="Aurelle Jewelry Design Process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium">
                Chapter I
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
                Quiet Luxury, Felt Deeply
              </h2>
              <p className="text-base text-[#5A5049] font-light leading-relaxed">
                In an era overwhelmed by ornamental noise, Aurelle chooses the power of quietude. Our silhouettes begin with a solitary line: a curve calculated to rest effortlessly against human anatomy, a proportion tuned until it commands presence without shouting.
              </p>
              <p className="text-sm text-[#5A5049] font-light leading-relaxed">
                Every bezel, prong, and clasp is treated as an architectural component. By reducing excess metal and celebrating negative space, our stones breathe with maximum luminosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Atelier Pillars */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Foundational Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
              The Pillars of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F6F1] border border-[#D8CFC2]/60 rounded-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62]">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#211D1A]">Ergonomic Weight</h3>
              <p className="text-sm text-[#5A5049] font-light leading-relaxed">
                Jewellery must feel sublime upon the skin. We calibrate the physical mass of every earring, collar, and bangle to ensure all-day comfort without sacrificing substantial presence.
              </p>
            </div>

            <div className="p-8 bg-[#F8F6F1] border border-[#D8CFC2]/60 rounded-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#211D1A]">Intentional Materials</h3>
              <p className="text-sm text-[#5A5049] font-light leading-relaxed">
                From 18-karat warm yellow gold and platinum alloys to hand-matched diamonds, our materials are selected for their structural resilience and organic warmth.
              </p>
            </div>

            <div className="p-8 bg-[#F8F6F1] border border-[#D8CFC2]/60 rounded-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#211D1A]">Bespoke Dialogue</h3>
              <p className="text-sm text-[#5A5049] font-light leading-relaxed">
                Every customer interaction is approached as an intimate consultation. We invite you to explore custom sizing, gem curation, and anniversary creations directly with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Bench Goldsmithing */}
      <section className="py-20 md:py-28 border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium">
                Chapter II
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
                Handcrafted at the Jeweller’s Bench
              </h2>
              <p className="text-base text-[#5A5049] font-light leading-relaxed">
                While technology aids precision casting, true distinction lives in the jeweler’s hand. Each Aurelle piece undergoes multi-stage polishing, hand-setting under optical magnification, and meticulous ultrasonic cleaning before it earns the Aurelle signature.
              </p>
              <div className="pt-2">
                <Link
                  href="/collections"
                  className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#211D1A] hover:text-[#B69A62] font-medium group"
                >
                  <span>Explore The Resulting Creations</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden border border-[#D8CFC2] luxury-shadow bg-[#EDE8DE]">
                <Image
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
                  alt="Aurelle Bench Jeweller"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="py-20 md:py-24 bg-[#211D1A] text-[#F8F6F1] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69A62] font-medium">
            Private Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">
            Experience Aurelle In Person
          </h2>
          <p className="text-sm sm:text-base text-[#D8CFC2] font-light max-w-xl mx-auto leading-relaxed">
            We welcome you to connect with our concierge team to reserve a private viewing or inquire about custom commissions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello AURELLE, I would like to schedule a private viewing consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#B69A62] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#CBB484] transition-colors rounded-xs shadow-md"
            >
              Reserve Viewing via WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#D8CFC2]/60 text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F8F6F1] hover:text-[#211D1A] transition-colors rounded-xs"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
