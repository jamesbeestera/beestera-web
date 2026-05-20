// app/page.tsx
// Homepage shell — Navbar + placeholder + Footer
// Figma: Screens/Desktop/HomePage (node 137:323)

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      {/* Light theme confirmed — homepage uses white navbar */}
      <Navbar theme="light" activeHref="/" />

      <main className="flex-1">
        <HomepagePlaceholder />
      </main>

      <Footer theme="light" />
    </>
  );
}

function HomepagePlaceholder() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center gap-8 min-h-[60vh] py-32 px-8"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Brand yellow accent circle */}
      <div className="w-16 h-16 rounded-full bg-[#ffbb00] flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="16" cy="17" rx="7" ry="9" fill="white" fillOpacity="0.9"/>
          <rect x="12" y="11" width="8" height="2" rx="1" fill="white" fillOpacity="0.5"/>
          <rect x="12" y="15.5" width="8" height="2" rx="1" fill="white" fillOpacity="0.5"/>
          <rect x="12" y="20" width="8" height="2" rx="1" fill="white" fillOpacity="0.5"/>
        </svg>
      </div>

      <div className="flex flex-col gap-4 max-w-lg">
        <h1
          className="text-[42px] font-bold text-[#181a1d] leading-[1.2] tracking-tight"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Beestera homepage content coming next.
        </h1>
        <p
          className="text-[18px] font-normal text-[#71717a] leading-[1.5]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          The Navbar and Footer are built from Figma. Homepage sections — hero, programs,
          training, and more — will be added here next.
        </p>
      </div>

      {/* Status badge */}
      <div
        className="inline-flex items-center gap-2 bg-[#fef9c3] border border-[#ffbb00]/40 text-[#181a1d] text-[13px] font-semibold px-4 py-2 rounded-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="w-2 h-2 rounded-full bg-[#ffbb00] animate-pulse" />
        Foundation complete · Homepage sections in progress
      </div>
    </section>
  );
}
