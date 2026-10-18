/**
 * Checks if a string ends with a specified substring.
 * @param {string} str - The string to check.
 * @param {string} search - The substring to search for.
 * @returns {boolean} True if the string ends with the specified substring, false otherwise.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * endsWith("hello world", "world"); // returns true
 * endsWith("hello world", "hello"); // returns false
 */

import { len } from "./len.js";

export function endsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  const strLen = len(str);
  const searchLen = len(search);

  if (searchLen > strLen) {
    return false;
  }

  const start = strLen - searchLen;

  for (let i = 0; i < searchLen; i += 1) {
    if (str[start + i] !== search[i]) {
      return false;
    }
  }

  return true;
}