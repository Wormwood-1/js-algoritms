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