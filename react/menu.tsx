/**
 * VelaPay Design System — Menu primitives (v1.0.0)
 *
 * Low-level semantic primitives for popover menus. This package
 * intentionally ships no positioning engine — compose with
 * Floating UI, Radix Popover, or your own anchor logic in the
 * consuming app. These primitives supply the visual shell only.
 *
 * Usage:
 *   import { Menu, MenuItem, MenuLabel, MenuDivider } from "@vela/brand/react";
 *   <Menu>
 *     <MenuLabel>Actions</MenuLabel>
 *     <MenuItem onSelect={copy}>Copy ID</MenuItem>
 *     <MenuItem onSelect={duplicate}>Duplicate</MenuItem>
 *     <MenuDivider />
 *     <MenuItem danger onSelect={remove}>Delete</MenuItem>
 *   </Menu>
 */
import { cn } from "./cn";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <div {...props} role="menu" className={cn("menu", className)}>
      {children}
    </div>
  );
}

export interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  onSelect?: () => void;
  danger?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export function MenuItem({
  className,
  onSelect,
  danger,
  disabled,
  children,
  ...props
}: MenuItemProps) {
  return (
    <button
      {...props}
      type="button"
      role="menuitem"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      data-danger={danger ? "true" : undefined}
      onClick={(e) => {
        if (!disabled) onSelect?.();
        props.onClick?.(e);
      }}
      className={cn("menu-item", className)}
    >
      {children}
    </button>
  );
}

export interface MenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function MenuLabel({ className, children, ...props }: MenuLabelProps) {
  return (
    <div {...props} className={cn("menu-label", className)}>
      {children}
    </div>
  );
}

export function MenuDivider(props: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} className={cn("menu-divider", props.className)} />;
}
