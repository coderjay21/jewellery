import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, Calendar } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/config/site";
import { formatPrice, getProductWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Creation Not Found",
    };
  }

  return {
    title: `${product.name} — ${product.productCode}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, product.category, 4);
  const categoryConfig = siteConfig.categories.find((c) => c.id === product.category);
  const whatsappUrl = getProductWhatsAppUrl(product);

  // Structured Data (JSON-LD) for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.productCode,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price ? product.price : undefined,
      availability:
        product.availability === "In Stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-24">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Breadcrumb Strip */}
      <div className="border-b border-[#D8CFC2]/50 bg-[#FCFAF6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-wider text-[#5A5049]">
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
              <li>
                <Link
                  href={`/collections/${product.category}`}
                  className="hover:text-[#211D1A] transition-colors"
                >
                  {categoryConfig ? categoryConfig.name : product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#B69A62] font-medium truncate max-w-xs" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Details & WhatsApp Concierge (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            <div>
              {/* Product Code & Category */}
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#5A5049] mb-2">
                <span className="text-[#B69A62] font-mono font-medium">{product.productCode}</span>
                <span>•</span>
                <span>{categoryConfig ? categoryConfig.name : product.category}</span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light leading-tight">
                {product.name}
              </h1>

              {/* Price Row */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-serif text-[#211D1A] font-medium">
                  {formatPrice(product.price, product.priceOnRequest)}
                </span>
                {!product.priceOnRequest && product.price && (
                  <span className="text-[10px] uppercase tracking-wider text-[#5A5049] bg-[#EDE8DE] px-2 py-0.5 rounded-xs">
                    Illustrative Demo Price
                  </span>
                )}
              </div>

              {/* Availability Badge */}
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B69A62]" />
                <span className="text-xs text-[#5A5049] tracking-wider uppercase">
                  Status: <strong className="text-[#211D1A] font-medium">{product.availability}</strong>
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D8CFC2]/60" />

            {/* Description */}
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#B69A62] mb-2 font-medium">
                Design Synopsis
              </h2>
              <p className="text-sm text-[#5A5049] font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* WhatsApp Enquiry Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#211D1A] hover:bg-[#3D3530] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium rounded-xs shadow-md transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-[#B69A62]" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 border border-[#211D1A] text-[#211D1A] hover:bg-[#211D1A] hover:text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium rounded-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Private Viewing</span>
              </Link>

              <p className="text-[11px] text-center text-[#5A5049] font-light">
                Direct WhatsApp opens with your specific piece code for instant consultation.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#D8CFC2]/60" />

            {/* Product Specifications (Only non-null values!) */}
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#B69A62] mb-3 font-medium">
                Specifications & Materials
              </h2>
              <dl className="divide-y divide-[#D8CFC2]/40 text-xs">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#5A5049] uppercase tracking-wider">Product Code</dt>
                  <dd className="font-mono text-[#211D1A]">{product.productCode}</dd>
                </div>
                {product.material && (
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-[#5A5049] uppercase tracking-wider">Precious Material</dt>
                    <dd className="text-[#211D1A]">{product.material}</dd>
                  </div>
                )}
                {product.purity && (
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-[#5A5049] uppercase tracking-wider">Purity Rating</dt>
                    <dd className="text-[#211D1A]">{product.purity}</dd>
                  </div>
                )}
                {product.weight && (
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-[#5A5049] uppercase tracking-wider">Gross Weight</dt>
                    <dd className="text-[#211D1A]">{product.weight}</dd>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#5A5049] uppercase tracking-wider">Occasion</dt>
                  <dd className="text-[#211D1A] capitalize">{product.occasion}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#5A5049] uppercase tracking-wider">Availability</dt>
                  <dd className="text-[#211D1A]">{product.availability}</dd>
                </div>
              </dl>
            </div>

            {/* Atelier Craft Highlights */}
            {product.details && product.details.length > 0 && (
              <div className="p-4 bg-[#FCFAF6] border border-[#D8CFC2]/60 rounded-xs">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#B69A62] mb-2 font-medium">
                  Atelier Notes
                </h3>
                <ul className="space-y-1.5 text-xs text-[#5A5049] font-light">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B69A62]">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[#D8CFC2]/60">
          <Link
            href="/collections"
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#5A5049] hover:text-[#211D1A] transition-colors gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Collections</span>
          </Link>
        </div>

        {/* Related Creations */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block mb-2">
                Harmonious Pairings
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#211D1A] font-light">
                Complementary Creations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
