import { describe, expect, test } from "bun:test";
import { substring } from "./substring.js";

describe(" Тесты substring", () => {
  test("Должна вернуть 'hello' для ('hello', 0, 5)", () => {
    expect(substring("hello", 0, 5)).toBe("hello");
  });

  test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
    expect(substring("hello", 1, 4)).toBe("ell");
  });

  test("Должна вернуть 'h' для одного символа в начале", () => {
    expect(substring("hello", 0, 1)).toBe("h");
  });

  test("Должна вернуть 'e' при обмене границ ('hello', 2, 1)", () => {
    expect(substring("hello", 2, 1)).toBe("e");
  });

  test("Должна вернуть 'o' для одного символа в конце", () => {
    expect(substring("hello", 4, 5)).toBe("o");
  });

  test("Должна обрезать end до длины строки", () => {
    expect(substring("hello", 0, 10)).toBe("hello");
  });

  test("Должна вернуть подстроку до конца строки, если end не указан", () => {
    expect(substring("hello", 2)).toBe("llo");
  });

  test("Должна поменять start и end местами, если start > end", () => {
    expect(substring("hello", 4, 1)).toBe("ell");
  });

  test("Должна привести отрицательный start к 0", () => {
    expect(substring("hello", -2, 3)).toBe("hel");
  });

  test("Должна привести отрицательный end к 0", () => {
    expect(substring("hello", 3, -1)).toBe("hel");
  });

  test("Должна привести NaN к 0", () => {
    expect(substring("hello", NaN, 3)).toBe("hel");
  });

  test("Должна вернуть пустую строку, если start равен длине строки", () => {
    expect(substring("hello", 5, 7)).toBe("");
  });

  test("Должна вернуть пустую строку для пустой исходной строки", () => {
    expect(substring("", 0, 1)).toBe("");
  });

  test("Должна работать с кириллицей", () => {
    expect(substring("привет", 1, 4)).toBe("рив");
  });

  test("Должна выбросить TypeError, если str не строка", () => {
    expect(() => substring(123, 0, 2)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если start не указан", () => {
    expect(() => substring("hello")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если start не число", () => {
    expect(() => substring("hello", "1", 3)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если end не число", () => {
    expect(() => substring("hello", 0, "3")).toThrow(TypeError);
  });
});