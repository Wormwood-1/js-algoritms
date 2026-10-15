function len(str) { 
  let count = 0;

  while (str[count] !== undefined) { 
    count += 1; }
    
return count; 
}

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