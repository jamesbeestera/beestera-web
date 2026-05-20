# Beestera Web

Next.js 15 website for Beestera — sports camps, training programs, and clubs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Firebase *(not yet connected — future)*

---

## Project Structure

```
/app
  page.tsx          ← Homepage shell
  layout.tsx        ← Root layout (fonts, metadata)
  globals.css       ← Base styles + CSS variables

/components
  /layout
    Navbar.tsx      ← Figma: NavBar/Desktop (Light & Dark)
    Footer.tsx      ← Figma: Web/Desktop/Footer/Light

/data
  navigation.ts     ← All nav links and footer groups

/lib
  cn.ts             ← Tailwind class merge utility

/public
  /logos            ← Logo SVG files (add from Figma export)
  /images           ← Page images
  /icons            ← Favicon, app icons
```

---

## Figma → React Component Map

| Figma Component Name            | React Component              | Theme Prop   |
|---------------------------------|------------------------------|--------------|
| NavBar/Desktop — Light instance | `<Navbar theme="light" />`   | `"light"`    |
| NavBar/Desktop — Dark instance  | `<Navbar theme="dark" />`    | `"dark"`     |
| Web/Desktop/Footer/Light        | `<Footer theme="light" />`   | `"light"`    |

> **Note**: Figma is the visual source of truth. When Figma components are updated, the corresponding React component must also be updated in code and pushed to GitHub for Vercel to deploy the change.

---

## Design Tokens

All design tokens live in `tailwind.config.ts`. Values marked `[FIGMA: confirm]` are placeholders that need to be verified against Figma Local Variables before going to production.

### Colors

| Token         | Value (placeholder)  | Figma variable        |
|---------------|----------------------|-----------------------|
| `honey`       | `#F5A623`            | [FIGMA: confirm]      |
| `honey.light` | `#FFCB5C`            | [FIGMA: confirm]      |
| `honey.dark`  | `#D4880A`            | [FIGMA: confirm]      |
| `hiveBlack`   | `#1A1A1A`            | [FIGMA: confirm]      |
| `cream`       | `#FFFDF5`            | [FIGMA: confirm]      |
| `cream.mid`   | `#F5F0E8`            | [FIGMA: confirm]      |
| `muted`       | `#6B6B6B`            | [FIGMA: confirm]      |
| `border`      | `#E8E2D6`            | [FIGMA: confirm]      |

### Fonts

| Role      | Placeholder          | Confirm in Figma             |
|-----------|----------------------|------------------------------|
| Display   | Playfair Display     | [FIGMA: confirm font family] |
| Body      | DM Sans              | [FIGMA: confirm font family] |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### First deployment

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: homepage shell — Navbar, Footer, layout foundation"
   git remote add origin https://github.com/YOUR_ORG/beestera-web.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**

3. Import the GitHub repo

4. Vercel auto-detects Next.js — no build settings needed

5. Click **Deploy**

6. Your site is live at `https://beestera-web.vercel.app`

### Custom domain

In Vercel dashboard → **Settings → Domains** → add `beestera.com`

### Subsequent deployments

Every push to `main` triggers an automatic Vercel deployment.
Pull requests get preview deployments automatically.

---

## Environment Variables

```bash
# .env.local (never commit this file)

# Firebase — add when Firebase is connected
# NEXT_PUBLIC_FIREBASE_API_KEY=
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
# NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
# NEXT_PUBLIC_FIREBASE_APP_ID=
```

Add env variables to Vercel via **Settings → Environment Variables**.

---

## What's Next

### Immediate
- [ ] Confirm design tokens with Figma (colors, fonts, spacing)
- [ ] Export and add Beestera logo SVG to `/public/logos/`
- [ ] Add favicon to `/public/icons/`

### Responsive (tablet + mobile)
- [ ] Navbar: add hamburger button + slide-out drawer for mobile
- [ ] Navbar: add condensed layout for tablet (768px–1023px)
- [ ] Footer: 2-column grid for tablet, stacked for mobile

### Homepage sections (next phase)
- [ ] Hero section
- [ ] Programs / Camps section
- [ ] App feature section
- [ ] Testimonials
- [ ] Final CTA section

### Later
- [ ] Connect Firebase (auth, Firestore)
- [ ] Camp registration flow
- [ ] Payment integration
- [ ] Admin dashboard
