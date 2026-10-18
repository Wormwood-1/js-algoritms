/**
 * Checks if a string starts with a given substring.
 * @param {string} str - The string to check.
 * @param {string} search - The substring to search for.
 * @returns {boolean} True if the string starts with the substring, false otherwise.
 * @throws {TypeError} If either argument is not a string.
 * @example
 * startsWith("hello world", "hello"); // returns true
 * startsWith("hello world", "world"); // returns false
 */

import { len } from "./len.js";

export function startsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  const searchLen = len(search);
  const strLen = len(str);

  if (searchLen > strLen) {
    return false;
  }

  for (let i = 0; i < searchLen; i += 1) {
    if (str[i] !== search[i]) {
      return false;
    }
  }

  return true;
}