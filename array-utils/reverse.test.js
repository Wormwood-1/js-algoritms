import { describe, expect, test } from "bun:test";
import { reverse } from "./reverse.js";

describe("Тесты reverse", () => {
  test("reverses an array with an odd number of elements", () => {
    const arr = [1, 2, 3];

    reverse(arr);

    expect(arr).toEqual([3, 2, 1]);
  });

  test("reverses an array with an even number of elements", () => {
    const arr = [1, 2, 3, 4];

    reverse(arr);

    expect(arr).toEqual([4, 3, 2, 1]);
  });

  test("reverses an array with two elements", () => {
    const arr = [1, 2];

    reverse(arr);

    expect(arr).toEqual([2, 1]);
  });

  test("returns the same array reference", () => {
    const arr = [1, 2, 3];

    const result = reverse(arr);

    expect(result).toBe(arr);
  });

  test("handles an array with one element", () => {
    const arr = [42];

    reverse(arr);

    expect(arr).toEqual([42]);
  });

  test("handles an empty array", () => {
    const arr = [];

    const result = reverse(arr);

    expect(arr).toEqual([]);
    expect(result).toBe(arr);
  });

  test("reverses an array of strings", () => {
    const arr = ["a", "b", "c"];

    reverse(arr);

    expect(arr).toEqual(["c", "b", "a"]);
  });

  test("reverses an array with mixed types", () => {
    const arr = [1, "two", null];

    reverse(arr);

    expect(arr).toEqual([null, "two", 1]);
  });

  test("double reverse restores the original order", () => {
    const arr = [1, 2, 3];

    reverse(reverse(arr));

    expect(arr).toEqual([1, 2, 3]);
  });

  test("throws TypeError when arr is not an array", () => {
    expect(() => reverse("hello")).toThrow(TypeError);
  });
});