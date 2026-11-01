import { siteConfig } from "@/config/site";
import { Product } from "@/types";

/**
 * Generates a correctly formatted international WhatsApp URL for Aurelle
 * Using India country code (91) + ten-digit number (8949521427) => 918949521427
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.whatsapp.destinationNumber;
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

/**
 * Generates an enquiry URL for a specific jewellery piece
 */
export function getProductWhatsAppUrl(product: Pick<Product, "name" | "productCode">): string {
  const message = `Hello AURELLE, I'm interested in ${product.name} (Product Code: ${product.productCode}). Please share the price and availability.`;
  return getWhatsAppUrl(message);
}

/**
 * Format Indian currency with INR symbol or "Price on Request"
 */
export function formatPrice(price: number | null, priceOnRequest: boolean): string {
  if (priceOnRequest || price === null || price === undefined) {
    return "Price on Request";
  }
  // Standard Indian currency format (e.g., ₹1,85,000)
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
