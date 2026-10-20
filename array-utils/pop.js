/**
 * Удаляет последний элемент массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив.
 *
 * Важно: delete удаляет элемент, но не уменьшает длину массива.
 *
 * @param {Array} arr
 * @returns {*} Удалённый элемент или undefined для пустого массива.
 * @throws {TypeError} Если arr не массив.
 */
import { lenArr } from './lenArr.js';
export function pop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  if (size === 0) {
    return undefined;
  }

  const lastIndex = size - 1;
  const item = arr[lastIndex];

  delete arr[lastIndex];

  return item;
}
