/**
 * Добавляет элемент в начало массива.
 * Изменяет исходный массив, сдвигая существующие элементы вправо.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number}
 * @throws {TypeError} Если передан не массив.
 */ 
import { lenArr } from './lenArr.js';

export function unshift(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  for (let i = size; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = item;

  return size + 1;
}