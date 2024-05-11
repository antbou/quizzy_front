import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ky from "ky";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function api() {
  return ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
