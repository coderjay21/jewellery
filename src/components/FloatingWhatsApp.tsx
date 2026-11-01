"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle Luxury Tooltip */}
      {!isTooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#211D1A] text-[#F8F6F1] px-3.5 py-2 rounded-xs shadow-xl border border-[#3D3530]/80 text-[11px] uppercase tracking-wider animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62] animate-pulse" />
          <span>WhatsApp Concierge</span>
          <button
            onClick={() => setIsTooltipDismissed(true)}
            className="text-[#D8CFC2] hover:text-[#F8F6F1] ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#211D1A] text-[#F8F6F1] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#B69A62]/40 hover:border-[#B69A62] focus:outline-none focus:ring-2 focus:ring-[#B69A62] focus:ring-offset-2 focus:ring-offset-[#F8F6F1] group"
        aria-label="Chat with Aurelle WhatsApp Concierge"
      >
        <MessageCircle className="w-6 h-6 text-[#B69A62] group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
