import { describe, test, expect } from "bun:test";
import { every } from "./every.js";

describe("Тесты every", () => {
  test("Должна вернуть true если все элементы подходят", () => {
    const result = every([2, 4, 6], (x) => x % 2 === 0);

    expect(result).toBe(true);
  });

  test("Должна вернуть false если хотя бы один элемент не подходит", () => {
    const result = every([2, 3, 4], (x) => x % 2 === 0);

    expect(result).toBe(false);
  });

  test("Должна вернуть true для пустого массива", () => {
    const result = every([], (x) => x > 0);

    expect(result).toBe(true);
  });

  test("Должна остановиться при первом false", () => {
    let callCount = 0;

    const result = every([2, 3, 4, 6], (x) => {
      callCount++;
      return x % 2 === 0;
    });

    expect(result).toBe(false);
    expect(callCount).toBe(2);
  });

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(() => every("hello", (x) => x > 0)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(() => every([1, 2, 3], "not a function")).toThrow(TypeError);
  });
});