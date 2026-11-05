import { describe, test, expect } from "bun:test";
import { slice } from "./slice.js";

describe("Тесты slice", () => {
  test("Должна скопировать весь массив", () => {
    expect(slice([1, 2, 3], 0, 3)).toEqual([1, 2, 3]);
  });

  test("Должна скопировать часть с середины", () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  });

  test("Должна скопировать от start до конца без end", () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  test("Должна поддерживать отрицательный start", () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  test("Должна поддерживать отрицательный end", () => {
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
  });

  test("Должна работать с обоими отрицательными индексами", () => {
    expect(slice([1, 2, 3, 4], -3, -1)).toEqual([2, 3]);
  });

  test("Должна вернуть пустой массив, если start равен end", () => {
    expect(slice([1, 2, 3], 2, 2)).toEqual([]);
  });

  test("Должна вернуть пустой массив для пустого исходного массива", () => {
    expect(slice([], 0, 1)).toEqual([]);
  });

  test("Не должна изменять исходный массив", () => {
    const arr = [1, 2, 3];
    const originalArr = [1, 2, 3];

    slice(arr, 1, 2);

    expect(arr).toEqual(originalArr);
  });

  test("Должна вернуть новый массив, а не ссылку на исходный", () => {
    const arr = [1, 2, 3];
    const result = slice(arr, 0, 3);

    expect(result !== arr).toBe(true);
  });

  test("Должна нормализовать start больше длины массива", () => {
    expect(slice([1, 2, 3], 5, 7)).toEqual([]);
  });

  test("Должна нормализовать end больше длины массива", () => {
    expect(slice([1, 2, 3], 0, 10)).toEqual([1, 2, 3]);
  });

  test("Должна нормализовать отрицательный start за границами массива", () => {
    expect(slice([1, 2, 3], -10, 2)).toEqual([1, 2]);
  });

  test("Должна нормализовать отрицательный end за границами массива", () => {
    expect(slice([1, 2, 3], 0, -10)).toEqual([]);
  });

  test("Должна работать с массивом строк", () => {
    expect(slice(["a", "b", "c"], 1, 3)).toEqual(["b", "c"]);
  });

  test("Должна выбросить TypeError, если arr не массив", () => {
    expect(() => slice("hello", 0, 2)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если start не число", () => {
    expect(() => slice([1, 2, 3], "1", 2)).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если end передан и не число", () => {
    expect(() => slice([1, 2, 3], 0, "2")).toThrow(TypeError);
  });
});