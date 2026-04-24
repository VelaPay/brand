/**
 * VelaPay Brand Tokens — TypeScript constants (v1.0.0)
 *
 * Runtime mirror of tokens.css for inline styles, chart libraries,
 * SVG fills, canvas rendering, and any context that can't accept CSS
 * custom properties.
 *
 * RULE: CSS is the source of truth. Change tokens.css first, then
 * mirror here. A future improvement is to generate this file from
 * tokens.css automatically.
 */

/* ── Brand blue ramp — Electric Blue anchor @ -600 ─────────── */
export const brand = {
  50:  '#e8eefd',
  100: '#d1ddfb',
  200: '#a3bbf7',
  300: '#4c9ff9',
  400: '#1486F6', // Secondary · Dodger Blue
  500: '#0e5ef0',
  600: '#0C35E9', // Primary · Electric Blue
  700: '#0a20d6',
  800: '#0909C3', // Tertiary · Medium Blue
  900: '#070790',
  950: '#050560',
} as const;

/* ── Neutrals — Titanium White + Dull Black anchors ────────── */
export const ink = {
  0:   '#ffffff',
  50:  '#F4F5F7', // Titanium White
  100: '#eef0f6',
  200: '#dde1ec',
  300: '#bcc3d6',
  400: '#8b95b3',
  500: '#5a6585',
  600: '#3d4665',
  700: '#262d48',
  800: '#1f1f1f',
  900: '#161616', // Dull Black
  950: '#0a0a0a',
} as const;

/* ── Semantic text roles (light-mode default) — AA-safe ────── */
export const semantic = {
  bg:           ink[0],
  bgSoft:       ink[50],
  bgInverse:    ink[900],
  text:         ink[900],
  textMuted:    ink[600],   // bumped from ink[500] for AA
  textSubtle:   ink[500],   // large text only
  textFaint:    ink[400],   // decorative only
  border:       'rgba(22, 22, 22, 0.08)',
  borderStrong: 'rgba(22, 22, 22, 0.14)',
  divider:      'rgba(22, 22, 22, 0.06)',
  link:         brand[700],
  linkHover:    brand[600],
  accent:       brand[600],
  accentHover:  brand[400],
  accentDeep:   brand[800],
  accentSoft:   brand[50],
  surfaceBase:     ink[0],
  surfaceSunken:   ink[50],
  surfaceRaised:  '#ffffff',
  surfaceOverlay: '#ffffff',
  surfaceInverse: ink[900],
  surfaceConsole: ink[950],
  surfaceHover:   ink[50],
  surfaceActive:  ink[100],
  gridLine:     'rgba(12,15,32,0.04)',
  gridLineDark: 'rgba(255,255,255,0.04)',
  ring:         brand[700],
  ringOffset:   ink[0],
} as const;

/* ── Dark-mode semantic roles (runtime reference) ──────────── */
export const semanticDark = {
  bg:              ink[900],
  bgSoft:          ink[800],
  bgInverse:       ink[0],
  text:            ink[50],
  textMuted:       ink[300],
  textSubtle:      ink[400],
  textFaint:       'rgba(255,255,255,0.38)',
  border:          'rgba(255,255,255,0.08)',
  borderStrong:    'rgba(255,255,255,0.14)',
  divider:         'rgba(255,255,255,0.06)',
  link:            brand[300],
  linkHover:       brand[200],
  accent:          brand[400],
  accentHover:     brand[300],
  accentDeep:      brand[700],
  surfaceBase:     ink[900],
  surfaceSunken:   '#0d0d0d',
  surfaceRaised:   ink[800],
  surfaceOverlay:  ink[700],
  surfaceInverse:  ink[0],
  surfaceConsole:  ink[950],
  surfaceHover:    'rgba(255,255,255,0.04)',
  surfaceActive:   'rgba(255,255,255,0.08)',
  gridLine:        'rgba(255,255,255,0.04)',
  ring:            brand[400],
  ringOffset:      ink[900],
} as const;

/* ── Extended accent colors ────────────────────────────────── */
export const accent = {
  info:     '#1486F6',
  lavender: '#a3bbf7',
  purple:   '#a78bfa',
} as const;

/* ── Typography ────────────────────────────────────────────── */
export const fonts = {
  display: "'Fustat', 'Inter', system-ui, sans-serif",
  body:    "'Manrope', 'Inter', system-ui, sans-serif",
  sans:    "'Manrope', 'Inter', system-ui, sans-serif",
  mono:    "'Geist Mono', 'JetBrains Mono', ui-monospace, 'SF Mono', monospace",
} as const;

export const fontWeight = {
  normal:   400,
  medium:   500,
  semibold: 560,
  bold:     700,
} as const;

export const lineHeight = {
  tight:   1.1,
  snug:    1.3,
  normal:  1.55,
  relaxed: 1.7,
} as const;

export const tracking = {
  tightest: '-0.035em',
  tighter:  '-0.025em',
  tight:    '-0.02em',
  normal:   '0',
  wide:     '0.06em',
  wider:    '0.1em',
  widest:   '0.18em',
} as const;

export const textSize = {
  xs:   12,
  sm:   14,
  base: 16,
  lg:   19,
} as const;

/* ── Spacing scale ─────────────────────────────────────────── */
export const space = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  7:  28,
  8:  32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  30: 120,
} as const;

/* ── Radii ─────────────────────────────────────────────────── */
export const radii = {
  sm:   8,
  base: 14,
  lg:   20,
  xl:   28,
  pill: 999,
} as const;

/* ── Control sizing ────────────────────────────────────────── */
export const control = {
  sm:   36,
  md:   44,
  lg:   48,
  icon: 40,
} as const;

/* ── Density (table rows, list items) ──────────────────────── */
export const density = {
  compact:     36,
  comfortable: 44,
  spacious:    56,
} as const;

/* ── Elevation tier names (surface-* tokens) ───────────────── */
export const elevation = {
  base:    'base',
  sunken:  'sunken',
  raised:  'raised',
  overlay: 'overlay',
  inverse: 'inverse',
  console: 'console',
} as const;

/* ── Motion ────────────────────────────────────────────────── */
export const motion = {
  easeBrand:      "cubic-bezier(0.32, 0.72, 0, 1)",
  easeOutSoft:    "cubic-bezier(0.16, 1, 0.3, 1)",
  transitionFast: 180,
  transitionBase: 200,
  transitionSlow: 220,
} as const;

/* ── Shadows ───────────────────────────────────────────────── */
export const shadow = {
  sm:      '0 1px 2px rgba(12,15,32,0.04)',
  md:      '0 6px 18px -4px rgba(6,8,24,0.12)',
  lg:      '0 14px 40px -16px rgba(12,15,32,0.12)',
  xl:      '0 24px 64px -24px rgba(12,15,32,0.18)',
  popover: '0 4px 12px -2px rgba(12,15,32,0.14), 0 0 0 1px rgba(12,15,32,0.04)',
  brand:   '0 1px 0 rgba(255,255,255,0.22) inset, 0 8px 24px -6px rgba(23,51,237,0.45)',
  ink:     '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 18px -4px rgba(6,8,24,0.35)',
} as const;

/* ── Status colors ─────────────────────────────────────────── */
export const status = {
  success:          "oklch(0.72 0.17 145)",
  successMuted:     "color-mix(in srgb, oklch(0.72 0.17 145) 16%, transparent)",
  destructive:      "oklch(0.65 0.2 18)",
  destructiveMuted: "color-mix(in srgb, oklch(0.65 0.2 18) 16%, transparent)",
  warning:          "oklch(0.75 0.16 75)",
  warningMuted:     "color-mix(in srgb, oklch(0.75 0.16 75) 16%, transparent)",
  info:             "oklch(0.65 0.18 245)",
  infoMuted:        "color-mix(in srgb, oklch(0.65 0.18 245) 16%, transparent)",
} as const;

/* ── Data viz palette (CSS var references) ─────────────────── */
export const chart = {
  1: 'var(--chart-1)',
  2: 'var(--chart-2)',
  3: 'var(--chart-3)',
  4: 'var(--chart-4)',
  5: 'var(--chart-5)',
  6: 'var(--chart-6)',
  7: 'var(--chart-7)',
  8: 'var(--chart-8)',
} as const;

/* ── Type exports ──────────────────────────────────────────── */
export type BrandScale     = keyof typeof brand;
export type InkScale       = keyof typeof ink;
export type SemanticKey    = keyof typeof semantic;
export type AccentKey      = keyof typeof accent;
export type FontKey        = keyof typeof fonts;
export type FontWeightKey  = keyof typeof fontWeight;
export type LineHeightKey  = keyof typeof lineHeight;
export type TrackingKey    = keyof typeof tracking;
export type TextSizeKey    = keyof typeof textSize;
export type SpaceKey       = keyof typeof space;
export type RadiusKey      = keyof typeof radii;
export type ControlKey     = keyof typeof control;
export type DensityKey     = keyof typeof density;
export type ElevationKey   = keyof typeof elevation;
export type MotionKey      = keyof typeof motion;
export type ShadowKey      = keyof typeof shadow;
export type StatusKey      = keyof typeof status;
export type ChartKey       = keyof typeof chart;
