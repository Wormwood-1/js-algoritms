/**
 * Returns the index of the first occurrence of a substring in a string.
 * @param {string} str - The string to search in.
 * @param {string} search - The substring to search for.
 * @returns {number} The index of the first occurrence of the substring, or -1 if not found.
 * @throws {TypeError} If the arguments are not strings.
 * @example
 * indexOf("hello world", "world"); // returns 6
 * indexOf("hello world", "foo"); // returns -1
 */

import { len } from "./len.js";

export function indexOf(str, search) { 
  if (typeof str !== "string" || typeof search !== "string") { 
    throw new TypeError("Оба аргумента должны быть строками"); 
  }

 const strLen = len(str); 
 const searchLen = len(search);
 for (let i = 0; i <= strLen - searchLen; i += 1) { 
  let j = 0;
  
  while (j < searchLen && str[i + j] === search[j]) {
  j += 1;
}
 
if (j === searchLen) {
  return i;
  }
}
return -1; 
};