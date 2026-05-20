"use client";

// components/layout/Navbar.tsx
// Figma source: NavBar/Desktop — Light (780:36359) and Dark (780:34551)
//
// Structure confirmed from Figma:
//   1. Promo bar (36px)    — bg: brand gradient (dark) / surface/tertiary gray (light)
//      Logo left · "Find a Camp | Help | Join Us | Sign In" right
//   2. Main nav (60px)     — white (light) / black (dark) bg
//      Logo wordmark left · Nav links center · Search bar right
//
// Total navbar height: 96px (36 + 60)

import Link from "next/link";
import { useState, useRef } from "react";
import { cn } from "@/lib/cn";
import { primaryNavLinks, promoBarLinks } from "@/data/navigation";
import MegaMenu from "@/components/layout/MegaMenu";

// ─── Types ────────────────────────────────────────────────────────────────────

export type NavbarTheme = "light" | "dark";

interface NavbarProps {
  /** Maps to Figma variants: Property 1=Light / Property 1=Dark */
  theme?: NavbarTheme;
  /** The current page href — used to highlight active nav item */
  activeHref?: string;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar({ theme = "light", activeHref, className }: NavbarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";

  return (
    <header
      role="banner"
      className={cn(
        "w-full flex flex-col",
        // Total height: 36px promo + 60px nav = 96px
        className
      )}
    >
      {/* ── Promo Bar (36px) ────────────────────────────────────────────────
          Figma: node-779_33985 / node-780_36360
          Light: bg #f4f4f5 (surface/tertiary)
          Dark:  bg gradient from #ffbb00 to #ffd700
      ────────────────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          "h-9 w-full flex items-center relative shrink-0",
          isDark
            ? "bg-gradient-to-b from-[#ffd700] to-[#ffbb00]"
            : "bg-[#f4f4f5]"
        )}
      >
        {/* Logo icon — left side of promo bar */}
        <div className="absolute left-12 flex items-center justify-center w-6 h-6">
          <BeesteraIcon theme={theme} />
        </div>

        {/* Promo links — right side */}
        {/* Figma: "Find a Camp | Help | Join Us | Sign In" — Open Sans SemiBold 12px */}
        <nav
          aria-label="Top navigation"
          className="absolute right-10 flex items-center gap-0"
        >
          {promoBarLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={cn(
                  "text-[12px] font-semibold leading-[14px] px-2 py-2.5 whitespace-nowrap",
                  "font-['Open_Sans',sans-serif]",
                  isDark ? "text-black hover:text-black/70" : "text-[#111] hover:text-black",
                  "transition-colors"
                )}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {link.label}
              </Link>
              {i < promoBarLinks.length - 1 && (
                <span className={cn(
                  "text-[12px] select-none",
                  isDark ? "text-black/40" : "text-[#111]/40"
                )}>
                  |
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ── Main Nav (60px) ─────────────────────────────────────────────────
          Figma: node-779_33955 / node-780_36375
          Light: bg white, text black / gray-500
          Dark:  bg black, text white / gray-400
      ────────────────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          "h-[60px] w-full relative shrink-0",
          isDark ? "bg-black" : "bg-white"
        )}
      >
        <div className="mx-auto max-w-[1440px] h-full px-[107px] relative flex items-center">

          {/* Wordmark — left */}
          {/* Figma: node-780_36404 — 96.6px × 12px wordmark */}
          <Link
            href="/"
            aria-label="Beestera — Go to homepage"
            className="absolute left-[107px] flex items-center"
          >
            <BeesteraWordmark theme={theme} />
          </Link>

          {/* Nav links — centered */}
          {/* Figma: Open Sans SemiBold 18px, gap-6, confirmed colors */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6"
          >
            {primaryNavLinks.map((link) => {
              const isActive = activeHref === link.href;
              const isAbout = link.label === "About";

              // "About" gets a button that opens the megamenu instead of a direct link
              if (isAbout) {
                return (
                  <div key={link.href} className="relative">
                    <button
                      ref={aboutRef}
                      type="button"
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="dialog"
                      onClick={() => setMegaMenuOpen((prev: boolean) => !prev)}
                      className={cn(
                        "flex items-center gap-1 text-[18px] font-semibold leading-[1.5] whitespace-nowrap transition-colors",
                        "font-['Open_Sans',sans-serif]",
                        megaMenuOpen || isActive
                          ? isDark ? "text-white" : "text-black"
                          : isDark ? "text-[#a1a1aa] hover:text-white" : "text-[#71717a] hover:text-black",
                      )}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {link.label}
                      {/* Chevron — rotates when open */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={cn(
                          "transition-transform duration-200 mt-0.5",
                          megaMenuOpen ? "rotate-180" : "rotate-0"
                        )}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* MegaMenu — positioned relative to the "About" button */}
                    <MegaMenu
                      isOpen={megaMenuOpen}
                      onClose={() => setMegaMenuOpen(false)}
                      theme={theme}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-[18px] font-semibold leading-[1.5] whitespace-nowrap transition-colors",
                    "font-['Open_Sans',sans-serif]",
                    isActive
                      ? isDark ? "text-white" : "text-black"
                      : isDark ? "text-[#a1a1aa] hover:text-white" : "text-[#71717a] hover:text-black",
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Search bar — right */}
          {/* Figma: node-875_43532 (light) / node-779_33965 (dark) — 195px × 40px */}
          <div className="hidden lg:block absolute right-[107px]">
            {isDark ? (
              // Dark: gray pill with Search text and icon
              <div className="bg-[#3d3d3d] h-10 w-[180px] rounded-full flex items-center px-4 gap-2">
                <SearchIcon className="text-[#a1a1aa] w-5 h-5 shrink-0" />
                <span
                  className="text-[14px] font-normal text-[#a1a1aa] font-['Open_Sans',sans-serif]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Search
                </span>
              </div>
            ) : (
              // Light: input field with search icon
              <div className="bg-[#f4f4f5] h-10 w-[195px] rounded-full flex items-center px-4 gap-2 relative">
                <SearchIcon className="text-[#a1a1aa] w-5 h-5 shrink-0" />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className={cn(
                    "bg-transparent text-[15px] font-normal text-[#a1a1aa]",
                    "font-['Open_Sans',sans-serif] outline-none w-full",
                    "placeholder:text-[#a1a1aa]"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            )}
          </div>

          {/* Mobile menu trigger — shown below lg, to be implemented */}
          <button
            className="lg:hidden absolute right-6 p-2 rounded-md"
            aria-label="Open menu"
            type="button"
          >
            <HamburgerIcon className={isDark ? "text-white" : "text-black"} />
          </button>

        </div>
      </div>
    </header>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Beestera icon used in promo bar — swap with real SVG from /public/logos/ */
function BeesteraIcon({ theme }: { theme: NavbarTheme }) {
  return <img src="/logos/beestera-icon.svg" alt="Beestera" width={24} height={24} />;
}

/** Beestera wordmark — confirmed 96.6px × 12px in Figma */
function BeesteraWordmark({ theme }: { theme: NavbarTheme }) {
  return <img src="/logos/beestera-wordmark-light.svg" alt="Beestera" width={97} height={12} style={{ display: "block" }} />;
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("w-6 h-6", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
