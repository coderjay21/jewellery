import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F6F1] px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#EDE8DE] flex items-center justify-center text-[#B69A62] mx-auto">
          <Compass className="w-6 h-6" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B69A62] font-medium block">
          404 — Page Not Located
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#211D1A] font-light">
          The Piece You Seek Has Moved.
        </h1>

        <div className="w-12 h-[1px] bg-[#B69A62] mx-auto my-3" />

        <p className="text-sm text-[#5A5049] font-light leading-relaxed">
          The creation or page you are attempting to view is not accessible. We invite you to explore our current catalogue or contact our concierge.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/collections"
            className="px-6 py-3 bg-[#211D1A] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3D3530] transition-colors rounded-xs shadow-md"
          >
            Explore Collections
          </Link>

          <Link
            href="/"
            className="px-6 py-3 border border-[#211D1A] text-[#211D1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#211D1A] hover:text-[#F8F6F1] transition-all rounded-xs"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
