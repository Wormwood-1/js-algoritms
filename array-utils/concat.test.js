import { describe, test, expect } from "bun:test";
import { concat } from "./concat.js";

describe("Тесты concat", () => {
  test("Должна объединить два непустых массива", () => {
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("Должна вернуть копию первого массива, если второй пуст", () => {
    expect(concat([1, 2], [])).toEqual([1, 2]);
  });

  test("Должна вернуть копию второго массива, если первый пуст", () => {
    expect(concat([], [3, 4])).toEqual([3, 4]);
  });

  test("Должна вернуть пустой массив для двух пустых массивов", () => {
    expect(concat([], [])).toEqual([]);
  });

  test("Должна вернуть новый массив, а не ссылку на исходный", () => {
    const arr1 = [1];
    const arr2 = [2];
    const result = concat(arr1, arr2);

    expect(result !== arr1).toBe(true);
    expect(result !== arr2).toBe(true);
  });

  test("Не должна изменять исходный arr1", () => {
    const arr1 = [1, 2];
    const originalArr1 = [1, 2];

    concat(arr1, [3, 4]);

    expect(arr1).toEqual(originalArr1);
  });

  test("Не должна изменять исходный arr2", () => {
    const arr2 = [3, 4];
    const originalArr2 = [3, 4];

    concat([1, 2], arr2);

    expect(arr2).toEqual(originalArr2);
  });

  test("Должна работать с массивами строк", () => {
    expect(concat(["a"], ["b", "c"])).toEqual(["a", "b", "c"]);
  });

  test("Должна работать с массивами смешанных типов", () => {
    expect(concat([1, "hello"], [true, null])).toEqual([1, "hello", true, null]);
  });

  test("Должна выбросить TypeError, если arr1 не массив", () => {
    expect(() => concat("hello", [1, 2])).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если arr2 не массив", () => {
    expect(() => concat([1, 2], "hello")).toThrow(TypeError);
  });
});