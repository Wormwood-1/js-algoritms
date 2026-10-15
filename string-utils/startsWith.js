import { len } from "./len.js";

export function startsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Both arguments must be strings");
  }

  const searchLen = len(search);
  const strLen = len(str);

  if (searchLen > strLen) {
    return false;
  }

  for (let i = 0; i < searchLen; i += 1) {
    if (str[i] !== search[i]) {
      return false;
    }
  }

  return true;
}