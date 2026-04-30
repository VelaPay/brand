/**
 * VelaPay Design System — EventDot (v1.1.0)
 *
 * Activity-feed marker — a colored dot with a soft halo. Color
 * follows the status semantic tokens; `priv` is the encrypted/Arcium
 * violet. Sized to align with leading-trim on a 14px line.
 *
 * Usage:
 *   <EventDot kind="ok" />
 *   <EventDot kind="priv" /> // encrypted-pull events
 */
import { memo, useMemo, type CSSProperties } from "react";

export type EventKind = "ok" | "err" | "warn" | "info" | "priv";

// Pre-computed style-per-kind cache. Reused across every render of every
// EventDot at the default size, so a 50-row activity feed allocates ZERO
// new style objects in the steady state. The fallback path (custom size or
// inline style) still allocates lazily.
type DotStyle = CSSProperties;

const STYLE_CACHE: Record<EventKind, DotStyle> = {
  ok: makeStyle("var(--status-ok)", 8),
  err: makeStyle("var(--status-err)", 8),
  warn: makeStyle("var(--status-warn)", 8),
  info: makeStyle("var(--status-info)", 8),
  priv: makeStyle("var(--status-priv)", 8),
};

function makeStyle(color: string, size: number): DotStyle {
  return {
    display: "inline-block",
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    boxShadow: `0 0 0 3px color-mix(in srgb, ${color} 18%, transparent)`,
    flexShrink: 0,
  };
}

export interface EventDotProps {
  kind?: EventKind;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export const EventDot = memo(function EventDot({
  kind = "info",
  size = 8,
  className,
  style,
}: EventDotProps) {
  // Hot path: default size, no inline override → reuse the cached style ref.
  // Cold path: custom size or inline overrides → memoize per (kind, size, style).
  const computed = useMemo<DotStyle>(() => {
    if (size === 8 && !style) return STYLE_CACHE[kind];
    const base = size === 8 ? STYLE_CACHE[kind] : makeStyle(getColor(kind), size);
    return style ? { ...base, ...style } : base;
  }, [kind, size, style]);

  return <span aria-hidden="true" className={className} style={computed} />;
});

function getColor(kind: EventKind): string {
  switch (kind) {
    case "ok": return "var(--status-ok)";
    case "err": return "var(--status-err)";
    case "warn": return "var(--status-warn)";
    case "priv": return "var(--status-priv)";
    case "info":
    default: return "var(--status-info)";
  }
}
