/**
 * Проверяет, содержит ли массив указанный элемент.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {boolean} true, если элемент найден, иначе false.
 * @throws {TypeError} Если передан не массив.
 */

import { indexOf } from './indexOf.js';

export function includes(arr, item) {
  return indexOf(arr, item) !== -1;
}