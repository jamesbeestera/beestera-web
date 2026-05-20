import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Confirmed from Figma design system:
// Primary font: Open Sans (all UI text — nav, footer, body, buttons)
// Weights confirmed: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
// Note: design system also uses Inter for country/legal text — loaded below

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Beestera — Soccer Camps & Training for Kids",
    template: "%s | Beestera",
  },
  description:
    "Discover soccer camps, training programs, and clubs for kids. Find a Beestera program near you.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beestera.com",
    siteName: "Beestera",
    title: "Beestera — Soccer Camps & Training for Kids",
    description: "Discover soccer camps, training programs, and clubs for kids.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beestera — Soccer Camps & Training for Kids",
    description: "Discover soccer camps, training programs, and clubs for kids.",
  },
  icons: {
    icon: "/icons/favicon.ico",
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
