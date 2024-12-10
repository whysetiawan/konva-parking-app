import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const throttle = <T extends unknown[], U>(
  callback: (...args: T) => U,
  limit: number
) => {
  let lastCall = 0;
  return function (...args: T) {
    const now = Date.now();
    if (now - lastCall < limit) {
      return;
    }
    lastCall = now;
    return callback(...args);
  };
};
