import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names intelligently.
 * - Conditional classes via clsx
 * - Conflict resolution via tailwind-merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
