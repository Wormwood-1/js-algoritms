import { describe, expect, test } from "bun:test";
import { lowerCase } from "./lowerCase.js";

describe("Тесты lowerCase", () => {
  test("Должна перевести все заглавные латинские", () => {
    expect(lowerCase("HELLO")).toBe("hello");
  });

  test("Должна оставить строчные без изменений", () => {
    expect(lowerCase("hello")).toBe("hello");
  });

  test("Должна работать со смешанным регистром", () => {
    expect(lowerCase("Hello World")).toBe("hello world");
  });

  test("Должна не трогать пробелы", () => {
    expect(lowerCase(" HELLO 123")).toBe(" hello 123");
  });

  test("Должна не менять цифры", () => {
    expect(lowerCase("HELLO123")).toBe("hello123");
  });

  test("Должна не менять знаки", () => {
    expect(lowerCase("HELLO!@#")).toBe("hello!@#");
  });

  test("Должна вернуть пустую строку", () => {
    expect(lowerCase("")).toBe("");
  });

  test("Должна вернуть строку без изменений, если нет заглавных букв", () => {
    expect(lowerCase("123!@#")).toBe("123!@#");
  });

  test("Должна перевести кириллицу", () => {
    expect(lowerCase("ПРИВЕТ")).toBe("привет");
  });

  test("Должна работать со смесью латиницы и кириллицы", () => {
    expect(lowerCase("HELLO ПРИВЕТ")).toBe("hello привет");
  });

  test("Должна не менять уже строчные буквы, включая кириллицу", () => {
    expect(lowerCase("привет")).toBe("привет");
  });

  test("Должна выбросить TypeError, если аргумент не строка", () => {
    expect(() => lowerCase(123)).toThrow(TypeError);
  });
});