import { Suspense } from "react";
import { Metadata } from "next";
import { CollectionsClient } from "./CollectionsClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "All Jewellery Collections",
  description:
    "Explore the complete Aurelle jewellery catalogue: necklaces, solitaire rings, architectural earrings, cuffs, and bridal suites.",
  openGraph: {
    title: `All Collections | ${siteConfig.name}`,
    description: "Explore the complete Aurelle contemporary jewellery catalogue.",
  },
};

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="w-8 h-8 border-2 border-[#B69A62] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xs uppercase tracking-widest text-[#5A5049]">
            Loading Collections...
          </p>
        </div>
      }
    >
      <CollectionsClient />
    </Suspense>
  );
}
