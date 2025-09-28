import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with conditional logic
 * @example cn("px-2", condition && "bg-red-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ClassValue = string | number | null | false | undefined;
