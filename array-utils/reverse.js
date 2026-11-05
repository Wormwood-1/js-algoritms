import { lenArr } from "./lenArr.js";

/**
 * Reverses the elements of an array in place.
 *
 * @param {Array} arr - The array to reverse.
 * @returns {Array} The same array in reversed order.
 * @mutates arr
 */
export function reverse(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("arr must be an array");
  }

  const length = lenArr(arr);
  for (let i = 0; i < length / 2; i++) {
    [arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]];
  }

  return arr;
}