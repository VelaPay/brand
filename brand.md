# VelaPay Brand Specification

> Canonical reference for the VelaPay visual system. This document is the human-readable pair of `tokens.css` — if you change a value in one, change it in both.

## 1. Identity

**Vela Protocol** is the primitive; **VelaPay** is the product. The brand lives in both surfaces: protocol-facing (SDK docs, developer tooling, on-chain labels) and merchant-facing (dashboard, landing, hosted checkout).

Core positioning: *cryptographically scoped, private recurring payments on Solana*. The visual system should feel:

- **Technical** without feeling cold — we are infrastructure, not fintech marketing.
- **Confident** without feeling loud — single anchor color, generous negative space, restrained motion.
- **Modern** without chasing trends — kit is stable across multi-year time horizons.

## 2. Palette

Five kit colors. Derived tints/shades anchor them into an 11-step ramp so components have room to breathe.

### Brand blues

| Role | Name | Hex | Token | Use |
|---|---|---|---|---|
| **Primary** | Electric Blue | `#0C35E9` | `--brand-600` | Default CTA, links, logo mark, primary accents |
| **Secondary** | Dodger Blue | `#1486F6` | `--brand-400` | Hover states, highlights, focus rings, sparklines |
| **Tertiary** | Medium Blue | `#0909C3` | `--brand-800` | Pressed states, deep gradient stops, dense backgrounds |

The ramp positions these three at `-400`, `-600`, `-800`. Tints (`-50` through `-300`) and shades (`-700`, `-900`, `-950`) are derivations of the Primary — use them for surfaces, subtle highlights, and deep brand-colored gradients.

### Neutrals

| Role | Name | Hex | Token | Use |
|---|---|---|---|---|
| **White** | Titanium White | `#F4F5F7` | `--ink-50` | Page background, bg-soft surfaces |
| **Black** | Dull Black | `#161616` | `--ink-900` | Body text, dark-mode surfaces, bg-inverse |

Mid-range inks (`-100` through `-800`) are neutral grays for borders, muted text, and elevation.

### Semantic

`--accent` = Electric Blue, `--accent-hover` = Dodger Blue, `--accent-deep` = Medium Blue. Use semantic tokens in components so the ramp can shift without touching consumers.

### Status (outside the kit)

The kit does not define status colors. Downstream repos should pick from a neutral semantic scale (success green, warning amber, error red, info blue). Do not redefine these in `@vela/brand` — they belong to individual product repos since their exact values depend on product context (e.g. dashboard vs. email). Candidates observed across the ecosystem:

- Success: `#4ade80` (green-400)
- Warning: `#fbbf24` (amber-400)
- Error: `#f87171` (red-400)

## 3. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Wordmark | Fustat | 700 Bold | Canonical across navbar, footer, OG image |
| Display (hero h1, large callouts) | Fustat | 700 Bold | Assertive but not shouty — reserve for primary moments |
| Section headings (h2) | Fustat | 600 SemiBold | Strong but subordinate to hero |
| Subsection headings (h3, card titles, h4) | Fustat | 500 Medium | Clear hierarchy step-down |
| Body | Manrope | 400 Regular | Pairs with Fustat's geometric warmth; reads well 14–18px |
| Emphasized body, buttons, kickers | Manrope | 500 Medium | Buttons, labels, mono-caps kickers |
| Monospace (code, technical callouts) | Geist Mono | 400 / 500 | Restrained, no ligatures — won't fight with Fustat |

**Hierarchy principle:** Modulate weight across heading levels. A single weight for all headings erases hierarchy and makes the page read as shouting.

## 4. Logo

- **Mark** (`assets/mark.svg`) — shield shape, uses `currentColor` so the rendering color flows from CSS.
- **Wordmark** (`assets/wordmark.svg`) — "VelaPay" in Fustat Bold, `currentColor`.
- **Favicon** (`assets/favicon.svg`) — mark with Electric Blue baked in for environments that can't set color via CSS.

Standard lockup: mark + wordmark, horizontal, with 10–12px gap. Footer may go larger (24–28px mark height); navbar stays compact (16–18px).

Monochrome lockups are acceptable where color is not available (print, single-color embroidery, greyscale OG). Never re-tint the mark in non-brand colors.

### 4.1 OG / social meta images

The kit ships a reference OG template at `assets/og-template.svg` (1200×630, Dull Black → Medium Blue gradient, Dodger Blue halo, white mark, Fustat Bold wordmark, Manrope tagline). Consumers copy it into their repo, edit the tagline, then rasterize it with the provided helper:

```ts
import { renderBrandOG } from '@vela/brand/og';

await renderBrandOG({ svg: 'public/og.svg', out: 'public/og.png' });
```

The helper loads Fustat 700 and Manrope 400 as font buffers from the consumer's `node_modules`, so the PNG renders with real brand glyphs — no system font install, no headless browser, no Puppeteer. Requires `@resvg/resvg-js` as an optional peer dep.

See `README.md → OG image rendering` for the full setup including the suggested `bun run regen:og` script.

## 5. Motion and restraint

Out of scope for this package, but for reference:

- Transitions in the brand feel use `cubic-bezier(0.32, 0.72, 0, 1)` (ease-out, natural deceleration).
- Default duration is 180–220ms.
- Hover color shifts go Primary → Secondary (`#0C35E9` → `#1486F6`), never Primary → random accent.

---

## Roadmap — Future Improvements

This package starts simple on purpose. Three progressive upgrades are sketched below. Each has a clear trigger; do not promote prematurely.

### Option A → Option B: Move from git-based to published npm

**Current (A):** repos install via `bun add github:velapay/brand`. Zero infra, versioning via git tags.

**Upgrade (B):** publish to a private npm registry or GitHub Packages.

**Trigger:** three or more repos consume the kit AND at least one non-engineer (designer, brand owner) contributes changes. At that point the git-URL flow becomes too fragile — you want proper changelogs, `bun outdated` detection, and a rollback story.

**Work involved:**
- Decide registry: **GitHub Packages** (private, bundled with the org) is the lowest-friction choice since `velapay` is already on GitHub.
- Add `publishConfig` to `package.json` with the registry URL.
- Wire a GitHub Action to `bun publish` on tag.
- Add `.npmrc` snippets to each consuming repo for registry auth.
- Optional: add a `CHANGELOG.md` here and enforce conventional commits.

**Don't forget:** rotate the `GITHUB_TOKEN` / org registry token annually, and document the auth flow for new contributors in the CONTRIBUTING.md. When people can't `bun install` because of auth, they will blame you.

### Option B → Option C: Adopt Style Dictionary (or equivalent token pipeline)

**Upgrade (C):** move the source of truth from hand-written CSS into a platform-neutral format (Style Dictionary JSON, W3C Design Tokens spec, or Tokens Studio), with a build step that emits CSS, TS, iOS `.swift`, Android XML, and Figma JSON.

**Trigger:** any ONE of:
- A native mobile app enters the roadmap (iOS or Android) — they can't consume CSS.
- The design team adopts Figma Tokens Studio and wants round-trip sync between Figma and the codebase.
- The brand grows beyond ~50 tokens and keeping `tokens.css`, `theme.css`, `tokens.ts` in sync by hand becomes error-prone.

**Work involved:**
- Pick the format. W3C Design Tokens is emerging as the canonical standard but tooling is rough. Style Dictionary (Amazon, OSS) is the mature workhorse. Tokens Studio (Figma plugin) is best if designers drive changes.
- Move `tokens.css` values into `tokens.json` (or `tokens.source.ts`).
- Add a `bun run build:tokens` script that emits `dist/tokens.css`, `dist/tokens.ts`, `dist/tokens.swift`, `dist/tokens.xml`, etc.
- Update downstream repos to import from `dist/` instead of the root.
- If using Figma Tokens Studio: set up the GitHub sync plugin so designers can push token changes via PR.

**Don't forget:** even with a token pipeline, CSS custom properties remain the runtime mechanism in web. The build step is just a typed generator — don't overthink it.

### Anti-upgrades (things explicitly not to do)

- **Do not** put brand tokens inside a design system component library (e.g. bundling them into `@vela/ui`). The kit must be consumable by repos that don't use React. Keep it data-only.
- **Do not** promote every new accent color into the kit. The kit is the floor, not the ceiling. Status colors (success/warning/error), chart palettes, and product-specific accents stay in their respective repos.
- **Do not** fork the kit per product. If vela-dashboard needs a slightly different primary for dark mode, extend via `@theme` overrides in the consuming repo — don't create `@vela/brand-dashboard`.
- **Do not** skip the CSS source of truth even after moving to Style Dictionary. CSS is what browsers actually run; everything else is a build artifact.
