import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles, Shield, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(6);
  const newArrivals = getNewArrivals(4);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6F1]">
      {/* ==================================================
          SECTION 3: HERO
          ================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#D8CFC2]/40 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Typography & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-[1px] bg-[#B69A62]"></span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69A62] font-medium">
                  Contemporary Fine Jewellery
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#211D1A] font-light tracking-tight leading-[1.08] mb-6">
                Jewellery That Speaks <br className="hidden sm:inline" />
                <span className="italic font-normal">Without Words.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A5049] font-light leading-relaxed mb-10 max-w-xl">
                Discover thoughtfully selected designs for the moments that make life extraordinary. Defined by architectural purity, tactile balance, and understated modern grace.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#211D1A] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3D3530] transition-all duration-300 rounded-xs shadow-md group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#211D1A] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#211D1A] hover:text-[#F8F6F1] transition-all duration-300 rounded-xs"
                >
                  <span>Our Story</span>
                </Link>
              </div>

              {/* Sub-label */}
              <div className="mt-12 pt-6 border-t border-[#D8CFC2]/60 flex items-center gap-6 text-xs text-[#5A5049] font-light">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
                  <span>Curated Catalogue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
                  <span>Private Appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
                  <span>Direct WhatsApp Concierge</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-xs overflow-hidden shadow-2xl border border-[#D8CFC2]/60 bg-[#EDE8DE]">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
                  alt="Aurelle Contemporary Fine Jewellery Campaign"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#F8F6F1]/90 backdrop-blur-md rounded-xs border border-[#D8CFC2]/60">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#B69A62]">
                    Signature Piece
                  </p>
                  <p className="font-serif text-sm text-[#211D1A]">
                    Aurora Solitaire Choker in 18K Gold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: BRAND INTRODUCTION
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#B69A62] font-medium">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light leading-tight">
              Beauty in Every Detail.
            </h2>
            <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
            <p className="text-base sm:text-lg text-[#5A5049] font-light leading-relaxed">
              At Aurelle, we believe jewellery is more than adornment; it is an intimate extension of your personal cadence. We combine sculptural purity, restrained elegance, and meticulous atelier craftsmanship to create pieces that feel timeless yet distinctly contemporary.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5: SHOP BY CATEGORY
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#B69A62] font-medium block mb-2">
                Discover by Category
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
                Shop by Silhouette
              </h2>
            </div>
            <Link
              href="/collections"
              className="mt-4 md:mt-0 inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#211D1A] hover:text-[#B69A62] transition-colors group"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="group relative flex flex-col bg-[#FCFAF6] border border-[#D8CFC2]/60 hover:border-[#B69A62] transition-all duration-500 rounded-xs overflow-hidden luxury-card-shadow"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE8DE]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#211D1A]/10 group-hover:bg-[#211D1A]/20 transition-colors duration-300" />
                </div>
                <div className="p-6 flex items-center justify-between bg-[#FCFAF6]">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#211D1A] group-hover:text-[#B69A62] transition-colors font-normal">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#5A5049] font-light mt-1 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#D8CFC2] flex items-center justify-center text-[#211D1A] group-hover:border-[#B69A62] group-hover:bg-[#B69A62] group-hover:text-[#F8F6F1] transition-all shrink-0 ml-4">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6: FEATURED COLLECTION
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Curated Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
              Selected with Intention
            </h2>
            <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
            <p className="text-sm sm:text-base text-[#5A5049] font-light">
              A bespoke edit of our most celebrated designs, harmonising classic purity with modern sculptural restraint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#211D1A] text-[#211D1A] text-xs uppercase tracking-[0.2em] hover:bg-[#211D1A] hover:text-[#F8F6F1] transition-all duration-300 rounded-xs"
            >
              <span>Explore All Creations</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: EDITORIAL STORY (SPLIT LAYOUT)
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#211D1A] text-[#F8F6F1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden border border-[#3D3530]">
                <Image
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
                  alt="Aurelle Atelier Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B69A62]"></span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium">
                  Art Direction & Craft
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F6F1] font-light leading-tight">
                An Expression of You.
              </h2>

              <p className="text-base text-[#D8CFC2] font-light leading-relaxed">
                True luxury is felt rather than flaunted. Each Aurelle design emerges from a rigorous dialogue between weight, ergonomics, and light. We select precious alloys and ethically sourced stones to create jewellery that feels like second nature.
              </p>

              <p className="text-sm text-[#D8CFC2]/80 font-light leading-relaxed">
                Whether celebrating a wedding vow, marking a quiet personal milestone, or selecting an everyday talisman, our private concierge ensures your discovery is effortless and personal.
              </p>

              <div className="pt-4">
                <Link
                  href="/our-story"
                  className="inline-flex items-center px-8 py-3.5 bg-[#B69A62] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#CBB484] transition-colors rounded-xs group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8: NEW ARRIVALS
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
                Recent Atelier Releases
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/collections?sortBy=newest"
              className="mt-4 md:mt-0 inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#211D1A] hover:text-[#B69A62] transition-colors group"
            >
              <span>View All New Releases</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9: SHOP BY OCCASION
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Life’s Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
              Shop by Occasion
            </h2>
            <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
            <p className="text-sm sm:text-base text-[#5A5049] font-light">
              Carefully grouped jewellery suited for unforgettable celebrations, intimate vows, and daily adornment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.occasions.map((occ) => (
              <Link
                key={occ.id}
                href={`/collections?occasion=${occ.slug}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-xs border border-[#D8CFC2]/60 luxury-card-shadow block"
              >
                <Image
                  src={occ.image}
                  alt={occ.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/80 via-[#211D1A]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F8F6F1]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#B69A62] mb-1">
                    Occasion
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-light mb-1 group-hover:text-[#CBB484] transition-colors">
                    {occ.name}
                  </h3>
                  <p className="text-xs text-[#D8CFC2]/80 font-light line-clamp-2">
                    {occ.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10: BRAND TRUST (FACTUAL & RESTRAINED)
          ================================================== */}
      <section className="py-16 md:py-24 bg-[#F8F6F1] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62] mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#211D1A]">Private Consultations</h3>
              <p className="text-xs sm:text-sm text-[#5A5049] font-light leading-relaxed">
                Dedicated private appointments tailored to your aesthetic preferences and celebratory timelines.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62] mx-auto">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#211D1A]">Direct Atelier Dialogue</h3>
              <p className="text-xs sm:text-sm text-[#5A5049] font-light leading-relaxed">
                Direct WhatsApp interaction for honest pricing, availability, and customised sizing guidance.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62] mx-auto">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#211D1A]">Contemporary Integrity</h3>
              <p className="text-xs sm:text-sm text-[#5A5049] font-light leading-relaxed">
                Clean architectural silhouettes crafted with enduring precious metals and hand-selected stones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11: INSTAGRAM-INSPIRED CAMPAIGN GALLERY
          ================================================== */}
      <section className="py-20 bg-[#FCFAF6] border-b border-[#D8CFC2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Visual Narrative
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#211D1A] font-light">
              Curated Campaign Impressions
            </h2>
            <p className="text-xs text-[#5A5049] mt-2 font-light">
              Sample moments captured across our seasonal jewellery journals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=600&auto=format&fit=crop",
            ].map((imgSrc, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xs border border-[#D8CFC2]/60 group bg-[#EDE8DE]"
              >
                <Image
                  src={imgSrc}
                  alt={`Aurelle editorial journal capture ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#211D1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F6F1] font-light bg-[#211D1A]/80 px-3 py-1.5 backdrop-blur-sm rounded-xs">
                    View Journal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 12: STORE VISIT / CONCIERGE CTA
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F1] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69A62] font-medium block">
            Private Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
            Your Next Favourite Piece Awaits.
          </h2>
          <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#5A5049] font-light max-w-xl mx-auto leading-relaxed">
            Connect directly with our atelier team to discuss bespoke modifications, inquire about specific gemstone cuts, or arrange a private viewing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#211D1A] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3D3530] transition-colors rounded-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#B69A62]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#211D1A] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#211D1A] hover:text-[#F8F6F1] transition-all rounded-xs"
            >
              <span>Contact Page & Studio Info</span>
            </Link>
          </div>

          <p className="text-[11px] text-[#5A5049] font-light pt-4">
            Showroom appointments are scheduled exclusively in advance.
          </p>
        </div>
      </section>
    </div>
  );
}
