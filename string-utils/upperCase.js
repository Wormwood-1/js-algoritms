import { len } from "./len.js";

export function upperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  let result = "";
  const strLength = len(str);

  for (let i = 0; i < strLength; i++) {
    const code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      result += String.fromCodePoint(code - 32);
    }
    else if (code >= 1072 && code <= 1103) {
      result += String.fromCodePoint(code - 32);
    }
    else {
      result += str[i];
    }
  }

  return result;
}