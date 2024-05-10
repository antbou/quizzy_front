import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ky from "ky";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function api() {
  return ky.create({
    prefixUrl: "https://localhost/api",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    throwHttpErrors: false,
  });
}
