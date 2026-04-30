/**
 * VelaPay Design System — LockGlyph (internal v1.1.0)
 *
 * Tiny lock icon used by Pill/Redact privacy variants. Memoized at
 * module scope as a constant element so consumers don't re-render
 * the SVG subtree per row in dense tables.
 */
import type { CSSProperties } from "react";

const ROOT_STYLE = { flexShrink: 0 } as const;

export interface LockGlyphProps {
  size?: number;
  /** Optional offset to compensate for the leading dot in `.pill` chips. */
  marginLeft?: number;
}

export function LockGlyph({ size = 9, marginLeft }: LockGlyphProps) {
  const style: CSSProperties =
    marginLeft != null ? { ...ROOT_STYLE, marginLeft } : ROOT_STYLE;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={style}
    >
      <g
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={3} y={7} width={10} height={7} rx={1.5} />
        <path d="M5.5 7V5a2.5 2.5 0 1 1 5 0V7" />
      </g>
    </svg>
  );
}
