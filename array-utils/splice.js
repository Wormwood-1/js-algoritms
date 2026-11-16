
import { lenArr } from "./lenArr.js";
import { normalizeArrayIndex } from "../helpers/normalizeArrayIndex.js";

/**
 * Удаляет и/или вставляет элементы в исходный массив.
 *
 * @param {Array} arr - Исходный массив, который будет изменён.
 * @param {number} start - Индекс, с которого начинается изменение.
 * @param {number} [deleteCount] - Количество удаляемых элементов.
 * @param {...*} items - Элементы, которые нужно вставить.
 * @returns {Array} Новый массив с удалёнными элементами.
 * @mutates arr
 */
export function splice(arr, start, deleteCount, ...items) {
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

  const itemsCount = lenArr(items);
  const difference = itemsCount - actualDeleteCount;

  if (difference > 0) {
    for (let i = length - 1; i >= normalizedStart + actualDeleteCount; i--) {
      arr[i + difference] = arr[i];
    }
  } else if (difference < 0) {
    for (let i = normalizedStart + actualDeleteCount; i < length; i++) {
      arr[i + difference] = arr[i];
    }

    for (let i = 0; i < -difference; i++) {
      arr.pop();
    }
  }

  for (let i = 0; i < itemsCount; i++) {
    arr[normalizedStart + i] = items[i];
  }

  return removed;
}
