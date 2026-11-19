
import { lenArr } from "./lenArr.js";

/**
 * Вызывает callback для каждого элемента массива.
 *
 * Мутация: не изменяет исходный массив.
 * Возвращаемое значение: undefined.
 *
 * @param {Array} arr - Массив для перебора.
 * @param {Function} callback - Функция, вызываемая для каждого элемента.
 * @returns {undefined} Ничего не возвращает.
 * @immutable Не изменяет исходный массив.
 */
export function forEach(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const length = lenArr(arr);

  for (let i = 0; i < length; i++) {
    callback(arr[i], i, arr);
  }
}
