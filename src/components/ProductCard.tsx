"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, getProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage =
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop";

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="group relative flex flex-col bg-[#FCFAF6] border border-[#D8CFC2]/50 hover:border-[#B69A62]/60 transition-all duration-500 rounded-xs luxury-card-shadow overflow-hidden">
      {/* Product Image Area */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE8DE] block"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={imageError ? fallbackImage : product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          onError={() => setImageError(true)}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isNewArrival && (
            <span className="bg-[#211D1A] text-[#F8F6F1] text-[9px] uppercase tracking-[0.2em] px-2 py-1 font-medium rounded-xs">
              New
            </span>
          )}
          {product.availability === "Crafted to Order" && (
            <span className="bg-[#B69A62] text-[#211D1A] text-[9px] uppercase tracking-[0.2em] px-2 py-1 font-medium rounded-xs">
              Made to Order
            </span>
          )}
        </div>

        {/* Quick WhatsApp Action Button Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <a
            href={getProductWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#211D1A]/95 hover:bg-[#211D1A] text-[#F8F6F1] text-[11px] uppercase tracking-[0.18em] backdrop-blur-sm transition-colors rounded-xs shadow-lg"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#B69A62]" />
            <span>Quick WhatsApp Enquiry</span>
          </a>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-[#FCFAF6]">
        <div>
          {/* Product Code & Category */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#5A5049] mb-1.5">
            <span className="text-[#B69A62] font-mono">{product.productCode}</span>
            <span>{product.category}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg md:text-xl text-[#211D1A] font-normal leading-snug group-hover:text-[#B69A62] transition-colors line-clamp-1">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>

          {/* Material note if available */}
          {product.material && (
            <p className="text-[11px] text-[#5A5049]/80 font-light mt-1 truncate">
              {product.material}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#D8CFC2]/40 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#211D1A]">
              {formatPrice(product.price, product.priceOnRequest)}
            </span>
            {!product.priceOnRequest && product.price && (
              <span className="text-[9px] uppercase tracking-wider text-[#5A5049]/70">
                Illustrative Demo
              </span>
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-xs tracking-wider uppercase text-[#211D1A] group-hover:text-[#B69A62] transition-colors gap-1"
            aria-label={`View ${product.name}`}
          >
            <span className="hidden sm:inline text-[11px]">Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
