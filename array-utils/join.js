
/**
 * Объединяет элементы массива в строку через указанный разделитель.
 *
 * @param {Array} arr - Массив элементов.
 * @param {string} [separator=","] - Разделитель между элементами.
 * @returns {string} Строка из объединённых элементов.
 * @immutable Не изменяет исходный массив.
 */
export function join(arr, separator = ",") {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof separator !== "string") {
    throw new TypeError("Separator must be a string");
  }

  let result = "";
  const length = lenArr(arr);

  for (let i = 0; i < length; i++) {
    if (i > 0) {
      result += separator;
    }

    if (arr[i] !== null && arr[i] !== undefined) {
      result += String(arr[i]);
    }
  }

  return result;
}
