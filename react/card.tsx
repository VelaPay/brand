/**
 * VelaPay Design System — Card primitives.
 *
 * Zero-dependency card components matching `.surface-card` and
 * `.panel-card` in `@vela/brand/components.css`.
 *
 * Usage:
 *   import { SurfaceCard, PanelCard } from "@vela/brand/react/card";
 *   <SurfaceCard>...</SurfaceCard>
 *   <PanelCard>...</PanelCard>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface SurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function SurfaceCard({ className, children, ...props }: SurfaceCardProps) {
  return (
    <div {...props} className={cn("surface-card", className)}>
      {children}
    </div>
  );
}

export interface PanelCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PanelCard({ className, children, ...props }: PanelCardProps) {
  return (
    <div {...props} className={cn("panel-card", className)}>
      {children}
    </div>
  );
}
