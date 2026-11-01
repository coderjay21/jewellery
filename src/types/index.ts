export type ProductCategory =
  | "necklaces"
  | "earrings"
  | "rings"
  | "bangles"
  | "bridal"
  | "everyday-elegance";

export type ProductOccasion =
  | "wedding"
  | "festive"
  | "everyday"
  | "gifts";

export type ProductAvailability =
  | "In Stock"
  | "Crafted to Order"
  | "Available for Viewing";

export interface Product {
  id: string;
  slug: string;
  name: string;
  productCode: string;
  category: ProductCategory;
  description: string;
  images: string[];
  price: number | null;
  priceOnRequest: boolean;
  occasion: ProductOccasion;
  material: string | null;
  purity: string | null;
  weight: string | null;
  availability: ProductAvailability;
  featured: boolean;
  isNewArrival: boolean;
  details?: string[];
  dimensions?: string | null;
  gemstones?: string | null;
}

export interface CollectionCategory {
  id: ProductCategory;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface OccasionItem {
  id: ProductOccasion;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface FilterState {
  category: string;
  occasion: string;
  search: string;
  sortBy: "featured" | "newest" | "price-asc" | "price-desc" | "name";
}
