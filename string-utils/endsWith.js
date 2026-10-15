import { len } from "./len.js";

export function endsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  const strLen = len(str);
  const searchLen = len(search);

  if (searchLen > strLen) {
    return false;
  }

  const start = strLen - searchLen;

  for (let i = 0; i < searchLen; i += 1) {
    if (str[start + i] !== search[i]) {
      return false;
    }
  }

  return true;
}