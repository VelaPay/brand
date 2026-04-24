/**
 * VelaPay Design System — Badge primitive.
 *
 * Zero-dependency badge component with VelaPay status variants.
 * Matches the CSS `.badge-*` classes in `@vela/brand/components.css`.
 *
 * Usage:
 *   import { Badge } from "@vela/brand/react/badge";
 *   <Badge variant="active">Active</Badge>
 *   <Badge variant="overdue" dot>Overdue</Badge>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "active"
  | "cancelled"
  | "overdue"
  | "paid"
  | "failed"
  | "pending";

const variantClasses: Record<BadgeVariant, string> = {
  active: "badge-active",
  cancelled: "badge-cancelled",
  overdue: "badge-overdue",
  paid: "badge-paid",
  failed: "badge-failed",
  pending: "badge-pending",
};

const dotClasses: Record<BadgeVariant, string> = {
  active:    "badge-dot-active",
  cancelled: "badge-dot-cancelled",
  overdue:   "badge-dot-overdue",
  paid:      "badge-dot-active",
  failed:    "badge-dot-failed",
  pending:   "badge-dot-overdue",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  children: ReactNode;
}

export function Badge({
  variant = "active",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={cn("badge", variantClasses[variant], className)}
    >
      {dot && (
        <span
          className={cn("badge-dot", dotClasses[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
