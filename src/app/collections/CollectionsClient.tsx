"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";

export function CollectionsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derive filters directly from URL searchParams (single source of truth)
  const selectedCategory = searchParams.get("category") || "all";
  const selectedOccasion = searchParams.get("occasion") || "all";
  const searchQuery = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "featured";

  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Update URL parameters when filters change
  const updateUrlParams = (cat: string, occ: string, q: string, sort: string) => {
    const params = new URLSearchParams();
    if (cat && cat !== "all") params.set("category", cat);
    if (occ && occ !== "all") params.set("occasion", occ);
    if (q) params.set("search", q);
    if (sort && sort !== "featured") params.set("sortBy", sort);

    const queryString = params.toString();
    router.replace(`/collections${queryString ? `?${queryString}` : ""}`, {
      scroll: false,
    });
  };

  const handleCategoryChange = (category: string) => {
    setVisibleCount(8);
    updateUrlParams(category, selectedOccasion, searchQuery, sortBy);
  };

  const handleOccasionChange = (occasion: string) => {
    setVisibleCount(8);
    updateUrlParams(selectedCategory, occasion, searchQuery, sortBy);
  };

  const handleSearchChange = (query: string) => {
    setVisibleCount(8);
    updateUrlParams(selectedCategory, selectedOccasion, query, sortBy);
  };

  const handleSortChange = (sort: string) => {
    updateUrlParams(selectedCategory, selectedOccasion, searchQuery, sort);
  };

  const handleClearAll = () => {
    setVisibleCount(8);
    router.replace("/collections", { scroll: false });
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by occasion
    if (selectedOccasion !== "all") {
      result = result.filter((p) => p.occasion === selectedOccasion);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.productCode.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.material && p.material.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        });
        break;
      case "newest":
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, selectedOccasion, searchQuery, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedOccasion !== "all" ||
    searchQuery.trim() !== "" ||
    sortBy !== "featured";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
          The Aurelle Catalogue
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
          Fine Jewellery Creations
        </h1>
        <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-4" />
        <p className="text-sm sm:text-base text-[#5A5049] font-light leading-relaxed">
          Explore our complete collection of architectural jewellery. Use the controls below to discover by silhouette, occasion, or specific design codes.
        </p>
      </div>

      {/* Control Bar: Search, Category Filters, Sort, Count */}
      <div className="space-y-6 mb-10">
        {/* Top Control Strip */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#D8CFC2]/60">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5049]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search jewellery by name or code..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#FCFAF6] border border-[#D8CFC2] focus:border-[#B69A62] text-xs text-[#211D1A] placeholder:text-[#5A5049]/70 focus:outline-none transition-colors rounded-xs"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A5049] hover:text-[#211D1A]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right controls: Sort dropdown & Reset */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#5A5049] hidden sm:inline">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-[#FCFAF6] border border-[#D8CFC2] text-xs py-2.5 px-3 text-[#211D1A] focus:outline-none focus:border-[#B69A62] rounded-xs tracking-wider"
                aria-label="Sort products"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Releases</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider text-[#5A5049] hover:text-[#211D1A] border border-[#D8CFC2] hover:border-[#211D1A] transition-colors rounded-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Horizontal Scrollable) */}
        <div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap rounded-xs transition-all ${
                selectedCategory === "all"
                  ? "bg-[#211D1A] text-[#F8F6F1] font-medium"
                  : "bg-[#FCFAF6] text-[#5A5049] hover:text-[#211D1A] border border-[#D8CFC2]/60 hover:border-[#211D1A]"
              }`}
            >
              All Categories
            </button>
            {siteConfig.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap rounded-xs transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#211D1A] text-[#F8F6F1] font-medium"
                    : "bg-[#FCFAF6] text-[#5A5049] hover:text-[#211D1A] border border-[#D8CFC2]/60 hover:border-[#211D1A]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Occasion Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B69A62] mr-2">
            Occasion:
          </span>
          <button
            onClick={() => handleOccasionChange("all")}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              selectedOccasion === "all"
                ? "bg-[#B69A62] text-[#211D1A] font-medium"
                : "bg-transparent text-[#5A5049] hover:text-[#211D1A]"
            }`}
          >
            All
          </button>
          {siteConfig.occasions.map((occ) => (
            <button
              key={occ.id}
              onClick={() => handleOccasionChange(occ.id)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                selectedOccasion === occ.id
                  ? "bg-[#B69A62] text-[#211D1A] font-medium"
                  : "bg-transparent text-[#5A5049] hover:text-[#211D1A]"
              }`}
            >
              {occ.name}
            </button>
          ))}
        </div>

        {/* Active Results Summary */}
        <div className="flex items-center justify-between text-xs text-[#5A5049] pt-2">
          <span>
            Showing <strong className="text-[#211D1A]">{displayedProducts.length}</strong> of{" "}
            <strong className="text-[#211D1A]">{filteredProducts.length}</strong> creations
          </span>
          {hasActiveFilters && (
            <button
              onClick={handleClearAll}
              className="text-[#B69A62] hover:text-[#987E4B] underline underline-offset-4"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs my-8">
          <p className="font-serif text-2xl text-[#211D1A] mb-3">No matching creations found</p>
          <p className="text-sm text-[#5A5049] max-w-md mx-auto mb-6">
            We couldn&apos;t find any jewellery matching your chosen filters or search query.
          </p>
          <button
            onClick={handleClearAll}
            className="inline-flex items-center px-6 py-3 bg-[#211D1A] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] hover:bg-[#3D3530] transition-colors rounded-xs"
          >
            Clear Filters & View All
          </button>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-14 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#211D1A] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#211D1A] hover:text-[#F8F6F1] transition-all duration-300 rounded-xs"
          >
            Load More Creations ({filteredProducts.length - displayedProducts.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
