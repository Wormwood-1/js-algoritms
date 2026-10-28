/**
 * Удаляет первый элемент массива и возвращает его.
 * Изменяет исходный массив, сдвигая остальные элементы влево.
 *
 * @param {Array} arr
 * @returns {*} Удалённый элемент или undefined, если массив пуст.
 * @throws {TypeError} Если передан не массив.
 */

export function shift(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  let size = 0;

  for (const index in arr) {
    const numericIndex = Number(index);

    if (numericIndex >= 0 && numericIndex === size) {
      size++;
    }
  }

  if (size === 0) {
    return undefined;
  }

  const firstItem = arr[0];

  for (let i = 0; i < size - 1; i++) {
    arr[i] = arr[i + 1];
  }

  delete arr[size - 1];

  return firstItem;
}