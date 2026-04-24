/**
 * VelaPay Design System — StatCard (v1.0.0)
 *
 * KPI tile — label + value + optional delta. Composes `.card`
 * with `.stat-card` layout.
 *
 * Usage:
 *   import { StatCard } from "@vela/brand/react";
 *   <StatCard label="Monthly recurring" value="$48,320" delta="+12.4%" deltaDirection="up" />
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export type DeltaDirection = "up" | "down";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  delta?: ReactNode;
  deltaDirection?: DeltaDirection;
}

export function StatCard({
  className,
  label,
  value,
  delta,
  deltaDirection = "up",
  ...props
}: StatCardProps) {
  return (
    <div {...props} className={cn("card stat-card", className)}>
      <span className="stat-card__label">{label}</span>
      <span className="stat-card__value">{value}</span>
      {delta && (
        <span
          className={cn(
            "stat-card__delta",
            deltaDirection === "up" ? "stat-card__delta--up" : "stat-card__delta--down",
          )}
        >
          {delta}
        </span>
      )}
    </div>
  );
}
