/**
 * VelaPay Design System — KpiCard (v1.1.0)
 *
 * Dashboard KPI tile — mono uppercase label, large tnum value,
 * ±% delta with directional arrow, optional brand-50 corner accent.
 *
 * Distinct from `StatCard` (marketing-flavored). KpiCard is dashboard
 * fintech density — 28px numerals, 10.5px mono caps label.
 *
 * Usage:
 *   <KpiCard label="MRR · USDC" value={184_240} prev={167_810}
 *            format={(v) => `$${v.toLocaleString()}`} accent />
 */
import { memo, useMemo, type CSSProperties, type ReactNode } from "react";
import { cn } from "./cn";

/* ── Hoisted styles + pre-rendered SVGs ───────────────────────── */

const DELTA_POS_STYLE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 3,
  color: "var(--status-ok)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 540,
};
const DELTA_NEG_STYLE: CSSProperties = {
  ...DELTA_POS_STYLE,
  color: "var(--status-err)",
};
const META_LABEL_STYLE: CSSProperties = { color: "var(--text-faint)" };

// SVG arrow nodes are referentially stable — rendered as constants so React
// reconciler treats them as identical across renders of any KpiCard.
const ARROW_UP = (
  <svg width={12} height={12} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M5 11L11 5 M6 5h5v5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ARROW_DOWN = (
  <svg width={12} height={12} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M5 5l6 6 M11 6v5h-5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Public API ───────────────────────────────────────────────── */

export interface KpiCardProps {
  label: ReactNode;
  /** Either a pre-formatted node, or a number paired with `format`. */
  value: number | ReactNode;
  /** Smaller secondary unit text rendered next to `value` (e.g. "USDC"). */
  unit?: ReactNode;
  /** Previous-period value — drives delta calculation. */
  prev?: number;
  /** Number formatter used when `value` is a number. */
  format?: (v: number) => string;
  /** Override the rendered footer (suppresses delta-from-prev). */
  footer?: ReactNode;
  /** Render the brand-soft radial corner accent. */
  accent?: boolean;
  className?: string;
}

export const KpiCard = memo(function KpiCard({
  label,
  value,
  unit,
  prev,
  format,
  footer,
  accent = false,
  className,
}: KpiCardProps) {
  // Compose the formatted display value + delta in a single memo. Stable when
  // value/prev/format don't change, which is the common case across re-renders
  // triggered by a parent context flip (sidebar collapse, route hover-prefetch).
  const { formatted, delta, positive } = useMemo(() => {
    const numeric = typeof value === "number";
    const fmt = numeric ? (format ? format(value) : String(value)) : value;
    let d: number | null = null;
    if (numeric && typeof prev === "number" && prev !== 0) {
      d = ((value - prev) / prev) * 100;
    }
    return {
      formatted: fmt,
      delta: d,
      positive: d == null ? null : d >= 0,
    };
  }, [value, prev, format]);

  return (
    <div className={cn("kpi", accent && "kpi-accent", className)}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">
        {formatted}
        {unit && <span className="unit">{unit}</span>}
      </div>

      {footer ? (
        <div className="kpi-meta">{footer}</div>
      ) : delta != null ? (
        <div className="kpi-meta">
          <span style={positive ? DELTA_POS_STYLE : DELTA_NEG_STYLE}>
            {positive ? ARROW_UP : ARROW_DOWN}
            {Math.abs(delta).toFixed(1)}%
          </span>
          <span style={META_LABEL_STYLE}>vs last period</span>
        </div>
      ) : null}
    </div>
  );
});
