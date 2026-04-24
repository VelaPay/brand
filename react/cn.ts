/**
 * VelaPay Design System — Shared utility.
 *
 * Lightweight `cn` (classname merge) without external deps.
 * Uses native `Array.filter` + `join` for zero-dependency class merging.
 * For Tailwind consumers that need conflict resolution, import
 * `clsx` + `tailwind-merge` locally.
 */

type ClassValue = string | undefined | null | false | readonly ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      classes.push(input);
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    }
  }
  return classes.join(" ");
}
