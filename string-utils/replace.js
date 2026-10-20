import { len } from "./len.js";

/**
 * Заменяет первое вхождение подстроки.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Искомая подстрока.
 * @param {string} replacement - Строка для замены.
 * @returns {string} Строка с заменённым первым вхождением.
 * @throws {TypeError} Если любой аргумент не является строкой.
 */
export function replace(str, search, replacement) {
  if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof replacement !== "string"
  ) {
    throw new TypeError("All arguments must be strings");
  }

  const strLength = len(str);
  const searchLength = len(search);

  if (searchLength === 0) {
    return replacement + str;
  }

  for (let i = 0; i <= strLength - searchLength; i++) {
    let matches = true;

    for (let j = 0; j < searchLength; j++) {
      if (str[i + j] !== search[j]) {
        matches = false;
        break;
      }
    }

    if (matches) {
      let result = "";

      for (let j = 0; j < i; j++) {
        result += str[j];
      }

      result += replacement;

      for (let j = i + searchLength; j < strLength; j++) {
        result += str[j];
      }

      return result;
    }
  }

  return str;
}