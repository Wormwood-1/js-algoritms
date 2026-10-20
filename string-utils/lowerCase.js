import { len } from "./len.js";

export function lowerCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  let result = "";
  const strLength = len(str);

  for (let i = 0; i < strLength; i++) {
    const code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCodePoint(code + 32);
    }
    else if (code >= 1040 && code <= 1071) {
      result += String.fromCodePoint(code + 32);
    }
    else {
      result += str[i];
    }
  }

  return result;
}