import { describe, expect, test } from "bun:test";
import { upperCase } from "./upperCase.js";

describe("Тесты upperCase", () => {
  test("Должна перевести все строчные латинские", () => {
    expect(upperCase("hello")).toBe("HELLO");
  });

  test("Должна оставить заглавные без изменений", () => {
    expect(upperCase("HELLO")).toBe("HELLO");
  });

  test("Должна работать со смешанным регистром", () => {
    expect(upperCase("Hello World")).toBe("HELLO WORLD");
  });

  test("Должна не трогать пробелы", () => {
    expect(upperCase(" hello 123")).toBe(" HELLO 123");
  });

  test("Должна не менять цифры", () => {
    expect(upperCase("hello123")).toBe("HELLO123");
  });

  test("Должна не менять знаки", () => {
    expect(upperCase("hello!@#")).toBe("HELLO!@#");
  });

  test("Должна вернуть пустую строку", () => {
    expect(upperCase("")).toBe("");
  });

  test("Должна вернуть строку без изменений, если нет строчных букв", () => {
    expect(upperCase("123!@#")).toBe("123!@#");
  });

  test("Должна перевести кириллицу", () => {
    expect(upperCase("привет")).toBe("ПРИВЕТ");
  });

  test("Должна работать со смесью латиницы и кириллицы", () => {
    expect(upperCase("hello привет")).toBe("HELLO ПРИВЕТ");
  });

  test("Должна не менять уже заглавные буквы, включая кириллицу", () => {
    expect(upperCase("ПРИВЕТ")).toBe("ПРИВЕТ");
  });

  test("Должна выбросить TypeError, если аргумент не строка", () => {
    expect(() => upperCase(123)).toThrow(TypeError);
  });
});