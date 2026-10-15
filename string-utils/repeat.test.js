import { describe, expect, test } from "bun:test";
import { repeat } from "./repeat.js";

describe("Тестыrepeat", () => {
  test("Должна повторить 3 раза: repeat('ab', 3) → 'ababab'", () => {
    expect(repeat("ab", 3)).toBe("ababab");
  });

  test("Должна вернуть исходную строку для count = 1", () => {
    expect(repeat("hello", 1)).toBe("hello");
  });

  test("Должна вернуть пустую строку для count = 0", () => {
    expect(repeat("a", 0)).toBe("");
  });

  test("Должна вернуть пустую строку для пустой исходной строки", () => {
    expect(repeat("", 5)).toBe("");
  });

  test("Должна повторить один символ", () => {
    expect(repeat("x", 4)).toBe("xxxx");
  });

  test("Должна отбросить дробную часть count = 2.7", () => {
    expect(repeat("a", 2.7)).toBe("aa");
  });

  test("Должна вернуть пустую строку для count = 0.5", () => {
    expect(repeat("a", 0.5)).toBe("");
  });

  test("Должна вернуть пустую строку если count пропущен", () => {
    expect(repeat("a")).toBe("");
  });

  test("Должна работать с кириллицей", () => {
    expect(repeat("да", 3)).toBe("дадада");
  });

  test("Должна выбросить RangeError для отрицательного count", () => {
    expect(() => repeat("a", -1)).toThrow(RangeError);
  });

  test("Должна выбросить TypeError если count не число", () => {
    expect(() => repeat("a", "3")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если str не строка", () => {
    expect(() => repeat(123, 3)).toThrow(TypeError);
  });
});