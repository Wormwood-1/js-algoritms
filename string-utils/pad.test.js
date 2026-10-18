import { describe, expect, test } from "bun:test";
import { pad } from "./pad.js";

describe("pad", () => {
  test("Должна дополнить слева", () => {
    expect(pad("hi", 5, "-", "left")).toBe("---hi");
  });

  test("Должна дополнить справа", () => {
    expect(pad("hi", 5, "-", "right")).toBe("hi---");
  });

  test("Должна дополнить с обеих сторон (чётное количество)", () => {
    expect(pad("hi", 6, "-", "both")).toBe("--hi--");
  });

  test("Должна дополнить с обеих сторон (нечётное количество, лишний символ справа)", () => {
    expect(pad("hi", 5, "-", "both")).toBe("-hi--");
  });

  test("Должна вернуть строку без изменений, если длина уже достаточная", () => {
    expect(pad("hello", 5, "-", "left")).toBe("hello");
  });

  test("Должна вернуть строку без изменений, если она длиннее целевой", () => {
    expect(pad("hello", 3, "-", "left")).toBe("hello");
  });

  test("Должна работать с пробелами", () => {
    expect(pad("a", 3, " ", "right")).toBe("a  ");
  });

  test("Должна работать с пустой исходной строкой", () => {
    expect(pad("", 4, "x", "both")).toBe("xxxx");
  });

  test("Должна вернуть пустую строку при нулевой целевой длине", () => {
    expect(pad("", 0, "-", "left")).toBe("");
  });

  test("Должна дополнить многосимвольной строкой слева", () => {
    expect(pad("hi", 7, "ab", "left")).toBe("ababahi");
  });

  test("Должна дополнить многосимвольной строкой справа", () => {
    expect(pad("hi", 7, "ab", "right")).toBe("hiababa");
  });

  test("Должна выбросить ошибку при неверном side", () => {
    expect(() => pad("a", 3, "-", "top")).toThrow();
  });

  test("Должна выбросить TypeError, если str не строка", () => {
    expect(() => pad(123, 3, "-", "left")).toThrow(TypeError);
  });
});