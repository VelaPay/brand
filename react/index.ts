/**
 * VelaPay Design System — React primitives barrel (v1.0.0)
 *
 * Unified visual language primitives for marketing + dashboard.
 *
 * Usage:
 *   import { Button, Card, InputField, Alert } from "@vela/brand/react";
 */

/* ── Core primitives ────────────────────────────────────────── */
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from "./button";
export { IconButton, type IconButtonProps } from "./icon-button";
export { Badge, type BadgeProps, type BadgeVariant } from "./badge";
export { Chip, type ChipProps } from "./chip";
export { Link, type LinkProps } from "./link";
export { SrOnly, type SrOnlyProps } from "./sr-only";
export { Kbd, type KbdProps } from "./kbd";

/* ── Surfaces ───────────────────────────────────────────────── */
export {
  SurfaceCard,
  PanelCard,
  type SurfaceCardProps,
  type PanelCardProps,
} from "./card";

/* ── Forms ──────────────────────────────────────────────────── */
export {
  InputField,
  Textarea,
  Select,
  InputHelper,
  type InputFieldProps,
  type TextareaProps,
  type SelectProps,
  type InputHelperProps,
} from "./input";
export { Field, type FieldProps } from "./field";
export { Switch, type SwitchProps } from "./switch";
export { Slider, type SliderProps } from "./slider";

/* ── Feedback ───────────────────────────────────────────────── */
export { Alert, type AlertProps, type AlertVariant } from "./alert";
export { Callout, type CalloutProps, type CalloutVariant } from "./callout";
export { Progress, type ProgressProps } from "./progress";
export { Tooltip, type TooltipProps } from "./tooltip";
export { EmptyState, type EmptyStateProps } from "./empty-state";

/* ── Data display ───────────────────────────────────────────── */
export { MonoValue, type MonoValueProps } from "./mono-value";

/* ── Navigation ─────────────────────────────────────────────── */
export {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  type TabsProps,
  type TabListProps,
  type TabProps,
  type TabPanelsProps,
  type TabPanelProps,
} from "./tabs";
export { Breadcrumbs, type BreadcrumbsProps, type BreadcrumbItem } from "./breadcrumbs";
export { Pagination, type PaginationProps } from "./pagination";

/* ── Overlays ───────────────────────────────────────────────── */
export {
  Menu,
  MenuItem,
  MenuLabel,
  MenuDivider,
  type MenuProps,
  type MenuItemProps,
  type MenuLabelProps,
} from "./menu";

/* ── Dashboard-specific ─────────────────────────────────────── */
export { StatCard, type StatCardProps, type DeltaDirection } from "./stat-card";
export { Avatar, type AvatarProps, type AvatarSize } from "./avatar";

/* ── Dashboard primitives (v1.1) ────────────────────────────── */
export {
  Pill,
  StatusPill,
  PrivacyPill,
  type PillProps,
  type PillTone,
  type StatusPillProps,
  type PrivacyPillProps,
  type MandateStatus,
  type PrivacyKind,
} from "./pill";
export { Redact, Money, type RedactProps, type MoneyProps } from "./redact";
export { KpiCard, type KpiCardProps } from "./kpi-card";
export { EventDot, type EventDotProps, type EventKind } from "./event-dot";

/* ── Brand identity ─────────────────────────────────────────── */
export {
  VelaMark,
  VelaLogo,
  type VelaMarkProps,
  type VelaLogoProps,
} from "./vela-logo";

/* ── Utility ────────────────────────────────────────────────── */
export { cn } from "./cn";
