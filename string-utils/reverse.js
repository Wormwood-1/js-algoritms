/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 * @throws {TypeError} If the argument is not a string.
 * 
 * @example 
 * reverse("hello"); // returns "olleh" 
 */

import { len } from "./len.js";

export function reverse(str) {
  if (typeof str !== "string") {
    throw new TypeError("Argument must be a string");
  }

  const strLen = len(str);
  let result = "";

  for (let i = strLen - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return result;
}