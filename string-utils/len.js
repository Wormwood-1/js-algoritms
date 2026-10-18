/**
 * Returns the length of a string.
 * @param {string} str - The string to measure.
 * @returns {number} The length of the string.
 * @throws {TypeError} If the argument is not a string.
 * 
 * @example 
 * len("hello"); // returns 5 
 */ 
export function len(str) {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}