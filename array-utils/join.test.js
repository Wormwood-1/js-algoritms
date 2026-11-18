
import { describe, test, expect } from "bun:test";
import { join } from "./join.js";

describe("Тесты join", () => {
  test("Должна склеить с разделителем по умолчанию", () => {
    expect(join([1, 2, 3])).toBe("1,2,3");
  });

  test("Должна склеить с явным разделителем", () => {
    expect(join([1, 2, 3], "-")).toBe("1-2-3");
  });

  test("Должна склеить с пробелом", () => {
    expect(join(["a", "b", "c"], " ")).toBe("a b c");
  });

  test("Должна склеить с пустым разделителем", () => {
    expect(join(["a", "b", "c"], "")).toBe("abc");
  });

  test("Должна вернуть пустую строку для пустого массива", () => {
    expect(join([])).toBe("");
  });

  test("Должна вернуть пустую строку для пустого массива с разделителем", () => {
    expect(join([], "-")).toBe("");
  });

  test("Должна работать с многосимвольным разделителем", () => {
    expect(join(["a", "b"], "--")).toBe("a--b");
  });

  test("Должна вернуть строку из одного элемента", () => {
    expect(join([42], ",")).toBe("42");
  });

  test("Должна обрабатывать null и undefined как пустые строки", () => {
    expect(join([1, undefined, null, 3])).toBe("1,,,3");
  });

  test("Должна преобразовывать булевы значения в строки", () => {
    expect(join([1, true, false])).toBe("1,true,false");
  });

  test("Не должна изменять исходный массив", () => {
    const arr = [1, 2, 3];
    const originalArr = [1, 2, 3];

    join(arr, "-");

    expect(arr).toEqual(originalArr);
  });

  test("Должна выбросить TypeError, если arr не массив", () => {
    expect(() => join("hello")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если separator не строка", () => {
    expect(() => join([1, 2, 3], 42)).toThrow(TypeError);
  });
});
