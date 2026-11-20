
import { lenArr } from "./lenArr.js";

/**
 * Проверяет, удовлетворяет ли хотя бы один элемент массива условию callback.
 *
 * Мутация: не изменяет исходный массив.
 * Возвращаемое значение: boolean.
 *
 * @param {Array} arr - Массив для проверки.
 * @param {Function} callback - Функция-предикат.
 * @returns {boolean} true, если хотя бы один элемент прошёл проверку, иначе false.
 * @immutable Не изменяет исходный массив.
 */
export function some(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const length = lenArr(arr);

  for (let i = 0; i < length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }

  return false;
}