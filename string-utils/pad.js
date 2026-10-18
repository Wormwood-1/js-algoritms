import { len } from "./len.js";

/**
 * Дополняет строку символами до заданной длины.
 *
 * @param {string} str - Исходная строка.
 * @param {number} length - Целевая длина.
 * @param {string} char - Строка для дополнения.
 * @param {string} side - Сторона дополнения: left, right или both.
 * @returns {string} Дополненная строка.
 */
export function pad(str, length, char, side) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  if (typeof length !== "number") {
    throw new TypeError("length must be a number");
  }

  if (typeof char !== "string") {
    throw new TypeError("char must be a string");
  }

  if (side !== "left" && side !== "right" && side !== "both") {
    throw new Error("side must be left, right or both");
  }

  const strLength = len(str);

  if (strLength >= length) {
    return str;
  }

  if (len(char) === 0) {
    throw new Error("char must not be empty");
  }

  const padding = Math.ceil(length) - strLength;

  let leftPadding = 0;
  let rightPadding = 0;

  if (side === "left") {
    leftPadding = padding;
  } else if (side === "right") {
    rightPadding = padding;
  } else {
    leftPadding = Math.floor(padding / 2);
    rightPadding = padding - leftPadding;
  }

  let left = "";
  let right = "";

  for (let i = 0; i < leftPadding; i++) {
    left += char[i % len(char)];
  }

  for (let i = 0; i < rightPadding; i++) {
    right += char[i % len(char)];
  }

  return left + str + right;
}