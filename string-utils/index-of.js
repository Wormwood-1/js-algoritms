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