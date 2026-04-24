/**
 * VelaPay Design System — EmptyState (v1.0.0)
 *
 * Centered empty-message pattern with icon + title + description + cta.
 *
 * Usage:
 *   import { EmptyState } from "@vela/brand/react";
 *   <EmptyState
 *     icon={<InboxIcon />}
 *     title="No invoices yet"
 *     description="Create your first invoice to start billing customers."
 *     cta={<Button variant="brand">New invoice</Button>}
 *   />
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
}

export function EmptyState({
  className,
  icon,
  title,
  description,
  cta,
  ...props
}: EmptyStateProps) {
  return (
    <div {...props} className={cn("empty-state", className)}>
      {icon && <div className="empty-state__icon">{icon}</div>}
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__sub">{description}</p>}
      {cta && <div className="empty-state__cta">{cta}</div>}
    </div>
  );
}
