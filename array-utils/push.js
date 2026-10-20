
/**
 * Добавляет элемент в конец массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Новая длина массива.
 * @throws {TypeError} Если arr не массив.
 */
import { lenArr } from './lenArr.js';
export function push(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  arr[size] = item;

  return size + 1;
}
