import { Product } from "@/types";

export const products: Product[] = [
  // NECKLACES
  {
    id: "aur-nk-101",
    slug: "aurora-solitaire-choker",
    name: "Aurora Solitaire Choker",
    productCode: "AUR-NK-101",
    category: "necklaces",
    description:
      "A fluid, articulating collar of hand-polished 18K yellow gold crowned with an exquisite radiant-cut solitaire pendant. Designed to rest gracefully along the collarbone, balancing modern architectural precision with timeless grace.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 185000,
    priceOnRequest: false,
    occasion: "wedding",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Available for Viewing",
    featured: true,
    isNewArrival: false,
    details: [
      "Individually hand-assembled hinged links for effortless drape",
      "Concealed safety clasp mechanism",
      "Designed for bespoke chain length adjustment",
    ],
  },
  {
    id: "aur-nk-102",
    slug: "celestial-cascade-pendant",
    name: "Celestial Cascade Pendant",
    productCode: "AUR-NK-102",
    category: "necklaces",
    description:
      "A cascading gradation of brilliant-cut diamonds suspended from a delicate diamond-cut cable chain. An understated piece that catches evening illumination with subtle intensity.",
    images: [
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 95000,
    priceOnRequest: false,
    occasion: "everyday",
    material: "18K Rose Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: true,
    details: [
      "Adjustable 16-18 inch delicate trace chain",
      "Micro-prong handset gemstones",
      "High-polish mirror finish reverse",
    ],
  },
  {
    id: "aur-nk-103",
    slug: "elysian-grand-collar",
    name: "Elysian Grand Collar",
    productCode: "AUR-NK-103",
    category: "necklaces",
    description:
      "An exceptional statement necklace featuring interlaced sculptural facets of polished gold and channel-set diamonds. Exemplifying Aurelle's signature quiet luxury aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    ],
    price: null,
    priceOnRequest: true,
    occasion: "wedding",
    material: "18K Yellow Gold & Platinum",
    purity: "18 Karat / 950 Platinum",
    weight: null,
    availability: "Crafted to Order",
    featured: true,
    isNewArrival: false,
    details: [
      "Master atelier creation requiring over 90 hours of craftsmanship",
      "Dual-metal engineering for balanced structural integrity",
      "Custom private fitting recommended",
    ],
  },

  // EARRINGS
  {
    id: "aur-er-201",
    slug: "solis-sculptural-drops",
    name: "Solis Sculptural Drops",
    productCode: "AUR-ER-201",
    category: "earrings",
    description:
      "Architectural hollow-form drop earrings inspired by modern minimalist sculpture. Feather-light in weight yet visually commanding, they move with natural poise.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 78000,
    priceOnRequest: false,
    occasion: "festive",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: true,
    isNewArrival: false,
    details: [
      "Ultra-lightweight electroformed construction for all-day comfort",
      "Secure push-back closure with custom silicone clutch",
      "Silky satin and mirror polished dual finish",
    ],
  },
  {
    id: "aur-er-202",
    slug: "lumina-diamond-studs",
    name: "Lumina Diamond Studs",
    productCode: "AUR-ER-202",
    category: "earrings",
    description:
      "Four-prong classic solitaire studs in a contemporary low-profile setting. Designed to sit flush against the earlobe for seamless everyday radiance.",
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 112000,
    priceOnRequest: false,
    occasion: "everyday",
    material: "18K White Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: true,
    details: [
      "Low basket bezel-prong hybrid setting",
      "Threaded post mechanism for maximum security",
      "Ideal for everyday styling and layering",
    ],
  },
  {
    id: "aur-er-203",
    slug: "verve-articulated-chandeliers",
    name: "Verve Articulated Chandeliers",
    productCode: "AUR-ER-203",
    category: "earrings",
    description:
      "Tapering linear drops formed by delicate geometric links that catch the light from every angle. A celebratory homage to refined festivities.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 165000,
    priceOnRequest: false,
    occasion: "wedding",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Available for Viewing",
    featured: false,
    isNewArrival: true,
    details: [
      "Triple articulated joint design for fluid mobility",
      "Hand-milgrained edges for subtle vintage nuance",
      "Comfort-balanced weight distribution",
    ],
  },

  // RINGS
  {
    id: "aur-rg-301",
    slug: "seraph-emerald-cut-solitaire",
    name: "Seraph Emerald-Cut Solitaire",
    productCode: "AUR-RG-301",
    category: "rings",
    description:
      "A serene emerald-cut stone mounted on a slender knife-edge band. A study in proportion, negative space, and refined luxury.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 240000,
    priceOnRequest: false,
    occasion: "wedding",
    material: "Platinum & 18K Yellow Gold",
    purity: "950 Platinum",
    weight: null,
    availability: "In Stock",
    featured: true,
    isNewArrival: false,
    details: [
      "Platinum double-claw corner prongs for stone safety",
      "Comfort-fit curved interior shank",
      "Pairs flush with eternity bands",
    ],
  },
  {
    id: "aur-rg-302",
    slug: "aethel-eternity-band",
    name: "Aethel Fluted Eternity Band",
    productCode: "AUR-RG-302",
    category: "rings",
    description:
      "A rhythmic sequence of fluted gold segments accented with flush-set stones. Striking on its own and effortlessly complementary in a stack.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 68000,
    priceOnRequest: false,
    occasion: "everyday",
    material: "18K Rose Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: false,
    details: [
      "Tactile carved fluting with hand-buffed recesses",
      "Solid cast structure for daily resilience",
      "Engraving option available upon request",
    ],
  },
  {
    id: "aur-rg-303",
    slug: "nocturne-signet-ring",
    name: "Nocturne Minimalist Signet",
    productCode: "AUR-RG-303",
    category: "rings",
    description:
      "A modern reinterpretation of the traditional signet ring, featuring softened rectangular geometry with an unadorned satin face.",
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 82000,
    priceOnRequest: false,
    occasion: "gifts",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Available for Viewing",
    featured: false,
    isNewArrival: true,
    details: [
      "Brushed matte table with polished bevelled chamfers",
      "Custom bespoke monogram engraving available",
      "Solid gold back without hollow cavities",
    ],
  },

  // BANGLES & BRACELETS
  {
    id: "aur-bg-401",
    slug: "oriel-sculpted-cuff",
    name: "Oriel Sculpted Gold Cuff",
    productCode: "AUR-BG-401",
    category: "bangles",
    description:
      "An open cuff of gently swelling proportions, meticulously contoured to hug the wrist with ergonomic ease. A quiet masterpiece of gold metalwork.",
    images: [
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 195000,
    priceOnRequest: false,
    occasion: "festive",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Available for Viewing",
    featured: true,
    isNewArrival: false,
    details: [
      "Slightly pliable memory-core alloy for seamless slip-on fit",
      "Mirror-finish exterior with velvety brushed interior",
      "Subtle laser-etched Aurelle maker's mark inside",
    ],
  },
  {
    id: "aur-bg-402",
    slug: "clarion-tennis-bracelet",
    name: "Clarion Diamond Line Bracelet",
    productCode: "AUR-BG-402",
    category: "bangles",
    description:
      "A continuous river of uniform brilliant-cut stones set in low-profile shared prongs. The epitome of modern jewellery essentialism.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 285000,
    priceOnRequest: false,
    occasion: "wedding",
    material: "18K White Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: false,
    details: [
      "Double figure-eight safety clasp mechanism",
      "Seamless articulating links that prevent flipping on the wrist",
      "Individually hand-matched gemstones for uniform brilliance",
    ],
  },
  {
    id: "aur-bg-403",
    slug: "zenith-hinged-bangle",
    name: "Zenith Hinged Bangle",
    productCode: "AUR-BG-403",
    category: "bangles",
    description:
      "A minimalist oval-profile bangle with an invisible clasp closure. Sleek, refined, and effortlessly stackable with cherished timepieces.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 142000,
    priceOnRequest: false,
    occasion: "everyday",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: true,
    details: [
      "Precision hidden push-button release",
      "Anatomically contoured oval shape for natural wrist resting",
      "Subtle micro-pave stone accent at closure point",
    ],
  },

  // BRIDAL
  {
    id: "aur-br-501",
    slug: "ananya-ceremonial-choker-set",
    name: "Ananya Ceremonial Choker Suite",
    productCode: "AUR-BR-501",
    category: "bridal",
    description:
      "A grand celebratory suite comprising a multi-tier handcrafted choker and coordinating cascade ear pendants. Created for the discerning bride who seeks pure contemporary majesty.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    ],
    price: null,
    priceOnRequest: true,
    occasion: "wedding",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Crafted to Order",
    featured: true,
    isNewArrival: false,
    details: [
      "Complete bridal suite with matching statement earrings",
      "Bespoke adjustments available during private atelier consultation",
      "Presented in a bespoke handcrafted calfskin heirloom box",
    ],
  },
  {
    id: "aur-br-502",
    slug: "valeria-diamond-mathapatti",
    name: "Valeria Headpiece & Maang Tikka",
    productCode: "AUR-BR-502",
    category: "bridal",
    description:
      "Delicate articulated strands of gold and hand-selected stones that frame the hair with celestial beauty. Designed for comfortable wear through long celebratory rites.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ],
    price: null,
    priceOnRequest: true,
    occasion: "wedding",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Crafted to Order",
    featured: false,
    isNewArrival: true,
    details: [
      "Ultra-fine lightweight gold filigree structure",
      "Interchangeable hair anchor hooks for various bridal hairstyles",
      "Central drop gemstone with micro-claw settings",
    ],
  },
  {
    id: "aur-br-503",
    slug: "heirloom-haathphool-duo",
    name: "Heirloom Haathphool Duo",
    productCode: "AUR-BR-503",
    category: "bridal",
    description:
      "A pair of delicate hand chains connecting a slender wrist bangle to a refined ring. Modernized with clean lines and airy open-work.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 135000,
    priceOnRequest: false,
    occasion: "wedding",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "Available for Viewing",
    featured: false,
    isNewArrival: false,
    details: [
      "Sold as an identical pair for both hands",
      "Adjustable link sections for custom hand proportions",
      "Comfort-edge finishing to avoid snagging bridal silks",
    ],
  },

  // EVERYDAY ELEGANCE
  {
    id: "aur-ee-601",
    slug: "aura-geometric-huggie-hoops",
    name: "Aura Geometric Huggies",
    productCode: "AUR-EE-601",
    category: "everyday-elegance",
    description:
      "Compact huggie hoops with subtly bevelled edges that catch the morning light. A staple of refined daily adornment.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 46000,
    priceOnRequest: false,
    occasion: "everyday",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: true,
    isNewArrival: false,
    details: [
      "Click-snap hinge closure that feels reassuringly firm",
      "12mm external diameter for seamless sleep-in comfort",
      "Subtle chamfered profile",
    ],
  },
  {
    id: "aur-ee-602",
    slug: "circe-fine-chain-bracelet",
    name: "Circe Fine Chain Bracelet",
    productCode: "AUR-EE-602",
    category: "everyday-elegance",
    description:
      "A gossamer cable chain punctuated by three bezel-set micro-diamonds. Designed to be put on and never taken off.",
    images: [
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 52000,
    priceOnRequest: false,
    occasion: "gifts",
    material: "18K Yellow Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: true,
    details: [
      "Tear-drop lobster claw clasp",
      "Triple sizing ring for 6.0, 6.5, and 7.0 inch wrists",
      "Low profile bezel settings that never catch clothing",
    ],
  },
  {
    id: "aur-ee-603",
    slug: "monolith-bar-pendant",
    name: "Monolith Bar Pendant",
    productCode: "AUR-EE-603",
    category: "everyday-elegance",
    description:
      "A vertical rectangular bar with satin brushed facets suspended on an Italian diamond-cut wheat chain. Crisp, minimalist, and universally flattering.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop",
    ],
    price: 64000,
    priceOnRequest: false,
    occasion: "gifts",
    material: "18K Rose Gold",
    purity: "18 Karat",
    weight: null,
    availability: "In Stock",
    featured: false,
    isNewArrival: false,
    details: [
      "Solid bar with weighted balance to prevent spinning",
      "Subtle matte face with mirror-polished perimeter",
      "18-inch Italian diamond-cut wheat chain",
    ],
  },
];

/**
 * Helper query functions for the product catalogue
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getNewArrivals(limit = 6): Product[] {
  return products.filter((p) => p.isNewArrival).slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByOccasion(occasion: string): Product[] {
  return products.filter((p) => p.occasion === occasion);
}

export function getRelatedProducts(currentId: string, category: string, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== currentId && p.category === category)
    .concat(products.filter((p) => p.id !== currentId && p.category !== category))
    .slice(0, limit);
}
