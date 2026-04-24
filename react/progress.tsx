/**
 * VelaPay Design System — Progress (v1.0.0)
 *
 * Linear progress bar. Pass `value` (0–100) for determinate;
 * omit for indeterminate.
 *
 * Usage:
 *   import { Progress } from "@vela/brand/react";
 *   <Progress value={70} label="Uploading" />
 *   <Progress label="Processing…" />  // indeterminate
 */
import { cn } from "./cn";
import type { HTMLAttributes } from "react";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** 0–100. Omit for indeterminate. */
  value?: number;
  label?: string;
}

export function Progress({
  className,
  value,
  label,
  ...props
}: ProgressProps) {
  const indeterminate = value === undefined;
  return (
    <div
      {...props}
      role="progressbar"
      aria-label={label}
      aria-valuemin={indeterminate ? undefined : 0}
      aria-valuemax={indeterminate ? undefined : 100}
      aria-valuenow={indeterminate ? undefined : value}
      className={cn("progress", indeterminate && "progress--indeterminate", className)}
    >
      <div
        className="progress__bar"
        style={{ width: indeterminate ? undefined : `${Math.max(0, Math.min(100, value!))}%` }}
      />
    </div>
  );
}
