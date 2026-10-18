/**
 * Compares two strings for inequality.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {boolean} True if the strings are not equal, false otherwise.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * isNotEqual("hello", "world"); // returns true
 * isNotEqual("hello", "hello"); // returns false
 */

export function isNotEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками');
  }

  let i = 0;

  while (true) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);
    const hasA = codeA >= 0;
    const hasB = codeB >= 0;

    if (hasA !== hasB) return true;
    if (!hasA) return false;
    if (codeA !== codeB) return true;

    i++;
  }
}