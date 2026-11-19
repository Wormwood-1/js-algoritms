
import { describe, test, expect } from "bun:test";
import { filter } from "./filter.js";

describe("Тесты filter", () => {
  test("Должна отфильтровать чётные числа", () => {
    const result = filter([1, 2, 3, 4], (x) => x % 2 === 0);

    expect(result).toEqual([2, 4]);
  });

  test("Должна вернуть пустой массив если ни один элемент не прошёл проверку", () => {
    const result = filter([1, 3, 5], (x) => x > 10);

    expect(result).toEqual([]);
  });

  test("Должна вернуть все элементы если все прошли проверку", () => {
    const result = filter([2, 4, 6], (x) => x > 0);

    expect(result).toEqual([2, 4, 6]);
  });

  test("Должна вернуть новый массив, не изменяя исходный", () => {
    const arr = [1, 2, 3, 4];
    const original = [1, 2, 3, 4];

    const result = filter(arr, (x) => x % 2 === 0);

    expect(arr).toEqual(original);
    expect(result).not.toBe(arr);
  });

  test("Должна вернуть пустой массив для пустого исходного массива", () => {
    const result = filter([], (x) => x > 0);

    expect(result).toEqual([]);
  });

  test("Должна передать правильные аргументы в callback", () => {
    const arr = [10, 20, 30];
    const calls = [];
    let callsCount = 0;

    filter(arr, (item, i, array) => {
      calls[callsCount] = {
        item,
        i,
        arr: array,
      };

      callsCount++;

      return true;
    });

    expect(calls).toEqual([
      { item: 10, i: 0, arr },
      { item: 20, i: 1, arr },
      { item: 30, i: 2, arr },
    ]);
  });

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(() => filter("hello", (x) => x)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(() => filter([1, 2, 3], "not a function")).toThrow(TypeError);
  });
});
