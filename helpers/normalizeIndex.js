/**
 * Нормализует индекс для использования в строках.
 *
 * @param {number} index - Индекс для нормализации.
 * @param {number} strLength - Длина строки.
 * @returns {number} Нормализованный индекс.
 */
export function normalizeIndex(index, strLength) {
  if (index !== index || index < 0) {
    return 0;
  }

  if (index > strLength) {
    return strLength;
  }

  let result = 0;

  while (result + 1 <= index) {
    result++;
  }

  return result;
}