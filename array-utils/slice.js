import { lenArr } from './lenArr.js';
import { normalizeArrayIndex } from '../helpers/normalizeArrIndex.js';
/**
 * Создаёт новый массив из указанной части исходного массива.
 *
 * @param {Array} arr - Исходный массив.
 * @param {number} start - Начальный индекс, включая его.
 * @param {number} [end] - Конечный индекс, не включая его.
 * @returns {Array} Новый массив со скопированными элементами.
 * @immutable Не изменяет исходный массив.
 */ 
export function slice(arr, start, end) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }
  if (typeof start !== "number") {
    throw new TypeError("Start argument must be a number");
  }
  if (end !== undefined && typeof end !== "number") {
    throw new TypeError("End argument must be a number");
  }
  const length = lenArr(arr); 
  const normalizedStart = normalizeArrayIndex(start, length);
  const normalizedEnd = end === undefined ? length : normalizeArrayIndex(end, length);
  const result = [];
  for (let i = normalizedStart; i < normalizedEnd; i++) {
    result.push(arr[i]);
  }
  return result;
}