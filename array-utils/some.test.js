
import { describe, test, expect } from "bun:test";
import { some } from "./some.js";

describe("Тесты some", () => {
  test("Должна вернуть true если хотя бы один элемент подходит", () => {
    const result = some([1, 2, 3], (x) => x > 2);

    expect(result).toBe(true);
  });

  test("Должна вернуть false если ни один элемент не подходит", () => {
    const result = some([1, 2, 3], (x) => x > 10);

    expect(result).toBe(false);
  });

  test("Должна вернуть false для пустого массива", () => {
    const result = some([], (x) => x > 0);

    expect(result).toBe(false);
  });

  test("Должна остановиться при первом true", () => {
    let callCount = 0;

    const result = some([5, 10, 15], (x) => {
      callCount++;
      return x % 5 === 0;
    });

    expect(result).toBe(true);
    expect(callCount).toBe(1);
  });

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(() => some("hello", (x) => x > 0)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(() => some([1, 2, 3], "not a function")).toThrow(TypeError);
  });
});
