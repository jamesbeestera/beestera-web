"use client";

// components/layout/MegaMenu.tsx
// Figma source: MegaMenu/Desktop — Property 1=Dropdown, Property 2=About (780:35301)
//
// Structure confirmed from Figma:
//   - White rounded card (16px radius) with drop shadow
//   - Small caret/arrow at top centre pointing up toward nav bar
//   - "About" section label — gray-500, Open Sans Bold 14px
//   - Two-column grid of 6 nav items: icon + title (SemiBold 16px) + description (Regular 12px)
//   - Hex character centred at the bottom of the card
//   - Appears on hover/click of "About" nav link
//   - Animated: fades + slides in from top on open

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  /** Theme inherited from Navbar */
  theme?: "light" | "dark";
  /** Anchor element (the "About" nav link) for positioning */
  anchorRef?: React.RefObject<HTMLElement | null>;
}

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

// ─── Menu items — confirmed from Figma node 780:34465 ─────────────────────────

const leftColumnItems: MenuItem[] = [
  {
    icon: <HiveIcon />,
    title: "Our Hive",
    description: "What we represent",
    href: "/about/hive",
  },
  {
    icon: <StoryIcon />,
    title: "Our Story",
    description: "The journey so far",
    href: "/about/story",
  },
  {
    icon: <TeamIcon />,
    title: "Our Team",
    description: "The people behind the brand",
    href: "/about/team",
  },
];

const rightColumnItems: MenuItem[] = [
  {
    icon: <FoundationIcon />,
    title: "The Foundation",
    description: "Our non-profit",
    href: "/about/foundation",
  },
  {
    icon: <CareersIcon />,
    title: "Career Opportunities",
    description: "Become part of our team",
    href: "/careers",
  },
  {
    icon: <NewsIcon />,
    title: "News",
    description: "The latest inside the Hive",
    href: "/news",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MegaMenu({ isOpen, onClose, theme = "light" }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    // Small delay so the opening click doesn't immediately close
    const timeout = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
    }, 50);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-label="About Beestera"
      aria-hidden={!isOpen}
      className={cn(
        // Positioning — absolutely placed below the nav bar, centred on "About" link
        "absolute top-full left-1/2 -translate-x-1/2 z-50",
        // Figma width: 608px
        "w-[608px]",
        // Animate in/out
        "transition-all duration-200 ease-out",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      {/* ── Caret arrow pointing up ─────────────────────────────────────────
          Figma: node-780:34425 "Subtract" — small triangle/nub at top of card
          Centred on the card, sits between nav bar and the white panel
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid #ffffff",
            filter: "drop-shadow(0 -1px 1px rgba(167,174,186,0.1))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── White card ──────────────────────────────────────────────────────
          Figma: node-780:34424 "Background"
          bg: white, rounded-[16px], shadow confirmed: 0px 24px 32px 4px rgba(167,174,186,0.12)
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: "0px 24px 32px 4px rgba(167,174,186,0.12), 0px 0px 2.5px rgba(0,0,0,0.13)" }}
      >
        <div className="px-8 pt-7 pb-0">

          {/* ── Section label ────────────────────────────────────────────────
              Figma: node-780:34466 — "About", Open Sans Bold 14px, gray-500 (#71717a)
          ─────────────────────────────────────────────────────────────────── */}
          <p
            className="text-[14px] font-bold leading-[1.4] text-gray-500 mb-6"
            style={{ fontFamily: "'Open Sans', sans-serif", fontVariationSettings: "'wdth' 100" }}
          >
            About
          </p>

          {/* ── Two-column nav grid ──────────────────────────────────────────
              Figma: node-780:34467 "Products" — flex row, gap-[32px]
              Each column: flex-col, gap-[20px]
          ─────────────────────────────────────────────────────────────────── */}
          <div className="flex gap-8">

            {/* Left column */}
            <div className="flex flex-col gap-5 flex-1">
              {leftColumnItems.map((item) => (
                <MenuItemRow key={item.href} item={item} onClose={onClose} />
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 flex-1">
              {rightColumnItems.map((item) => (
                <MenuItemRow key={item.href} item={item} onClose={onClose} />
              ))}
            </div>

          </div>
        </div>

        {/* ── Hex character ────────────────────────────────────────────────────
            Figma: node-780:35299 "Hex/Outline" — 142px × 96px, centred at bottom
            Using the hex-happy.riv Rive animation if available, fallback to SVG
        ─────────────────────────────────────────────────────────────────────── */}
        <div className="flex items-end justify-center mt-4 h-24 overflow-hidden">
          <HexCharacter />
        </div>

      </div>
    </div>
  );
}

// ─── Menu Item Row ────────────────────────────────────────────────────────────
// Figma: each item is: icon (24px) + flex-col (title SemiBold 16px + desc Regular 12px)
// Confirmed: gap-[16px] between icon and text, gap-[2px] between title and desc

function MenuItemRow({ item, onClose }: { item: MenuItem; onClose: () => void; key?: string }) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={cn(
        "flex items-start gap-4 group",
        "rounded-lg p-2 -m-2", // hit area padding — negative margin keeps alignment
        "transition-colors duration-150",
        "hover:bg-gray-50 focus-visible:bg-gray-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      )}
    >
      {/* Icon — 24×24, confirmed from Figma */}
      <div className="shrink-0 w-6 h-6 mt-0.5 text-gray-600 group-hover:text-hiveBlack transition-colors">
        {item.icon}
      </div>

      {/* Title + Description */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span
          className="text-[16px] font-semibold leading-[1.5] text-text-primary group-hover:text-hiveBlack transition-colors"
          style={{ fontFamily: "'Open Sans', sans-serif", fontVariationSettings: "'wdth' 100" }}
        >
          {item.title}
        </span>
        <span
          className="text-[12px] font-normal leading-[1.45] text-gray-600"
          style={{ fontFamily: "'Open Sans', sans-serif", fontVariationSettings: "'wdth' 100" }}
        >
          {item.description}
        </span>
      </div>
    </Link>
  );
}

// ─── Hex Character ────────────────────────────────────────────────────────────
// Figma: Hex sits at the bottom of the megamenu — 142×96px bounding box
// We use the Rive animation if the @rive-app/react-canvas package is available,
// with a static SVG fallback for SSR/no-JS

function HexCharacter() {
  // Static SVG Hex — simplified outline version matching Figma "Hex/Outline" asset
  // The full Rive animation (hex-happy.riv) can be swapped in on the client
  return (
    <svg
      width="142"
      height="96"
      viewBox="0 0 142 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wings — behind body */}
      <ellipse cx="38" cy="54" rx="18" ry="26" fill="white" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-18 38 54)" />
      <ellipse cx="104" cy="54" rx="18" ry="26" fill="white" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" transform="rotate(18 104 54)" />

      {/* Body */}
      <ellipse cx="71" cy="68" rx="26" ry="24" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Body belly */}
      <ellipse cx="71" cy="70" rx="16" ry="16" fill="white" fillOpacity="0.5" />
      {/* Body stripes */}
      <rect x="45" y="64" width="52" height="7" fill="#1a1a1a" fillOpacity="0.14" />
      <rect x="45" y="76" width="52" height="7" fill="#1a1a1a" fillOpacity="0.14" />

      {/* Stinger */}
      <polygon points="71,90 66,84 76,84" fill="#C17D00" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Arms up */}
      <rect x="37" y="58" width="8" height="20" rx="4" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2" transform="rotate(35 37 58)" />
      <rect x="97" y="56" width="8" height="20" rx="4" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-35 97 56)" />

      {/* Head */}
      <circle cx="71" cy="36" r="22" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2.5" />

      {/* Eyes */}
      <ellipse cx="63" cy="32" rx="4" ry="5" fill="#1a1a1a" />
      <ellipse cx="79" cy="32" rx="4" ry="5" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="64" cy="31" r="1.5" fill="white" />
      <circle cx="80" cy="31" r="1.5" fill="white" />

      {/* Smile */}
      <rect x="63" y="43" width="16" height="3.5" rx="2" fill="#1a1a1a" />

      {/* Blush */}
      <ellipse cx="57" cy="39" rx="6" ry="3.5" fill="#FF7A1A" fillOpacity="0.28" />
      <ellipse cx="85" cy="39" rx="6" ry="3.5" fill="#FF7A1A" fillOpacity="0.28" />

      {/* Antennae */}
      <line x1="64" y1="15" x2="57" y2="4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="56" cy="3" r="3.5" fill="#1a1a1a" />
      <line x1="78" y1="15" x2="85" y2="4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="86" cy="3" r="3.5" fill="#1a1a1a" />

      {/* Mini football */}
      <ellipse cx="112" cy="48" rx="8" ry="8" fill="#945C1A" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="107" y1="48" x2="117" y2="48" stroke="white" strokeWidth="1.5" />
      <line x1="112" y1="43" x2="112" y2="53" stroke="white" strokeWidth="1" />

      {/* Sparkles */}
      <path d="M25 18 L26.5 14 L28 18 L32 19.5 L28 21 L26.5 25 L25 21 L21 19.5 Z" fill="#FFD300" />
      <path d="M117 20 L118 17 L119 20 L122 21 L119 22 L118 25 L117 22 L114 21 Z" fill="#FFD300" />
    </svg>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
// Matching the Figma icon set — using existing design system icons where possible

function HiveIcon() {
  // Matches Icon/FullCell/Active — hexagonal cell icon (brand yellow)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L19.5 6.5V15.5L12 20L4.5 15.5V6.5L12 2Z" fill="#FFD300" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

function StoryIcon() {
  // Matches Icon/Leaderboard — ladder/scroll style
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3" />
      <circle cx="15" cy="7" r="3" />
      <path d="M3 19c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" />
    </svg>
  );
}

function FoundationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CareersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 22h16a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v17" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <rect x="8" y="13" width="8" height="2" rx="1" fill="currentColor" stroke="none" />
      <rect x="8" y="17" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
