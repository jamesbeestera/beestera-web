"use client";

// components/layout/Footer.tsx
// Figma source: Footer — Breakpoint=Desktop, Theme=Light (node 880:2154)
//
// Confirmed structure from Figma:
//   ┌─────────────────────────────────────────────────────┐
//   │  Site Map (529px)                                    │
//   │  ┌────────────────────────────┐  ┌────────────────┐ │
//   │  │ 4 nav columns (80px gaps) │  │ Newsletter form │ │
//   │  │  About · Camps ·          │  │ + Contact info  │ │
//   │  │  Company · Support        │  │ + Social icons  │ │
//   │  └────────────────────────────┘  └────────────────┘ │
//   │  Bottom-left: "Get the Beestera App" + badges        │
//   ├─────────────────────────────────────────────────────┤
//   │  Legal bar (125px) — bg #f4f4f5                      │
//   │  Country/flag  |  Legal links  |  Copyright text     │
//   └─────────────────────────────────────────────────────┘
//
// Colors (Light theme confirmed):
//   bg: white (#ffffff)
//   headings: #181a1d (Color/Text/Primary)
//   links: #71717a (Color/Text/Secondary)
//   legal bar bg: #f4f4f5 (Color/Surface/Tertiary)
//   divider: rgba(101,102,106,0.3)
//   CTA button: black bg, white text (dark variant)
//   submit button: black bg (confirmed from Figma "black Submit btn · #f4f4f5 legal bar")

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { footerGroups, legalLinks, socialLinks, contactInfo } from "@/data/navigation";

export type FooterTheme = "light" | "dark";

interface FooterProps {
  /** Maps to Figma: Theme=Light / Theme=Dark */
  theme?: FooterTheme;
  className?: string;
}

export default function Footer({ theme = "light", className }: FooterProps) {
  const [email, setEmail] = useState("");
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className={cn(
        "w-full flex flex-col",
        isDark ? "bg-black" : "bg-white",
        className
      )}
    >
      {/* ── Site Map (529px) ──────────────────────────────────────────────── */}
      <div className="w-full pt-[50px] pb-0 relative">
        <div className="mx-auto max-w-[1440px] px-[50px]">

          {/* Main content grid: nav columns left, subscribe right */}
          {/* Figma: 1340px inner width, split at ~954px left edge for subscribe */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 pb-12">

            {/* Left: 4 nav columns with 80px gaps */}
            {/* Figma: node-880_2206, gap-[80px] between columns */}
            <div className="flex flex-wrap gap-x-20 gap-y-10 flex-1 min-w-0">
              {footerGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-[18px] min-w-[100px]">
                  {/* Column heading — Open Sans SemiBold 14px, #181a1d */}
                  <p
                    className={cn(
                      "text-[14px] font-semibold leading-[1.4] whitespace-nowrap",
                      "font-['Open_Sans',sans-serif]",
                      isDark ? "text-white" : "text-[#181a1d]"
                    )}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {group.label}
                  </p>

                  {/* Links — Open Sans Regular 14px, #71717a */}
                  <ul className="flex flex-col gap-[5px]">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-[14px] font-normal leading-[1.45] block",
                            "font-['Open_Sans',sans-serif]",
                            isDark
                              ? "text-[#d4d4d8] hover:text-white"
                              : "text-[#71717a] hover:text-[#181a1d]",
                            "transition-colors"
                          )}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: Newsletter + Contact + Social */}
            {/* Figma: node-880_2180, node-880_2181 */}
            <div className="flex flex-col gap-0 w-full lg:w-[386px] lg:shrink-0">

              {/* Newsletter form */}
              {/* Figma: "Sign up to get the latest News" — Open Sans Bold 14px */}
              <div className="flex flex-col gap-4">
                <p
                  className={cn(
                    "text-[14px] font-bold leading-[14px]",
                    "font-['Open_Sans',sans-serif]",
                    isDark ? "text-white" : "text-[#181a1d]"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Sign up to get the latest News
                </p>

                {/* Input row */}
                <div className="flex items-center gap-3 py-2">
                  {/* Email input — border border-[#a1a1aa] rounded-[12px] h-[44px] */}
                  <div className="relative flex-1 max-w-[273px]">
                    <input
                      type="email"
                      placeholder="Your Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "w-full h-[44px] border border-[#a1a1aa] rounded-[12px]",
                        "px-4 text-[13px] font-normal outline-none",
                        "font-['Open_Sans',sans-serif]",
                        "placeholder:text-[#71717a]",
                        isDark
                          ? "bg-[#1a1a1a] text-white border-[#52525b]"
                          : "bg-white text-[#181a1d]",
                        "focus:border-[#181a1d] transition-colors"
                      )}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>

                  {/* Submit button */}
                  {/* Figma Light: black bg confirmed ("black Submit btn") */}
                  {/* Figma Dark: yellow gradient btn */}
                  <button
                    type="submit"
                    className={cn(
                      "h-[36px] px-5 rounded-[18px] flex items-center justify-center shrink-0",
                      "text-[14px] font-bold leading-[1.2] whitespace-nowrap",
                      "font-['Open_Sans',sans-serif]",
                      "transition-opacity hover:opacity-80",
                      isDark
                        ? "bg-gradient-to-b from-[#ffd700] to-[#ffbb00] text-black"
                        : "bg-black text-white"
                    )}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Submit
                  </button>
                </div>

                {/* Consent text */}
                <p
                  className={cn(
                    "text-[12px] font-normal leading-[1.45] max-w-[378px]",
                    "font-['Open_Sans',sans-serif]",
                    isDark ? "text-[#d4d4d8]" : "text-black"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  By providing your email address, you agree to receive marketing
                  communications from Beestera.
                  <br /><br />
                  For more about how we use your information, see our{" "}
                  <Link href="/legal/privacy" className="underline hover:no-underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* Contact info — confirmed phone: 1-518-364-6887 */}
              {/* Figma: node-880_2181, Open Sans Bold 14px */}
              <div className="flex flex-col gap-[25px] mt-[54px]">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className={cn(
                    "flex items-center gap-[10px] text-[14px] font-bold leading-[1.4]",
                    "font-['Open_Sans',sans-serif]",
                    isDark ? "text-white hover:text-[#d4d4d8]" : "text-[#181a1d] hover:text-[#71717a]",
                    "transition-colors group"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <PhoneIcon className={cn("w-[18px] h-[16px] shrink-0", isDark ? "text-white" : "text-[#181a1d]")} />
                  {contactInfo.phone}
                </a>

                <Link
                  href={contactInfo.supportHref}
                  className={cn(
                    "flex items-center gap-[10px] text-[14px] font-bold leading-[1.4]",
                    "font-['Open_Sans',sans-serif]",
                    isDark ? "text-white hover:text-[#d4d4d8]" : "text-[#181a1d] hover:text-[#71717a]",
                    "transition-colors"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <SupportIcon className={cn("w-[18px] h-[16px] shrink-0", isDark ? "text-white" : "text-[#181a1d]")} />
                  Visit Support Center
                </Link>

                {/* Social icons — 30px circles with gap-[15px] */}
                {/* Figma: node-880_2191, 3 social icon circles */}
                <div className="flex items-center gap-[15px] pb-1.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={cn(
                        "w-[30px] h-[30px] rounded-full flex items-center justify-center",
                        "transition-opacity hover:opacity-70",
                        isDark
                          ? "bg-[#27272a] text-white"
                          : "bg-[#e4e4e7] text-[#181a1d]"
                      )}
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* App Download links */}
          {/* Figma: node-880_2156, bottom-left of site map section */}
          <div className="flex flex-col gap-3 pb-10">
            <p
              className={cn(
                "text-[18px] font-semibold leading-[1.5]",
                "font-['Open_Sans',sans-serif]",
                isDark ? "text-white" : "text-[#181a1d]"
              )}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Get the Beestera App
            </p>
            <div className="flex items-center gap-3">
              {/* Apple App Store badge — 135×40px confirmed from Figma */}
              {/* TODO: Replace with real badge from /public/images/badge-app-store.png */}
              <AppStoreBadge />
              {/* Google Play badge — 135×40px confirmed from Figma */}
              {/* TODO: Replace with real badge from /public/images/badge-google-play.png */}
              <GooglePlayBadge isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Legal Bar (125px) ─────────────────────────────────────────────── */}
      {/* Figma: node-880_2240, bg #f4f4f5 (light) / #181818 (dark) */}
      <div
        className={cn(
          "h-[125px] w-full relative shrink-0",
          isDark ? "bg-[#181818]" : "bg-[#f4f4f5]"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-5 h-full flex flex-col justify-between">

          {/* Divider — confirmed from Figma: rgba(101,102,106,0.3), top at 57px */}
          <div className="h-px w-full mt-[57px] bg-[rgba(101,102,106,0.3)]" />

          {/* Bottom row — legal links left, copyright right */}
          {/* Figma: legal links at ~top-[90px], copyright at right ~left-[885px] */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 gap-3">
            {/* Legal links */}
            <nav aria-label="Legal links" className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[12px] font-normal leading-[1.45]",
                    "font-['Open_Sans',sans-serif]",
                    isDark ? "text-[#d4d4d8] hover:text-white" : "text-[#181a1d] hover:text-black",
                    "transition-colors"
                  )}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Copyright — confirmed text from Figma node-880_2241 */}
            <p
              className={cn(
                "text-[12px] font-normal leading-[1.45] whitespace-nowrap",
                "font-['Open_Sans',sans-serif]",
                isDark ? "text-[#d4d4d8]" : "text-[#181a1d]"
              )}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              © Beestera 2015–{currentYear}, Beestera Soccer Training, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App Store Badges ─────────────────────────────────────────────────────────
// Placeholder until real badge PNGs are exported from Figma
// Figma: node-880_2159 (Apple, 135×40) and node-880_2167 (Google, 135×40)

function AppStoreBadge() {
  return <img src="/images/badge-app-store.png" alt="Download on the App Store" width={135} height={40} style={{ display: "block" }} />;
}

function GooglePlayBadge({ isDark }: { isDark: boolean }) {
  return <img src="/images/badge-google-play.png" alt="Get it on Google Play" width={135} height={40} style={{ display: "block" }} />;
}

// ─── Icon stubs ───────────────────────────────────────────────────────────────

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 2a1 1 0 011-1h3.5l1.5 3.5-2 1a11 11 0 005 5l1-2 3.5 1.5V13a1 1 0 01-1 1C5 14 1 9 1 2z"/>
    </svg>
  );
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="7"/>
      <path d="M9 5a2 2 0 011.73 3c-.4.65-1.73 1.5-1.73 2.5M9 13h.01"/>
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      );
    case "facebook":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      );
    case "youtube":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
        </svg>
      );
    default:
      return <span className="w-3.5 h-3.5 block rounded bg-current opacity-40" />;
  }
}
