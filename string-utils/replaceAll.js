import { len } from "./len.js";

/**
 * Заменяет все вхождения подстроки, не выполняя поиск в replacement.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Искомая подстрока.
 * @param {string} replacement - Строка для замены.
 * @returns {string} Строка со всеми заменами.
 * @throws {TypeError} Если любой аргумент не является строкой.
 */
export function replaceAll(str, search, replacement) {
  if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof replacement !== "string"
  ) {
    throw new TypeError("All arguments must be strings");
  }

  const strLength = len(str);
  const searchLength = len(search);

  let result = "";
  let i = 0;

  if (searchLength === 0) {
    result += replacement;

    while (i < strLength) {
      result += str[i];
      result += replacement;
      i++;
    }

    return result;
  }

  while (i < strLength) {
    let matches = true;

    if (i + searchLength > strLength) {
      matches = false;
    } else {
      for (let j = 0; j < searchLength; j++) {
        if (str[i + j] !== search[j]) {
          matches = false;
          break;
        }
      }
    }

    if (matches) {
      result += replacement;
      i += searchLength;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}