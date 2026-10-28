/**
 * Возвращает индекс последнего вхождения элемента в массиве.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Индекс последнего вхождения или -1, если элемент не найден.
 * @throws {TypeError} Если передан не массив.
 */

import { lenArr } from './lenArr.js';

export function lastIndexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  for (let i = size - 1; i >= 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}