import { describe, expect, test } from "bun:test";
import { trim } from "./trim.js";

describe("trim", () => {
  test("Должна удалить пробелы с обеих сторон", () => {
    expect(trim("  hello  ")).toBe("hello");
  });

  test("Должна удалить пробелы только слева", () => {
    expect(trim("  hello")).toBe("hello");
  });

  test("Должна удалить пробелы только справа", () => {
    expect(trim("hello  ")).toBe("hello");
  });

  test("Должна вернуть строку без изменений, если пробелов нет", () => {
    expect(trim("hello")).toBe("hello");
  });

  test("Должна вернуть пустую строку для строки из одних пробелов", () => {
    expect(trim("   ")).toBe("");
  });

  test("Должна вернуть пустую строку для пустой строки", () => {
    expect(trim("")).toBe("");
  });

  test("Должна сохранить пробелы внутри строки", () => {
    expect(trim("  he llo  ")).toBe("he llo");
  });

  test("Должна удалить только пробелы, сохранив табуляции и переносы строк", () => {
    expect(trim(" \t hello \n ")).toBe("\t hello \n");
  });

  test("Должна работать с кириллицей", () => {
    expect(trim("  привет  ")).toBe("привет");
  });

  test("Должна выбросить TypeError, если аргумент не строка", () => {
    expect(() => trim(123)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если аргумент равен null", () => {
    expect(() => trim(null)).toThrow(TypeError);
  });
});