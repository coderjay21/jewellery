import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category collection routes
  const categoryRoutes: MetadataRoute.Sitemap = siteConfig.categories.map((cat) => ({
    url: `${baseUrl}/collections/${cat.slug}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Product detail routes
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
