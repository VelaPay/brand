/**
 * VelaPay Design System — Avatar (v1.0.0)
 *
 * Circular image or initials fallback.
 *
 * Usage:
 *   import { Avatar } from "@vela/brand/react";
 *   <Avatar src={user.photo} alt={user.name} fallback={initials(user.name)} />
 *   <Avatar size="sm" fallback="AC" />
 */
import { cn } from "./cn";
import type { HTMLAttributes, ReactNode } from "react";

export type AvatarSize = "sm" | "md" | "lg";

const sizeClasses: Record<AvatarSize, string> = {
  sm: "avatar-sm",
  md: "avatar-md",
  lg: "avatar-lg",
};

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarSize;
  stacked?: boolean;
}

export function Avatar({
  className,
  src,
  alt = "",
  fallback,
  size = "md",
  stacked = false,
  ...props
}: AvatarProps) {
  return (
    <span
      {...props}
      className={cn(
        "avatar",
        sizeClasses[size],
        stacked && "avatar--stacked",
        className,
      )}
    >
      {src ? <img src={src} alt={alt} /> : <span className="avatar__fallback">{fallback}</span>}
    </span>
  );
}
