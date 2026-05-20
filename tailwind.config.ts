import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Beestera Design System — Color Tokens ────────────────────────────
        // Source: Figma › Beestera Design System › 00 · Foundations & Tokens
        // Variable collection: Color/Yellow, Color/Gray, Color/Surface, Color/Text, Color/Border, Color/Brand

        // Raw Yellow scale (Color/Yellow/*)
        yellow: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#ffd700", // Yellow/400 — light mode brand hover
          500: "#ffbb00", // Yellow/500 — Color/Brand/Primary (the brand yellow)
          600: "#f59e0b", // Yellow/600 — hover on light
          700: "#d97706",
          800: "#92400e",
          900: "#78350f",
        },

        // Raw Gray scale — Tailwind Zinc values confirmed in design system
        gray: {
          50:  "#fafafa", // Color/Surface/Secondary (light)
          100: "#f4f4f5", // Color/Surface/Tertiary (light)
          200: "#e4e4e7", // Color/Border/Subtle (light)
          300: "#d4d4d8", // Color/Border/Default (light)
          400: "#a1a1aa", // Color/Text/Tertiary (light) / placeholder text
          500: "#71717a", // Color/Text/Secondary (light)
          600: "#52525b",
          700: "#3f3f46", // Color/Border/Strong (dark)
          800: "#27272a", // Color/Surface/Secondary (dark)
          900: "#18181b", // Color/Surface/Primary (dark) / primary dark text
        },

        // Semantic aliases — always use these, never raw tokens
        surface: {
          primary:   "#ffffff",       // Color/Surface/Primary (light)
          secondary: "#fafafa",       // Color/Surface/Secondary (light)
          tertiary:  "#f4f4f5",       // Color/Surface/Tertiary (light)
          inverse:   "#18181b",       // Color/Surface/Inverse (dark CTA on light)
        },

        text: {
          primary:   "#181a1d",       // Color/Text/Primary (headings, body) — confirmed from Figma nodes
          secondary: "#71717a",       // Color/Text/Secondary — nav links, footer links
          tertiary:  "#a1a1aa",       // Color/Text/Tertiary — disabled, hints
          onYellow:  "#000000",       // Color/Text/OnYellow — text on brand bg
          onInverse: "#ffffff",       // Color/Text/OnInverse — text on dark bg
        },

        border: {
          subtle:   "#e4e4e7",        // Color/Border/Subtle — dividers
          default:  "#d4d4d8",        // Color/Border/Default — card borders
          strong:   "#a1a1aa",        // Color/Border/Strong — inputs, focus
        },

        brand: {
          primary:        "#ffbb00",  // Color/Brand/Primary — the brand yellow
          primaryHover:   "#ffd700",  // Color/Brand/PrimaryHover
          primarySubtle:  "#fef9c3",  // Color/Brand/PrimarySubtle — tinted bg
          // gradient is: from-[#ffbb00] to-[#ffd700] (linear, confirmed from Figma button/top bar)
        },

        // Legacy semantic names kept for backward compat with existing components
        honey: {
          DEFAULT: "#ffbb00",
          light:   "#ffd700",
          dark:    "#f59e0b",
        },
        hiveBlack: {
          DEFAULT: "#181a1d",
          soft:    "#27272a",
        },
        cream: {
          DEFAULT: "#ffffff",
          mid:     "#f4f4f5",
        },
        muted: {
          DEFAULT: "#71717a",
          light:   "#a1a1aa",
        },
      },

      fontFamily: {
        // Confirmed from Figma: Open Sans is the primary web font
        // Used across all nav, footer, body, and UI text
        body:    ["'Open Sans'", "system-ui", "sans-serif"],
        display: ["'Open Sans'", "system-ui", "sans-serif"], // Same family, display uses Bold/ExtraBold
        // Inter used for legal/country text (confirmed from node-880:2251)
        mono:    ["'Inter'", "monospace"],
      },

      fontWeight: {
        // Confirmed Open Sans weights used in Figma
        normal:     "400",
        semibold:   "600",
        bold:       "700",
        extrabold:  "800",
      },

      fontSize: {
        // Confirmed from Figma design system typography documentation
        // Desktop scale (10 styles)
        "xs":           ["12px", { lineHeight: "1.45" }],  // Desktop/small
        "sm":           ["13px", { lineHeight: "1.4"  }],  // Tablet/meta
        "base":         ["14px", { lineHeight: "1.45" }],  // Desktop/stat, footer links
        "nav-link":     ["18px", { lineHeight: "1.5", fontWeight: "600" }], // Desktop/body-medium
        "footer-label": ["14px", { lineHeight: "1.4", fontWeight: "700" }], // Desktop/stat
        "footer-link":  ["14px", { lineHeight: "1.45" }],
        "legal":        ["12px", { lineHeight: "1.45" }],  // Desktop/small
      },

      spacing: {
        // Confirmed from Figma: 4px base scale
        // Spacing/1=4 /2=8 /3=12 /4=16 /5=20 /6=24 /8=32 /10=40 /12=48 /16=64 /20=80 /24=96
        "nav-h":     "96px",  // Confirmed: 36px promo bar + 60px main nav = 96px total
        "nav-main":  "60px",  // Main nav bar height (confirmed from node-779:33955 h-[60px])
        "nav-promo": "36px",  // Top promo bar height (confirmed from node-779_33985 h-[36px])
      },

      borderRadius: {
        // Confirmed from Figma: Radius tokens
        sm:   "6px",
        md:   "10px",
        lg:   "14px",
        xl:   "20px",
        "2xl":"28px",
        full: "9999px",
        // Specific usages confirmed
        btn:    "100px", // Buttons use rounded-[100px]
        input:  "12px",  // Inputs use rounded-[12px]
        badge:  "18px",  // CTA buttons use rounded-[18px]
      },

      maxWidth: {
        site: "1440px", // Confirmed: NavBar width is 1440px
        content: "1340px", // Inner content max-width (confirmed from footer Site Map frame)
      },

      boxShadow: {
        // Confirmed from design system: effect styles
        sm:  "0 1px 2px 0 rgba(24,24,27,0.05)",
        md:  "0 4px 6px -1px rgba(24,24,27,0.1), 0 2px 4px -1px rgba(24,24,27,0.06)",
        lg:  "0 10px 15px -3px rgba(24,24,27,0.1), 0 4px 6px -2px rgba(24,24,27,0.05)",
        yellow: "0 0 0 3px rgba(255,187,0,0.4)", // glow/yellow
      },
    },
  },
  plugins: [],
};

export default config;
