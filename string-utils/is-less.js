/**
 * Compares two strings for less than.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {boolean} True if the first string is less than the second, false otherwise.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * isLess("hello", "world"); // returns true
 * isLess("hello", "hello"); // returns false
 */
export function isLess(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками');
  }

  let i = 0;

  while (true) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);
    const hasA = codeA >= 0;
    const hasB = codeB >= 0;

    if (!hasA || !hasB) {
      return !hasA && hasB;
    }

    if (codeA !== codeB) {
      return codeA < codeB;
    }

    i++;
  }
}