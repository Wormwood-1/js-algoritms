import { describe, test, expect } from "bun:test";
import { normalizeArrayIndex } from "./normalizeArrayIndex.js";

describe("Тесты normalizeArrayIndex", () => {
  test("Должна возвращать положительный индекс без изменений", () => {
    expect(normalizeArrayIndex(2, 5)).toBe(2);
  });

  test("Должна преобразовать -1 в индекс последнего элемента", () => {
    expect(normalizeArrayIndex(-1, 5)).toBe(4);
  });

  test("Должна преобразовать -2 в индекс предпоследнего элемента", () => {
    expect(normalizeArrayIndex(-2, 5)).toBe(3);
  });

  test("Должна преобразовать отрицательный индекс, равный длине массива, в 0", () => {
    expect(normalizeArrayIndex(-5, 5)).toBe(0);
  });

  test("Должна ограничить слишком большой отрицательный индекс нулём", () => {
    expect(normalizeArrayIndex(-10, 5)).toBe(0);
  });

  test("Должна ограничить индекс, превышающий длину массива", () => {
    expect(normalizeArrayIndex(8, 5)).toBe(5);
  });

  test("Должна возвращать 0 для индекса 0", () => {
    expect(normalizeArrayIndex(0, 5)).toBe(0);
  });

  test("Должна возвращать длину массива для индекса, равного длине", () => {
    expect(normalizeArrayIndex(5, 5)).toBe(5);
  });

  test("Должна корректно работать с пустым массивом", () => {
    expect(normalizeArrayIndex(0, 0)).toBe(0);
  });

  test("Должна возвращать 0 для отрицательного индекса пустого массива", () => {
    expect(normalizeArrayIndex(-3, 0)).toBe(0);
  });
});