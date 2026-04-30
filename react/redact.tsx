/**
 * VelaPay Design System — Redact + Money (v1.1.0)
 *
 * Encrypted-value display. The lock + repeating-bars treatment is
 * VelaPay's literal expression of Arcium MPC privacy: amounts that
 * are encrypted on-chain render as a redaction chip, not as a
 * disclosed value.
 *
 * `Money` is the load-bearing renderer for any monetary value that
 * MAY be encrypted. Always prefer it over hand-rolled formatting on
 * dashboard surfaces.
 *
 * Usage:
 *   <Redact prefix="$" />
 *   <Money amount={1234.5} encrypted={mandate.privacy === "encrypted"} />
 *   <Money amount={49} encrypted dark />        // inside a .panel-dark
 */
import { memo, useMemo, type CSSProperties } from "react";
import { cn } from "./cn";
import { LockGlyph } from "./lock-glyph";

/* ── Static styles (hoisted to avoid per-render allocations) ──── */

const PREFIX_STYLE = { opacity: 0.85 } as const;
// `width` is dynamic (1-3 size choices in practice). Pre-build a small cache
// keyed by px so dense tables hit the same object ref across rows.
const BAR_STYLE_CACHE = new Map<number, CSSProperties>();
function getBarStyle(width: number): CSSProperties {
  let s = BAR_STYLE_CACHE.get(width);
  if (!s) {
    s = { width };
    BAR_STYLE_CACHE.set(width, s);
  }
  return s;
}

const MONEY_LIGHT_STYLE: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontWeight: 540,
  fontFeatureSettings: '"tnum"',
  color: "var(--text)",
};
const MONEY_DARK_STYLE: CSSProperties = {
  ...MONEY_LIGHT_STYLE,
  color: "#ffffff",
};
const MONEY_ENCRYPTED_WRAPPER_STYLE: CSSProperties = {
  display: "inline-flex",
  justifyContent: "flex-end",
};

/* ── Redact ───────────────────────────────────────────────────── */

export interface RedactProps {
  prefix?: string;
  /** Use the dark variant for placement inside `.panel-dark` surfaces. */
  dark?: boolean;
  /** Width of the bars graphic in px. */
  width?: number;
  className?: string;
  style?: CSSProperties;
}

export const Redact = memo(function Redact({
  prefix = "$",
  dark = false,
  width = 28,
  className,
  style,
}: RedactProps) {
  return (
    <span className={cn(dark ? "redact-dark" : "redact", className)} style={style}>
      <LockGlyph marginLeft={-1} />
      <span style={PREFIX_STYLE}>{prefix}</span>
      <span className="bars" style={getBarStyle(width)} />
    </span>
  );
});

/* ── Money — privacy-aware monetary value ─────────────────────── */

export interface MoneyProps {
  amount: number;
  encrypted?: boolean;
  /** Use white text + dark redact variant for `.panel-dark` placement. */
  dark?: boolean;
  prefix?: string;
  /** Override locale-default decimal handling. */
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  className?: string;
  style?: CSSProperties;
}

// Intl.NumberFormat instances are expensive to construct (~µs) and stable per
// (minDigits, maxDigits) pair. Cache by composite key so a 100-row settlements
// table reuses one formatter instead of constructing one per cell per render.
const FORMATTER_CACHE = new Map<string, Intl.NumberFormat>();
function getFormatter(min: number, max: number): Intl.NumberFormat {
  const key = `${min}:${max}`;
  let nf = FORMATTER_CACHE.get(key);
  if (!nf) {
    nf = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    });
    FORMATTER_CACHE.set(key, nf);
  }
  return nf;
}

export const Money = memo(function Money({
  amount,
  encrypted = false,
  dark = false,
  prefix = "$",
  minimumFractionDigits,
  maximumFractionDigits = 2,
  className,
  style,
}: MoneyProps) {
  // Compute formatted text only when amount/format params change.
  const formatted = useMemo(() => {
    if (encrypted) return null;
    const min =
      minimumFractionDigits ?? (Math.abs(amount % 1) > 0 ? 2 : 0);
    return getFormatter(min, maximumFractionDigits).format(amount);
  }, [amount, encrypted, minimumFractionDigits, maximumFractionDigits]);

  // Inline style only allocated when the caller passes overrides; otherwise
  // we reuse the hoisted shared refs.
  const wrapperStyle = useMemo<CSSProperties | undefined>(() => {
    if (encrypted) {
      return style ? { ...MONEY_ENCRYPTED_WRAPPER_STYLE, ...style } : MONEY_ENCRYPTED_WRAPPER_STYLE;
    }
    const base = dark ? MONEY_DARK_STYLE : MONEY_LIGHT_STYLE;
    return style ? { ...base, ...style } : base;
  }, [encrypted, dark, style]);

  if (encrypted) {
    return (
      <span className={cn("inline-flex", className)} style={wrapperStyle}>
        <Redact prefix={prefix} dark={dark} />
      </span>
    );
  }

  return (
    <span className={cn("mono-value", className)} style={wrapperStyle}>
      {prefix}
      {formatted}
    </span>
  );
});
