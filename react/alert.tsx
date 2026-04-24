/**
 * VelaPay Design System — Alert (v1.0.0)
 *
 * Inline status banner with variant-tinted accent stripe.
 * Automatically applies `role="alert"` for warning/danger and
 * `role="status"` for info/success (overridable).
 *
 * Usage:
 *   import { Alert } from "@vela/brand/react";
 *   <Alert variant="danger" title="Payment failed">Card was declined.</Alert>
 *   <Alert variant="info" dismissible onDismiss={…}>New settings saved.</Alert>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

const variantClasses: Record<AlertVariant, string> = {
  info:    "alert--info",
  success: "alert--success",
  warning: "alert--warning",
  danger:  "alert--danger",
};

const defaultRoles: Record<AlertVariant, "alert" | "status"> = {
  info:    "status",
  success: "status",
  warning: "alert",
  danger:  "alert",
};

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  children: ReactNode;
}

export function Alert({
  className,
  variant = "info",
  title,
  icon,
  dismissible,
  onDismiss,
  children,
  role,
  ...props
}: AlertProps) {
  return (
    <div
      {...props}
      role={role ?? defaultRoles[variant]}
      className={cn("alert", variantClasses[variant], className)}
    >
      {icon && <span className="alert__icon">{icon}</span>}
      <div className="alert__body">
        {title && <strong className="alert__title">{title}</strong>}
        {children}
      </div>
      {dismissible && (
        <button
          type="button"
          className="alert__dismiss"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
