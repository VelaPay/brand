/**
 * VelaPay Design System — MonoValue (v1.0.2)
 *
 * Tabular-lining monospace display for numeric values.
 *
 * Usage:
 *   import { MonoValue } from "@vela/brand/react";
 *   <MonoValue value="$29.00" unit="USDC" />
 *   <MonoValue value={12} unit="cycles" />
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface MonoValueProps extends HTMLAttributes<HTMLSpanElement> {
  value: ReactNode;
  unit?: ReactNode;
}

export function MonoValue({ value, unit, className, ...props }: MonoValueProps) {
  return (
    <span {...props} className={cn("mono-value", className)}>
      {value}
      {unit && <span className="mono-value__unit">{unit}</span>}
    </span>
  );
}
