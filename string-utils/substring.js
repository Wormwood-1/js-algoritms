import { len } from "./len.js";
import { normalizeIndex } from "../helpers/normalizeIndex.js"; 

/**
 * Извлекает подстроку с нормализацией индексов.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (включительно).
 * @param {number} [end] - Конечный индекс (не включительно).
 * @returns {string} Извлечённая подстрока.
 * @throws {TypeError} Если str не строка, start не число или end не число (когда он передан).
 */
export function substring(str, start, end) {
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

  start = normalizeIndex(start, strLength);
  end = normalizeIndex(end, strLength);

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let result = "";

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}