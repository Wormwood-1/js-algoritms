/**
 * Checks if a string includes a given substring.
 * @param {string} str - The string to search within.
 * @param {string} search - The substring to search for.
 * @returns {boolean} True if the substring is found, false otherwise.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * includes("hello world", "world"); // returns true
 * includes("hello world", "foo"); // returns false
 */

import { indexOf } from "./index-of.js";

export function includes(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  return indexOf(str, search) !== -1;
}