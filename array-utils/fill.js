import { lenArr } from "./lenArr.js";

/**
 * Fills elements of an array with the specified value.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} value - The value to fill the array with.
 * @param {number} [start=0] - The starting index.
 * @param {number} [end] - The ending index (exclusive).
 * @returns {Array} The modified original array.
 * @mutates arr
 */
export function fill(arr, value, start = 0, end) {
  if (!Array.isArray(arr)) {
    throw new TypeError("arr must be an array");
  }

  if (typeof start !== "number") {
    throw new TypeError("start must be a number");
  }

  if (end !== undefined && typeof end !== "number") {
    throw new TypeError("end must be a number");
  }

  const length = lenArr(arr);
  let actualStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  let actualEnd = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));

  for (let i = actualStart; i < actualEnd; i++) {
    arr[i] = value;
  }

  return arr;
}