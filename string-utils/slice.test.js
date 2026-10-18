import { describe, expect, test } from "bun:test";
import { slice } from "./slice.js";

describe("Тесты slice", () => {
  test("Должна вернуть 'hello' для ('hello', 0, 5)", () => {
    expect(slice("hello", 0, 5)).toBe("hello");
  });

  test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
    expect(slice("hello", 1, 4)).toBe("ell");
  });

  test("Должна вернуть 'll' для ('hello', 2, 4)", () => {
    expect(slice("hello", 2, 4)).toBe("ll");
  });

  test("Должна вернуть 'llo' без end", () => {
    expect(slice("hello", 2)).toBe("llo");
  });

  test("Должна вернуть 'h' для ('hello', 0, 1)", () => {
    expect(slice("hello", 0, 1)).toBe("h");
  });

  test("Должна вернуть 'l' для ('hello', 2, 3)", () => {
    expect(slice("hello", 2, 3)).toBe("l");
  });

  test("Должна вернуть 'o' без end при start = 4", () => {
    expect(slice("hello", 4)).toBe("o");
  });

  test("Должна вернуть 'llo' для отрицательного start", () => {
    expect(slice("hello", -3)).toBe("llo");
  });

  test("Должна вернуть 'hell' для отрицательного end", () => {
    expect(slice("hello", 0, -1)).toBe("hell");
  });

  test("Должна вернуть 'll' для обоих отрицательных индексов", () => {
    expect(slice("hello", -3, -1)).toBe("ll");
  });

  test("Должна вернуть пустую строку, если start больше end", () => {
    expect(slice("hello", 4, 1)).toBe("");
  });

  test("Должна вернуть пустую строку, если start и end за границами", () => {
    expect(slice("hello", 10, 15)).toBe("");
  });

  test("Должна ограничить отрицательный start нулём", () => {
    expect(slice("hello", -10, 3)).toBe("hel");
  });

  test("Должна вернуть пустую строку для пустой строки", () => {
    expect(slice("", 0, 1)).toBe("");
  });

  test("Должна работать с кириллицей", () => {
    expect(slice("привет", 1, 4)).toBe("рив");
  });

  test("Должна выбросить TypeError, если str не строка", () => {
    expect(() => slice(123, 0, 2)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если start не число", () => {
    expect(() => slice("hello", "1", 3)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если start не указан", () => {
    expect(() => slice("hello")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если end указан и не является числом", () => {
    expect(() => slice("hello", 0, "3")).toThrow(TypeError);
  });
});