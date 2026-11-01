export function AnnouncementBar() {
  return (
    <div className="bg-[#211D1A] text-[#F8F6F1] px-4 py-2 text-center text-[11px] md:text-xs tracking-[0.2em] uppercase font-light border-b border-[#3D3530]/30 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span className="inline-block w-1 h-1 rounded-full bg-[#B69A62]"></span>
        <span>The Art of Adornment — Discover Aurelle</span>
        <span className="hidden sm:inline-block text-[#B69A62] mx-1">•</span>
        <span className="hidden sm:inline-block text-[#D8CFC2]">Private Atelier Viewings by Appointment</span>
        <span className="inline-block w-1 h-1 rounded-full bg-[#B69A62]"></span>
      </div>
    </div>
  );
}
