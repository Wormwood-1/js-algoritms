/**
 * Возвращает элемент массива по индексу.
 * Поддерживает отрицательные индексы.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {number} index
 * @returns {*} Элемент массива или undefined.
 * @throws {TypeError} Если arr не массив или index не число.
 */
import { lenArr } from './lenArr.js';
export function at(arr, index) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  if (typeof index !== 'number') {
    throw new TypeError('Индекс должен быть числом');
  }

  const size = lenArr(arr);
  let actualIndex = index;

  if (index < 0) {
    actualIndex = size + index;
  }

  if (actualIndex < 0 || actualIndex >= size) {
    return undefined;
  }

  return arr[actualIndex];
}
