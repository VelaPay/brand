/**
 * VelaPay Design System — Pill (v1.1.0)
 *
 * Status pill for dashboard data — mono caps with leading dot.
 * Composes the `.pill` + `.pill-{tone}` CSS classes.
 *
 * Usage:
 *   <Pill tone="ok">active</Pill>
 *   <StatusPill status="settled" />
 *   <PrivacyPill kind="encrypted" />
 */
import { memo, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "./cn";
import { LockGlyph } from "./lock-glyph";

export type PillTone = "ok" | "warn" | "err" | "info" | "mute" | "priv";

const toneClass: Record<PillTone, string> = {
  ok:   "pill-ok",
  warn: "pill-warn",
  err:  "pill-err",
  info: "pill-info",
  mute: "pill-mute",
  priv: "pill-priv",
};

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: PillTone;
  children: ReactNode;
}

export const Pill = memo(function Pill({
  tone = "mute",
  className,
  children,
  ...rest
}: PillProps) {
  return (
    <span {...rest} className={cn("pill", toneClass[tone], className)}>
      {children}
    </span>
  );
});

/* ── Mandate / settlement status mapping ─────────────────────── */

export type MandateStatus =
  | "active"
  | "paused"
  | "warn"
  | "cancelled"
  | "settled"
  | "queued"
  | "failed";

const statusToTone: Record<MandateStatus, { tone: PillTone; label: string }> = {
  active:    { tone: "ok",   label: "active" },
  paused:    { tone: "warn", label: "paused" },
  warn:      { tone: "warn", label: "low balance" },
  cancelled: { tone: "mute", label: "cancelled" },
  settled:   { tone: "ok",   label: "settled" },
  queued:    { tone: "info", label: "queued" },
  failed:    { tone: "err",  label: "failed" },
};

export interface StatusPillProps {
  status: MandateStatus;
  /** Override the default label for this status. */
  label?: ReactNode;
  className?: string;
}

export const StatusPill = memo(function StatusPill({
  status,
  label,
  className,
}: StatusPillProps) {
  const m = statusToTone[status] ?? statusToTone.cancelled;
  return (
    <Pill tone={m.tone} className={className}>
      {label ?? m.label}
    </Pill>
  );
});

/* ── Privacy pill (encrypted vs public) ──────────────────────── */

export type PrivacyKind = "encrypted" | "public";

export interface PrivacyPillProps {
  kind: PrivacyKind;
  className?: string;
}

export const PrivacyPill = memo(function PrivacyPill({
  kind,
  className,
}: PrivacyPillProps) {
  if (kind === "encrypted") {
    return (
      <Pill tone="priv" className={className}>
        <LockGlyph marginLeft={-2} />
        encrypted
      </Pill>
    );
  }
  return (
    <Pill tone="mute" className={className}>
      public
    </Pill>
  );
});
