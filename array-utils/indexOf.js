/**
 * Возвращает индекс первого вхождения элемента в массиве.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Индекс первого вхождения или -1, если элемент не найден.
 * @throws {TypeError} Если передан не массив.
 */

import { lenArr } from './lenArr.js';

export function indexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  for (let i = 0; i < size; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}