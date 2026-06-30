# Samyoga Studio — Next.js Website

A premium one-page landing site for Samyoga Studio, a yoga and pilates studio in Hyderabad. Built with Next.js 14, TypeScript, and CSS Modules.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** for scoped, component-level styling
- **next/font** for self-hosted Google Fonts (Fraunces + DM Sans)
- **next/image** for the logo assets

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx       — Root layout, fonts, metadata
    page.tsx          — Assembles all sections
    globals.css        — CSS variables, resets
  components/
    Nav.tsx / .module.css            — Sticky nav + mobile menu
    Hero.tsx / .module.css           — Hero with text-only parallax
    About.tsx / .module.css          — About Samyoga
    MeetSrimalini.tsx / .module.css  — Teacher bio + parallax photo
    WhySamyoga.tsx / .module.css     — 6-point feature grid
    Classes.tsx / .module.css        — Yoga / Pilates / Combo cards
    Timings.tsx / .module.css        — Class time slots
    Memberships.tsx / .module.css    — Tabbed pricing
    ComeAsYouAre.tsx / .module.css   — Parallax CTA section
    Visit.tsx / .module.css          — Location, contact, map
    FinalCTA.tsx / .module.css       — Closing CTA
    Footer.tsx / .module.css         — Footer
    FadeIn.tsx / .module.css         — Reusable scroll fade-up wrapper

public/
  images/
    logo-horizontal.png   — Nav + footer logo
    logo-mark.png          — Full stacked logo (unused currently, available if needed)
```

## Design Tokens

Brand colors are defined as CSS variables in `globals.css`:

| Token              | Hex       |
| ------------------ | --------- |
| `--mocha`           | `#47342C` |
| `--parchment`        | `#F5F3ED` |
| `--bronze`           | `#DBA74A` |
| `--olive`            | `#575530` |
| `--graphite`         | `#333132` |
| `--parchment-dark`    | `#EDE9E0` |

Typefaces: **Fraunces** (display/serif, used for headings) and **DM Sans** (body), loaded via `next/font/google`.

## Notes

- Hero section has scroll-driven parallax applied only to the text content (drifts at 0.28× scroll speed) — no parallax on the background image.
- Background image parallax (0.35× factor) is applied to the Meet Srimalini photo and the Come As You Are section background.
- Class card images, hero background, and all other imagery remain static (no parallax) per design direction.
- Unsplash images are loaded directly via `<img>` tags (not `next/image`) since they're external editorial photography used as backgrounds; `next.config.mjs` allowlists `images.unsplash.com` if you want to switch them to `next/image` later.
- All copy is used verbatim as provided — no additional marketing copy was added.
