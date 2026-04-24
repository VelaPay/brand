/**
 * VelaPay Design System — Callout (v1.0.2)
 *
 * Softer than <Alert/> — a tinted surface panel for inline
 * explainer content with embedded controls (toggles, choices).
 *
 * Usage:
 *   import { Callout, Switch } from "@vela/brand/react";
 *   <Callout variant="privacy" title="Encrypt sensitive fields" sub="Route amount, cadence, and merchant through Arcium's MPC network">
 *     <Switch checked={encrypted} onCheckedChange={setEncrypted} aria-label="Encrypt" />
 *   </Callout>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export type CalloutVariant = "info" | "success" | "warning" | "danger" | "privacy";

const variantClasses: Record<CalloutVariant, string> = {
  info:    "callout--info",
  success: "callout--success",
  warning: "callout--warning",
  danger:  "callout--danger",
  privacy: "callout--privacy",
};

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant;
  title?: ReactNode;
  sub?: ReactNode;
  leading?: ReactNode;
  /** Trailing slot — typically a <Switch>, <Button>, or badge. */
  children?: ReactNode;
}

export function Callout({
  className,
  variant = "info",
  title,
  sub,
  leading,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      {...props}
      className={cn("callout", variant && variantClasses[variant], className)}
    >
      {leading}
      {(title || sub) && (
        <div className="callout__body">
          {title && <strong className="callout__title">{title}</strong>}
          {sub && <p className="callout__sub">{sub}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
