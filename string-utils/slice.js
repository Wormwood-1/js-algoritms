import { len } from "./len.js";

/**
 * Извлекает подстроку с поддержкой отрицательных индексов.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (включительно).
 * @param {number} [end] - Конечный индекс (не включительно).
 * @returns {string} Извлечённая подстрока.
 * @throws {TypeError} Если str не строка, start не число или переданный end не число.
 */

export function slice(str, start, end) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  if (typeof start !== "number") {
    throw new TypeError("start must be a number");
  }

  if (end !== undefined && typeof end !== "number") {
    throw new TypeError("end must be a number");
  }

  const strLength = len(str);

  if (end === undefined) {
    end = strLength;
  }

  if (start !== start) {
    start = 0;
  }

  if (end !== end) {
    end = 0;
  }

  if (start < 0) {
    start = strLength + start;
  }

  if (end < 0) {
    end = strLength + end;
  }

  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    end = 0;
  }

  if (start > strLength) {
    start = strLength;
  }

  if (end > strLength) {
    end = strLength;
  }

  let normalizedStart = 0;
  let normalizedEnd = 0;

  while (normalizedStart + 1 <= start) {
    normalizedStart++;
  }

  while (normalizedEnd + 1 <= end) {
    normalizedEnd++;
  }

  start = normalizedStart;
  end = normalizedEnd;

  let result = "";

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}