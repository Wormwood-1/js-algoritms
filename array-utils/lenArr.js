/**
 * Возвращает количество элементов массива.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr
 * @returns {number}
 * @throws {TypeError} Если передан не массив.
 */
export function lenArr(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  let count = 0;

  for (const item of arr) {
    count++;
  }

  return count;
}