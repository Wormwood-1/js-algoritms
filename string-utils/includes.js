import { indexOf } from "./index-of.js";

export function includes(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  return indexOf(str, search) !== -1;
}