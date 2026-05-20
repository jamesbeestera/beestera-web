import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better DX and catching issues early
  reactStrictMode: true,

  // Image optimization — add allowed external domains here when needed
  images: {
    remotePatterns: [
      // e.g.: { protocol: "https", hostname: "cdn.beestera.com" }
    ],
  },
};

export default nextConfig;
