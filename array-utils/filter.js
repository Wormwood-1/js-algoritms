
import { lenArr } from "./lenArr.js";
import { push } from "./push.js";

/**
 * Создаёт новый массив из элементов, прошедших проверку callback.
 *
 * Мутация: не изменяет исходный массив.
 * Возвращаемое значение: новый массив отфильтрованных элементов.
 *
 * @param {Array} arr - Исходный массив.
 * @param {Function} callback - Функция-предикат для проверки элементов.
 * @returns {Array} Новый массив отфильтрованных элементов.
 * @immutable Не изменяет исходный массив.
 */
export function filter(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const result = [];
  const length = lenArr(arr);

  for (let i = 0; i < length; i++) {
    if (callback(arr[i], i, arr)) {
      push(result, arr[i]);
    }
  }

  return result;
}
