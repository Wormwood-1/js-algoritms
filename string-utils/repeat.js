/**
 * Repeats a string a specified number of times.
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times to repeat the string.
 * @returns {string} The repeated string.
 * @throws {TypeError} If the arguments are not of the correct type.
 * @example
 * repeat("hello", 3); // returns "hellohellohello"
 */
export function repeat(str, count) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string");
  }

  if (count === undefined) {
    return "";
  }

  if (typeof count !== "number") {
    throw new TypeError("count must be a number");
  }

  if (count < 0) {
    throw new RangeError("count must not be negative");
  }

  if (count === Infinity) {
    throw new RangeError("count must be finite");
  }

  let result = "";

  for (let i = 0; i + 1 <= count; i += 1) {
    result += str;
  }

  return result;
}