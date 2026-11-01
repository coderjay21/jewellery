"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types";
import { formatPrice } from "@/lib/whatsapp";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const results: Product[] = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.productCode.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Jewellery Catalogue"
      className="fixed inset-0 z-50 flex flex-col bg-[#211D1A]/60 backdrop-blur-md animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-3xl mx-auto mt-12 md:mt-20 bg-[#F8F6F1] shadow-2xl border border-[#D8CFC2]/60 overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-[#D8CFC2]/60 bg-[#FCFAF6]">
          <Search className="w-5 h-5 text-[#B69A62] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, code (e.g. AUR-NK), or category..."
            className="w-full bg-transparent text-lg text-[#211D1A] placeholder:text-[#5A5049]/60 focus:outline-none font-light"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#5A5049] hover:text-[#211D1A] transition-colors p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs uppercase tracking-widest text-[#5A5049] hover:text-[#211D1A] ml-2 px-2 py-1 border border-[#D8CFC2] rounded-xs"
            aria-label="Close search modal"
          >
            Esc
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {trimmed === "" ? (
            <div className="py-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B69A62] mb-3">Popular Discoveries</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Necklaces", "Solitaire", "Diamond Studs", "Gold Cuff", "Bridal", "AUR-NK-101"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 bg-[#EDE8DE]/70 hover:bg-[#D8CFC2] text-[#211D1A] transition-colors rounded-sm tracking-wider"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-widest text-[#5A5049] mb-4">
                Found {results.length} {results.length === 1 ? "creation" : "creations"}
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={handleClose}
                  className="group flex items-center gap-4 p-3 hover:bg-[#EDE8DE]/60 transition-colors border border-transparent hover:border-[#D8CFC2]/60 rounded-xs"
                >
                  <div className="relative w-14 h-16 bg-[#EDE8DE] shrink-0 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] tracking-widest uppercase text-[#B69A62]">
                        {product.productCode}
                      </span>
                      <span className="text-[10px] text-[#5A5049]">•</span>
                      <span className="text-[10px] tracking-widest uppercase text-[#5A5049]">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-base text-[#211D1A] truncate group-hover:text-[#B69A62] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#5A5049] font-medium">
                      {formatPrice(product.price, product.priceOnRequest)}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#5A5049] group-hover:text-[#211D1A] group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="font-serif text-xl text-[#211D1A] mb-2">No creations found</p>
              <p className="text-sm text-[#5A5049] max-w-sm mx-auto mb-6">
                We couldn&apos;t find any pieces matching &ldquo;{query}&rdquo;. Try searching for &ldquo;Necklaces&rdquo;, &ldquo;Rings&rdquo;, or &ldquo;AUR-NK&rdquo;.
              </p>
              <button
                onClick={() => setQuery("")}
                className="text-xs uppercase tracking-widest text-[#B69A62] underline underline-offset-4 hover:text-[#987E4B]"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
