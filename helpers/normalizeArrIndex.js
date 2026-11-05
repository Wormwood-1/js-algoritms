/**
 * Нормализует индекс для использования в массивах.
 *
 * @param {number} index - Индекс для нормализации.
 * @param {number} arrLength - Длина массива.
 * @returns {number} Нормализованный индекс.
 */
export function normalizeArrayIndex(index, arrLength) {
  if (index < 0) {
    index = arrLength + index;
  }
  if (index < 0) {
    index = 0;
  }
  if (index > arrLength) {
    index = arrLength;
  }
  return index;
}