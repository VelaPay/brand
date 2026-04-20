# @vela/brand

Canonical brand tokens, typography, and assets for the VelaPay ecosystem. Consumed by `vela-web`, `vela-dashboard`, `vela-docs`, and any future repo that needs to render the VelaPay brand.

**Source of truth:** `tokens.css`. Everything else (`theme.css`, `tokens.ts`) mirrors it.

## Install

Git-based dependency (Option A — current):

```bash
bun add github:velapay/brand
```

Pin to a specific release:

```bash
bun add github:velapay/brand#v0.1.0
```

## Consume

### Plain CSS / Astro / any framework

```css
/* your global.css */
@import '@vela/brand/fonts.css';
@import '@vela/brand/tokens.css';

.button {
  background: var(--brand-600);
  color: var(--ink-0);
  font-family: var(--font-display);
}
```

Add the peer dependencies separately (the `@fontsource/*` packages can't be bundled as a transitive dep):

```bash
bun add @fontsource/fustat @fontsource/manrope @fontsource/geist-mono
```

### Tailwind v4

```css
/* your global.css */
@import 'tailwindcss';
@import '@vela/brand/fonts.css';
@import '@vela/brand/tokens.css';
@import '@vela/brand/theme.css';
```

Then use standard Tailwind utilities: `bg-brand-600`, `text-ink-900`, `font-display`, etc.

### TypeScript / React inline styles

```ts
import { brand, ink, semantic, fonts } from '@vela/brand/tokens';

<button style={{ background: brand[600], color: ink[0], fontFamily: fonts.display }}>
  Get started
</button>
```

### SVG assets

```astro
---
import mark from '@vela/brand/assets/mark.svg?raw';
---
<div class="logo" set:html={mark} />

<style>
  .logo { color: var(--brand-600); width: 32px; }
  /* The mark uses currentColor, so brand color flows via color: */
</style>
```

### OG image rendering

The kit ships a helper that rasterizes an SVG template into a PNG with brand
fonts pre-loaded — no system font install required.

```bash
# Add the rasterizer to your repo (optional peer dep):
bun add -d @resvg/resvg-js
```

Copy the template, edit the tagline for your repo, then render:

```bash
cp node_modules/@vela/brand/assets/og-template.svg public/og.svg
# edit public/og.svg — change the tagline text
```

```ts
// scripts/regen-og.ts
import { renderBrandOG } from '@vela/brand/og';

const bytes = await renderBrandOG({
  svg: 'public/og.svg',
  out: 'public/og.png',
});
console.log(`og.png regenerated (${(bytes / 1024).toFixed(1)} KB)`);
```

```jsonc
// package.json
{
  "scripts": {
    "regen:og": "bun run scripts/regen-og.ts"
  }
}
```

Then `bun run regen:og` regenerates the PNG any time the SVG or brand
kit changes. Runs offline, bundle-free, ~400ms.

## Structure

```
@vela/brand/
├── tokens.css     — CSS custom properties (source of truth)
├── theme.css      — Tailwind v4 @theme directive
├── fonts.css      — @fontsource imports
├── tokens.ts      — TypeScript mirror for runtime use
├── og.ts          — renderBrandOG() helper, rasterizes OG PNGs with brand fonts
├── assets/
│   ├── mark.svg        — shield mark, uses currentColor
│   ├── wordmark.svg    — "VelaPay" in Fustat Bold, uses currentColor
│   ├── favicon.svg     — standalone mark with baked-in primary color
│   └── og-template.svg — reference OG template with kit gradient + glyphs
├── brand.md       — human-readable spec + roadmap
└── README.md      — this file
```

## Updating the kit

1. Edit `tokens.css` first — it is the source of truth.
2. Mirror the change in `theme.css` (Tailwind exposure) and `tokens.ts` (TS constants).
3. Bump the version in `package.json`.
4. Tag a release: `git tag v0.x.y && git push --tags`.
5. Consumers update via `bun update @vela/brand`.

See `brand.md` for the full spec and the planned Option A → B → C migration path.
