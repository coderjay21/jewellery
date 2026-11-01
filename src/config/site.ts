export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "AURELLE",
  tagline: "Contemporary Fine Jewellery",
  description:
    "Discover thoughtfully selected contemporary jewellery for moments that make life extraordinary. Private appointments & bespoke concierge.",
  url: "https://aurelle-jewellery.demo",
  ogImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",

  // Central WhatsApp Configuration (India +91 with 10 digits 8949521427 => 918949521427)
  whatsapp: {
    rawNumber: "8949521427",
    countryCode: "91",
    formattedNumber: "+91 89495 21427",
    destinationNumber: "918949521427",
    defaultMessage:
      "Hello AURELLE, I would like to enquire about your fine jewellery collection and bespoke services.",
  },

  social: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },

  navigation: [
    { title: "Collections", href: "/collections" },
    { title: "Necklaces", href: "/collections/necklaces" },
    { title: "Earrings", href: "/collections/earrings" },
    { title: "Rings", href: "/collections/rings" },
    { title: "Bangles", href: "/collections/bangles" },
    { title: "Bridal", href: "/collections/bridal" },
    { title: "Our Story", href: "/our-story" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],

  categories: [
    {
      id: "necklaces",
      name: "Necklaces",
      slug: "necklaces",
      description: "Fluid silhouettes, subtle pendants, and commanding collared designs.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "earrings",
      name: "Earrings",
      slug: "earrings",
      description: "Sculptural drops, diamond studs, and delicate architectural hoops.",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "rings",
      name: "Rings",
      slug: "rings",
      description: "Solitaires, eternity bands, and tactile signet-inspired creations.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "bangles",
      name: "Bangles",
      slug: "bangles",
      description: "Seamless gold cuffs, articulated bangles, and diamond-set bracelets.",
      image: "https://images.unsplash.com/photo-1611591475871-3310469b618b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "bridal",
      name: "Bridal",
      slug: "bridal",
      description: "Heirloom ceremonial jewellery tailored for celebratory grandeur.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "everyday-elegance",
      name: "Everyday Elegance",
      slug: "everyday-elegance",
      description: "Effortless, understated luxury designed to be worn day and night.",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1000&auto=format&fit=crop",
    },
  ],

  occasions: [
    {
      id: "wedding",
      name: "Wedding Celebrations",
      slug: "wedding",
      description: "High jewellery and ceremonial pieces crafted for immortal vows.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "festive",
      name: "Festive Moments",
      slug: "festive",
      description: "Opulent reflections of light and gold for joyous gatherings.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "everyday",
      name: "Everyday Elegance",
      slug: "everyday",
      description: "Intuitive grace for modern daily rituals.",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "gifts",
      name: "Meaningful Gifts",
      slug: "gifts",
      description: "Timeless tokens of devotion, milestone tokens, and personal tributes.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    },
  ],

  concierge: {
    hours: "Monday – Saturday: 11:00 AM – 7:30 PM IST",
    email: "concierge@aurelle-jewellery.demo",
    phone: "+91 89495 21427",
    consultationNote:
      "Showroom viewings and private consultations are arranged strictly by appointment to ensure undivided attention.",
  },

  currency: {
    symbol: "₹",
    code: "INR",
  },
};
