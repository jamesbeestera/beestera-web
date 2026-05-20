import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
