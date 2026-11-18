import { lenArr } from './lenArr.js';
/**
 * Объединяет два массива в новый массив.
 *
 * @param {Array} arr1 - Первый массив.
 * @param {Array} arr2 - Второй массив.
 * @returns {Array} Новый массив, содержащий элементы обоих массивов.
 * @immutable Не изменяет исходные массивы.
 */ 
export function concat(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Both arguments must be arrays");
  } 
  const result = []; 
 for (let i = 0; i < lenArr(arr1); i++) { 
   result.push(arr1[i]); 
 } 
 for (let i = 0; i < lenArr(arr2); i++) { 
   result.push(arr2[i]); 
 } 
 return result; 
};