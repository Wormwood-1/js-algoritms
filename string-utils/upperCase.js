import { len } from "./len.js";

export function upperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  let result = "";
  const strLength = len(str);

  for (let i = 0; i < strLength; i++) {
    const code = str.charCodeAt(i);

    // Латиница: a-z → A-Z
    if (code >= 97 && code <= 122) {
      result += String.fromCodePoint(code - 32);
    }
    // Кириллица: а-я → А-Я
    else if (code >= 1072 && code <= 1103) {
      result += String.fromCodePoint(code - 32);
    }
    // Остальные символы оставляем без изменений
    else {
      result += str[i];
    }
  }

  return result;
}