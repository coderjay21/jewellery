"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const fallbackImage =
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop";

  const currentImage = images[selectedIndex] || fallbackImage;

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails (horizontal on mobile, vertical column on desktop) */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-20 shrink-0 pb-2 lg:pb-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-[4/5] w-16 lg:w-full shrink-0 overflow-hidden rounded-xs border-2 transition-all ${
                selectedIndex === idx
                  ? "border-[#B69A62] shadow-sm"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${idx + 1} of ${images.length} for ${productName}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Large Display Image */}
      <div
        className="relative aspect-[4/5] w-full bg-[#EDE8DE] rounded-xs overflow-hidden border border-[#D8CFC2]/60 cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
        title="Click to toggle magnification"
      >
        <Image
          src={currentImage}
          alt={`${productName} view ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover object-center transition-transform duration-500 ease-out ${
            isZoomed ? "scale-135" : "scale-100"
          }`}
        />

        {/* Zoom Hint Overlay */}
        <div className="absolute bottom-3 right-3 bg-[#211D1A]/80 backdrop-blur-sm text-[#F8F6F1] px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-xs pointer-events-none opacity-80">
          {isZoomed ? "Tap to fit" : "Tap to zoom"}
        </div>
      </div>
    </div>
  );
}
