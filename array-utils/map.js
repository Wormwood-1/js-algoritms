
import { lenArr } from "./lenArr.js";
import { push } from "./push.js";

/**
 * Создаёт новый массив из результатов вызова callback
 * для каждого элемента исходного массива.
 *
 * Мутация: не изменяет исходный массив.
 * Возвращаемое значение: новый массив.
 *
 * @param {Array} arr - Исходный массив.
 * @param {Function} callback - Функция преобразования элементов.
 * @returns {Array} Новый массив с результатами callback.
 * @immutable Не изменяет исходный массив.
 */
export function map(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const result = [];
  const length = lenArr(arr);

  for (let i = 0; i < length; i++) {
    push(result, callback(arr[i], i, arr));
  }

  return result;
}

