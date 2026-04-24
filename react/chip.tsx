/**
 * VelaPay Design System — Chip (v1.0.0)
 *
 * Glassmorphic pill label with optional leading icon.
 * Non-interactive by default; pass `onDismiss` to make it closable.
 *
 * Usage:
 *   import { Chip } from "@vela/brand/react";
 *   <Chip>DEVNET</Chip>
 *   <Chip icon={<Dot />}>Active</Chip>
 *   <Chip onDismiss={() => remove(id)}>usdc</Chip>
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  icon?: ReactNode;
  onDismiss?: () => void;
  dismissLabel?: string;
}

export function Chip({
  className,
  children,
  icon,
  onDismiss,
  dismissLabel = "Remove",
  ...props
}: ChipProps) {
  return (
    <span {...props} className={cn("chip", className)}>
      {icon}
      {children}
      {onDismiss && (
        <button
          type="button"
          aria-label={dismissLabel}
          onClick={onDismiss}
          className="btn-icon"
          style={{ width: 20, minWidth: 20, minHeight: 20, marginRight: -4 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
}
