"use client";

// components/layout/MegaMenu.tsx
// Figma source: MegaMenu/Desktop — Property 1=Dropdown, Property 2=About (780:35301)

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: "light" | "dark";
  anchorRef?: React.RefObject<HTMLElement | null>;
}

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const leftColumnItems: MenuItem[] = [
  { icon: <HiveIcon />, title: "Our Hive", description: "What we represent", href: "/about/hive" },
  { icon: <StoryIcon />, title: "Our Story", description: "The journey so far", href: "/about/story" },
  { icon: <TeamIcon />, title: "Our Team", description: "The people behind the brand", href: "/about/team" },
];

const rightColumnItems: MenuItem[] = [
  { icon: <FoundationIcon />, title: "The Foundation", description: "Our non-profit", href: "/about/foundation" },
  { icon: <CareersIcon />, title: "Career Opportunities", description: "Become part of our team", href: "/careers" },
  { icon: <NewsIcon />, title: "News", description: "The latest inside the Hive", href: "/news" },
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    }
    const timeout = setTimeout(() => document.addEventListener("mousedown", handleClick), 50);
    return () => { clearTimeout(timeout); document.removeEventListener("mousedown", handleClick); };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
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
        "absolute top-full left-1/2 -translate-x-1/2 z-50 w-[608px]",
        "transition-all duration-200 ease-out",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="flex justify-center">
        <div className="w-0 h-0" style={{ borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "10px solid #ffffff", filter: "drop-shadow(0 -1px 1px rgba(167,174,186,0.1))" }} aria-hidden="true" />
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0px 24px 32px 4px rgba(167,174,186,0.12), 0px 0px 2.5px rgba(0,0,0,0.13)" }}>
        <div className="px-8 pt-7 pb-0">
          <p className="text-[14px] font-bold leading-[1.4] text-gray-500 mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            About
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-5 flex-1">
              {leftColumnItems.map((item) => <MenuItemRow key={item.href} item={item} onClose={onClose} />)}
            </div>
            <div className="flex flex-col gap-5 flex-1">
              {rightColumnItems.map((item) => <MenuItemRow key={item.href} item={item} onClose={onClose} />)}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center mt-4 h-24 overflow-hidden">
          <HexCharacter />
        </div>
      </div>
    </div>
  );
}

function MenuItemRow({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <Link href={item.href} onClick={onClose} className={cn("flex items-start gap-4 group rounded-lg p-2 -m-2 transition-colors duration-150 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500")}>
      <div className="shrink-0 w-6 h-6 mt-0.5">{item.icon}</div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[16px] font-semibold leading-[1.5] text-gray-900" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.title}</span>
        <span className="text-[12px] font-normal leading-[1.45] text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.description}</span>
      </div>
    </Link>
  );
}

function HexCharacter() {
  return (
    <svg width="142" height="96" viewBox="0 0 142 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="38" cy="54" rx="18" ry="26" fill="white" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-18 38 54)" />
      <ellipse cx="104" cy="54" rx="18" ry="26" fill="white" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" transform="rotate(18 104 54)" />
      <ellipse cx="71" cy="68" rx="26" ry="24" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2.5" />
      <ellipse cx="71" cy="70" rx="16" ry="16" fill="white" fillOpacity="0.5" />
      <rect x="45" y="64" width="52" height="7" fill="#1a1a1a" fillOpacity="0.14" />
      <rect x="45" y="76" width="52" height="7" fill="#1a1a1a" fillOpacity="0.14" />
      <polygon points="71,90 66,84 76,84" fill="#C17D00" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="37" y="58" width="8" height="20" rx="4" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2" transform="rotate(35 37 58)" />
      <rect x="97" y="56" width="8" height="20" rx="4" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-35 97 56)" />
      <circle cx="71" cy="36" r="22" fill="#FFD300" stroke="#1a1a1a" strokeWidth="2.5" />
      <ellipse cx="63" cy="32" rx="4" ry="5" fill="#1a1a1a" />
      <ellipse cx="79" cy="32" rx="4" ry="5" fill="#1a1a1a" />
      <circle cx="64" cy="31" r="1.5" fill="white" />
      <circle cx="80" cy="31" r="1.5" fill="white" />
      <rect x="63" y="43" width="16" height="3.5" rx="2" fill="#1a1a1a" />
      <ellipse cx="57" cy="39" rx="6" ry="3.5" fill="#FF7A1A" fillOpacity="0.28" />
      <ellipse cx="85" cy="39" rx="6" ry="3.5" fill="#FF7A1A" fillOpacity="0.28" />
      <line x1="64" y1="15" x2="57" y2="4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="56" cy="3" r="3.5" fill="#1a1a1a" />
      <line x1="78" y1="15" x2="85" y2="4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="86" cy="3" r="3.5" fill="#1a1a1a" />
      <ellipse cx="112" cy="48" rx="8" ry="8" fill="#945C1A" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="107" y1="48" x2="117" y2="48" stroke="white" strokeWidth="1.5" />
      <line x1="112" y1="43" x2="112" y2="53" stroke="white" strokeWidth="1" />
      <path d="M25 18 L26.5 14 L28 18 L32 19.5 L28 21 L26.5 25 L25 21 L21 19.5 Z" fill="#FFD300" />
      <path d="M117 20 L118 17 L119 20 L122 21 L119 22 L118 25 L117 22 L114 21 Z" fill="#FFD300" />
    </svg>
  );
}

function HiveIcon() {
  return <img src="/icons/honey-cell-icon.svg" alt="" width={24} height={24} aria-hidden="true" />;
}

function StoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3" /><circle cx="15" cy="7" r="3" /><path d="M3 19c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" />
    </svg>
  );
}

function FoundationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CareersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 22h16a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v17" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><rect x="8" y="13" width="8" height="2" rx="1" fill="currentColor" stroke="none" /><rect x="8" y="17" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
