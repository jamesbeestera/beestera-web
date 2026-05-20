// /data/navigation.ts
// Single source of truth for all navigation links.
// Confirmed from Figma NavBar/Desktop (nodes 780:36359 / 780:34551) and Footer (node 880:2154)

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FooterGroup {
  label: string;
  links: { label: string; href: string }[];
}

// ─── Promo Bar Links (top strip) ──────────────────────────────────────────────
// Confirmed from Figma: NavBar has a 36px promo bar with "Find a Camp | Help | Join Us | Sign In"
export const promoBarLinks = [
  { label: "Find a Camp", href: "/camps" },
  { label: "Help",        href: "/help"  },
  { label: "Join Us",     href: "/join"  },
  { label: "Sign In",     href: "/login" },
];

// ─── Primary Nav Links ────────────────────────────────────────────────────────
// Confirmed from Figma: "Home · About · In-Person · Camps · Shop · App"
export const primaryNavLinks: NavLink[] = [
  { label: "Home",       href: "/"          },
  { label: "About",      href: "/about"     },
  { label: "In-Person",  href: "/in-person" },
  { label: "Camps",      href: "/camps"     },
  { label: "Shop",       href: "/shop"      },
  { label: "App",        href: "/app"       },
];

// ─── Footer Groups ────────────────────────────────────────────────────────────
// Confirmed from Figma: Footer node 880:2154 — 4 columns with exact link text
export const footerGroups: FooterGroup[] = [
  {
    label: "About Beestera",
    links: [
      { label: "Our Story",          href: "/about"         },
      { label: "Team",               href: "/about/team"    },
      { label: "Our Hive",           href: "/hive"          },
      { label: "Careers",            href: "/careers"       },
      { label: "News",               href: "/news"          },
      { label: "Contact Us",         href: "/contact"       },
      { label: "The Foundation",     href: "/foundation"    },
      { label: "Our Spotify Playlist", href: "/playlist"   },
    ],
  },
  {
    label: "Camps",
    links: [
      { label: "Camp Locator",       href: "/camps/locator"       },
      { label: "Day Camps",          href: "/camps/day"           },
      { label: "Residential Camps",  href: "/camps/residential"   },
      { label: "Become a Host Family", href: "/camps/host-family" },
      { label: "Reviews",            href: "/camps/reviews"       },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Accessibility",      href: "/legal/accessibility" },
      { label: "Cookie Notice",      href: "/legal/cookies"       },
      { label: "Copyright",          href: "/legal/copyright"     },
      { label: "Privacy Policy",     href: "/legal/privacy"       },
      { label: "App Terms",          href: "/legal/app-terms"     },
      { label: "Terms of Use",       href: "/legal/terms"         },
    ],
  },
  {
    label: "Support",
    links: [
      { label: "Contact Beestera",   href: "/contact" },
      { label: "Support Center",     href: "/support"  },
    ],
  },
];

// ─── Legal Bar Links ──────────────────────────────────────────────────────────
// Confirmed from Figma: footer legal bar left side links
export const legalLinks = [
  { label: "Privacy Policy",   href: "/legal/privacy"      },
  { label: "Terms of Service", href: "/legal/terms"         },
  { label: "Membership Terms", href: "/legal/membership"    },
  { label: "IP Policy",        href: "/legal/ip"            },
  { label: "Cookie Settings",  href: "/legal/cookies"       },
  { label: "Accessibility",    href: "/legal/accessibility"  },
];

// ─── Contact Info ─────────────────────────────────────────────────────────────
// Confirmed from Figma: footer contact section (node 880:2181)
export const contactInfo = {
  phone: "1-518-364-6887",
  supportHref: "/support",
};

// ─── Social Links ─────────────────────────────────────────────────────────────
// Confirmed from Figma: footer shows 3 social icon circles (30px each)
// Exact platforms to confirm from icon assets — using 3 circles visible in design
export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/beestera",  icon: "instagram" },
  { label: "Facebook",  href: "https://facebook.com/beestera",   icon: "facebook"  },
  { label: "YouTube",   href: "https://youtube.com/@beestera",   icon: "youtube"   },
];
