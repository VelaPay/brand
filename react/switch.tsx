/**
 * VelaPay Design System — Switch (v1.0.0)
 *
 * On/off toggle. Controlled via `checked` + `onCheckedChange`, or
 * uncontrolled via `defaultChecked`.
 *
 * Usage:
 *   import { Switch } from "@vela/brand/react";
 *   <Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Enable X" />
 */
import { cn } from "./cn";
import { useState, type ButtonHTMLAttributes } from "react";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "type"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Required for screen readers unless the switch has a visible label via aria-labelledby. */
  "aria-label"?: string;
}

export function Switch({
  className,
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  ...props
}: SwitchProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const controlled = checkedProp !== undefined;
  const checked = controlled ? checkedProp! : internal;

  const toggle = () => {
    const next = !checked;
    if (!controlled) setInternal(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={(e) => {
        toggle();
        props.onClick?.(e);
      }}
      className={cn("switch", className)}
    >
      <span className="switch__thumb" />
    </button>
  );
}
