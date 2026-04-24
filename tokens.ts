/**
 * VelaPay Brand Tokens — TypeScript constants.
 *
 * Mirror of tokens.css for runtime consumption (inline styles, chart libraries,
 * SVG fills that can't accept CSS custom properties, canvas rendering, etc.).
 *
 * RULE: CSS is the source of truth. If you change a value here but not in
 * tokens.css, the site will look inconsistent. Change tokens.css first, then
 * mirror here. (A future improvement — see brand.md — is to generate this file
 * from tokens.css automatically.)
 */

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

export const semantic = {
  bg:           ink[0],
  bgSoft:       ink[50],
  bgInverse:    ink[900],
  text:         ink[900],
  textMuted:    ink[500],
  textSubtle:   ink[400],
  border:       'rgba(22, 22, 22, 0.08)',
  borderStrong: 'rgba(22, 22, 22, 0.14)',
  accent:       brand[600],
  accentHover:  brand[400],
  accentDeep:   brand[800],
  accentSoft:   brand[50],
} as const;

export const fonts = {
  display: "'Fustat', 'Inter', system-ui, sans-serif",
  body:    "'Manrope', 'Inter', system-ui, sans-serif",
  mono:    "'Geist Mono', 'JetBrains Mono', ui-monospace, 'SF Mono', monospace",
} as const;

export const status = {
  success:         "oklch(0.72 0.17 145)",
  successMuted:    "color-mix(in srgb, oklch(0.72 0.17 145) 16%, transparent)",
  destructive:     "oklch(0.65 0.2 18)",
  destructiveMuted: "color-mix(in srgb, oklch(0.65 0.2 18) 16%, transparent)",
  warning:         "oklch(0.75 0.16 75)",
  warningMuted:    "color-mix(in srgb, oklch(0.75 0.16 75) 16%, transparent)",
  info:            "oklch(0.65 0.18 245)",
  infoMuted:       "color-mix(in srgb, oklch(0.65 0.18 245) 16%, transparent)",
} as const;

export const motion = {
  easeBrand: "cubic-bezier(0.32, 0.72, 0, 1)",
  transitionFast: 180,
  transitionBase: 200,
  transitionSlow: 220,
} as const;

export const radii = {
  sm: 8,
  base: 14,
  lg: 20,
  xl: 28,
} as const;

export type BrandScale = keyof typeof brand;
export type InkScale = keyof typeof ink;
export type StatusKey = keyof typeof status;
export type MotionKey = keyof typeof motion;
export type RadiusKey = keyof typeof radii;
