import { len } from "./len.js";

/**
 * Удаляет обычные пробелы в начале и конце строки.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка без пробелов по краям.
 * @throws {TypeError} Если аргумент не является строкой.
 */
export function trim(str) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  const strLength = len(str);

  let start = 0;
  let end = strLength;

  while (start < end && str[start] === " ") {
    start++;
  }

  while (end > start && str[end - 1] === " ") {
    end--;
  }

  let result = "";

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}