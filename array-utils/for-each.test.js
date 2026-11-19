import { describe, test, expect } from "bun:test";
import { forEach } from "./for-each.js";

describe("Тесты forEach", () => {
  test("Должна вызвать callback для каждого элемента", () => {
    const arr = [1, 2, 3];
    const calls = [];
    let callsCount = 0;

    forEach(arr, (item, i, array) => {
      calls[callsCount] = { item, i, arr: array };
      callsCount++;
    });

    expect(calls).toEqual([
      { item: 1, i: 0, arr: [1, 2, 3] },
      { item: 2, i: 1, arr: [1, 2, 3] },
      { item: 3, i: 2, arr: [1, 2, 3] },
    ]);

    expect(callsCount).toBe(3);
  });

  test("Не должна вызывать callback для пустого массива", () => {
    const callback = () => {
      throw new Error("Callback не должен вызываться");
    };

    expect(() => forEach([], callback)).not.toThrow();
  });

  test("Должна вернуть undefined", () => {
    const result = forEach([1], () => {});

    expect(result).toBeUndefined();
  });

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(() => forEach("hello", () => {})).toThrow(TypeError);
  });

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(() => forEach([1, 2, 3], "not a function")).toThrow(TypeError);
  });
});
