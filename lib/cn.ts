import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility: merge Tailwind classes safely.
 * Combines clsx (conditional logic) with tailwind-merge (dedup overrides).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
