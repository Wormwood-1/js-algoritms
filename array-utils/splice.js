
import { lenArr } from "./lenArr.js";
import { normalizeArrayIndex } from "../helpers/normalizeArrayIndex.js";

/**
 * Удаляет указанное количество элементов из массива.
 *
 * @param {Array} arr - Исходный массив, который будет изменён.
 * @param {number} start - Индекс, с которого начинается удаление.
 * @param {number} [deleteCount] - Количество удаляемых элементов.
 * @returns {Array} Новый массив с удалёнными элементами.
 * @mutates arr
 */
export function splice(arr, start, deleteCount) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof start !== "number") {
    throw new TypeError("Start argument must be a number");
  }

  if (deleteCount !== undefined && typeof deleteCount !== "number") {
    throw new TypeError("DeleteCount must be a number");
  }

  const length = lenArr(arr);
  const normalizedStart = normalizeArrayIndex(start, length);

  let actualDeleteCount;

  if (deleteCount === undefined) {
    actualDeleteCount = length - normalizedStart;
  } else if (deleteCount < 0) {
    actualDeleteCount = 0;
  } else {
    actualDeleteCount = deleteCount;
  }

  const remainingCount = length - normalizedStart;

  if (actualDeleteCount > remainingCount) {
    actualDeleteCount = remainingCount;
  }

  const removed = [];

  for (let i = 0; i < actualDeleteCount; i++) {
    removed.push(arr[normalizedStart + i]);
  }

  for (let i = normalizedStart; i < length - actualDeleteCount; i++) {
    arr[i] = arr[i + actualDeleteCount];
  }

  for (let i = 0; i < actualDeleteCount; i++) {
    arr.pop();
  }

  return removed;
}
