
import { describe, test, expect } from "bun:test";
import { map } from "./map.js";

describe("Тесты map", () => {
  test("Должна удвоить числа", () => {
    const result = map([1, 2, 3], (x) => x * 2);

    expect(result).toEqual([2, 4, 6]);
  });

  test("Должна вернуть новый массив, не изменяя исходный", () => {
    const arr = [1, 2, 3];
    const original = [1, 2, 3];

    const result = map(arr, (x) => x * 2);

    expect(arr).toEqual(original);
    expect(result).not.toBe(arr);
  });

  test("Должна вернуть пустой массив для пустого исходного массива", () => {
    const result = map([], (x) => x * 2);

    expect(result).toEqual([]);
  });

  test("Должна передать правильные аргументы в callback", () => {
    const arr = [10, 20];
    const calls = [];
    let callsCount = 0;

    map(arr, (el, i, array) => {
      calls[callsCount] = {
        el,
        i,
        arr: array,
      };

      callsCount++;

      return el;
    });

    expect(calls).toEqual([
      { el: 10, i: 0, arr },
      { el: 20, i: 1, arr },
    ]);
  });

  test("Должна работать с преобразованием типов", () => {
    const result = map([1, 2], (x) => String(x));

    expect(result).toEqual(["1", "2"]);
  });

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(() => map("hello", (x) => x)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(() => map([1, 2, 3], "not a function")).toThrow(TypeError);
  });
});
