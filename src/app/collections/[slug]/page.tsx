import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Collection`,
    description: category.description,
    openGraph: {
      title: `${category.name} | ${siteConfig.name}`,
      description: category.description,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Category Hero / Header */}
      <section className="py-12 md:py-16 bg-[#FCFAF6] border-b border-[#D8CFC2]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#5A5049]">
              <li>
                <Link href="/" className="hover:text-[#211D1A] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/collections" className="hover:text-[#211D1A] transition-colors">
                  Collections
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#B69A62] font-medium" aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
              Curated Category
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211D1A] font-light">
              {category.name}
            </h1>
            <div className="w-12 h-[1px] bg-[#B69A62] my-4" />
            <p className="text-base text-[#5A5049] font-light leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D8CFC2]/40">
          <p className="text-xs uppercase tracking-wider text-[#5A5049]">
            Displaying <strong className="text-[#211D1A]">{categoryProducts.length}</strong> creations
          </p>

          <Link
            href="/collections"
            className="inline-flex items-center text-xs uppercase tracking-wider text-[#5A5049] hover:text-[#211D1A] transition-colors gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Collections</span>
          </Link>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs">
            <p className="font-serif text-xl text-[#211D1A] mb-2">
              No creations available in this category yet.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center text-xs uppercase tracking-widest text-[#B69A62] underline underline-offset-4 mt-2"
            >
              Browse other collections
            </Link>
          </div>
        )}

        {/* Other Categories Nav */}
        <div className="mt-20 pt-12 border-t border-[#D8CFC2]/60">
          <h3 className="font-serif text-2xl text-[#211D1A] mb-6">
            Explore Other Silhouettes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {siteConfig.categories
              .filter((c) => c.slug !== category.slug)
              .map((otherCat) => (
                <Link
                  key={otherCat.id}
                  href={`/collections/${otherCat.slug}`}
                  className="p-3 bg-[#FCFAF6] border border-[#D8CFC2]/60 hover:border-[#B69A62] text-center text-xs uppercase tracking-wider text-[#211D1A] hover:text-[#B69A62] transition-colors rounded-xs"
                >
                  {otherCat.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
