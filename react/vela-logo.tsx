/**
 * VelaPay Design System — VelaMark + VelaLogo (v1.1.1)
 *
 * Brand logo primitives. Two flavors:
 *   - <VelaMark /> — sail-icon only (square-ish lockup)
 *   - <VelaLogo /> — horizontal lockup (mark + Fustat wordmark)
 *
 * Both default to `currentColor` so consumers control color via
 * className/style. `<VelaLogo />` accepts an optional `markColor`
 * to tint the sail differently from the wordmark — used in the
 * dashboard sidebar (ink wordmark + brand-blue mark).
 */
import type { CSSProperties } from "react";

export interface VelaMarkProps {
  /** Pixel height. Width is computed from the 100×56 viewBox. */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function VelaMark({ size = 28, className, style }: VelaMarkProps) {
  const width = size * (100 / 56);
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 100 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M 8 0 L 30 0 C 36 0 40 4 42 10 L 49 30 C 49.4 31 50.6 31 51 30 L 58 10 C 60 4 64 0 70 0 L 92 0 C 96.4 0 100 3.6 100 8 L 100 28 C 100 31 98.5 33.7 96 35.2 L 54.5 55 C 51.7 56.3 48.3 56.3 45.5 55 L 4 35.2 C 1.5 33.7 0 31 0 28 L 0 8 C 0 3.6 3.6 0 8 0 Z" />
    </svg>
  );
}

export interface VelaLogoProps {
  /** Total lockup height in px. Mark + wordmark scale relative to this. */
  height?: number;
  /** Wordmark color. Defaults to `currentColor`. */
  color?: string;
  /** Mark color. Defaults to `color` (or `currentColor`). */
  markColor?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Horizontal lockup: sail mark + "VelaPay" wordmark in Fustat.
 *
 * Geometry mirrors the canvas reference (mark = 0.78×height,
 * wordmark = 0.62×height, gap = 0.42×height). Wordmark uses the
 * brand `--font-display` stack so consumers don't have to inject
 * a font face for the SVG to render correctly.
 */
export function VelaLogo({
  height = 28,
  color = "currentColor",
  markColor,
  className,
  style,
}: VelaLogoProps) {
  const mc = markColor ?? color;
  const containerStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: height * 0.42,
    color,
    ...style,
  };
  return (
    <span className={className} style={containerStyle} aria-label="VelaPay" role="img">
      <VelaMark size={height * 0.78} style={{ color: mc, display: "block" }} />
      <svg
        height={height * 0.62}
        viewBox="0 0 240 48"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        <text
          x="0"
          y="38"
          fontFamily="Fustat, Inter, system-ui, sans-serif"
          fontSize="44"
          fontWeight="700"
          letterSpacing="-1.6"
          fill={color}
        >
          VelaPay
        </text>
      </svg>
    </span>
  );
}
