/**
 * Compares two strings for equality.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {boolean} True if the strings are equal, false otherwise.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * isEqual("hello", "world"); // returns false
 * isEqual("hello", "hello"); // returns true
 */
export function isEqual(a, b) {
  let i = 0;

  while (true) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);
    const hasA = codeA >= 0;
    const hasB = codeB >= 0;

    if (hasA !== hasB) return false;
    if (!hasA) return true;
    if (codeA !== codeB) return false;

    i++;
  }
}