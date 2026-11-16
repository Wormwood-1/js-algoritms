
import { describe, test, expect } from "bun:test";
import { splice } from "./splice.js";

describe("Тесты splice — удаление", () => {
  test("Должна удалить элементы из середины", () => {
    const arr = [1, 2, 3, 4];

    const result = splice(arr, 1, 2);

    expect(result).toEqual([2, 3]);
    expect(arr).toEqual([1, 4]);
  });

  test("Должна удалить элемент с начала", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 0, 1);

    expect(result).toEqual([1]);
    expect(arr).toEqual([2, 3]);
  });

  test("Должна удалить элемент с конца", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 2, 1);

    expect(result).toEqual([3]);
    expect(arr).toEqual([1, 2]);
  });

  test("Должна удалить всё от start до конца без deleteCount", () => {
    const arr = [1, 2, 3, 4];

    const result = splice(arr, 2);

    expect(result).toEqual([3, 4]);
    expect(arr).toEqual([1, 2]);
  });

  test("Должна вернуть пустой массив при deleteCount равном нулю", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 1, 0);

    expect(result).toEqual([]);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("Должна поддерживать отрицательный start", () => {
    const arr = [1, 2, 3, 4];

    const result = splice(arr, -2, 1);

    expect(result).toEqual([3]);
    expect(arr).toEqual([1, 2, 4]);
  });

  test("Должна ограничивать deleteCount оставшимися элементами", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 1, 5);

    expect(result).toEqual([2, 3]);
    expect(arr).toEqual([1]);
  });

  test("Должна вернуть пустой массив, если start больше длины массива", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 5, 1);

    expect(result).toEqual([]);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("Должна нормализовать слишком отрицательный start", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, -10, 1);

    expect(result).toEqual([1]);
    expect(arr).toEqual([2, 3]);
  });

  test("Не должна удалять элементы при отрицательном deleteCount", () => {
    const arr = [1, 2, 3];

    const result = splice(arr, 1, -1);

    expect(result).toEqual([]);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("Должна выбросить TypeError, если arr не массив", () => {
    expect(() => splice("hello", 0, 1)).toThrow(TypeError);
  });


test("Должна вставить элементы на место удалённых", () => {
  const arr = [1, 2, 3];

  const result = splice(arr, 1, 1, "a", "b");

  expect(result).toEqual([2]);
  expect(arr).toEqual([1, "a", "b", 3]);
});

test("Должна вставить элементы без удаления", () => {
  const arr = [1, 2, 3];

  const result = splice(arr, 1, 0, "x");

  expect(result).toEqual([]);
  expect(arr).toEqual([1, "x", 2, 3]);
});

test("Должна вставить элементы в начало", () => {
  const arr = [2, 3];

  const result = splice(arr, 0, 0, 0, 1);

  expect(result).toEqual([]);
  expect(arr).toEqual([0, 1, 2, 3]);
});

test("Должна вставить элементы в конец", () => {
  const arr = [1, 2];

  const result = splice(arr, 2, 0, 3, 4);

  expect(result).toEqual([]);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test("Должна вставить элементы по отрицательному start", () => {
  const arr = [1, 2, 3];

  const result = splice(arr, -1, 0, "x");

  expect(result).toEqual([]);
  expect(arr).toEqual([1, 2, "x", 3]);
});

test("Должна заменить несколько элементов одним", () => {
  const arr = [1, 2, 3];

  const result = splice(arr, 0, 2, "a");

  expect(result).toEqual([1, 2]);
  expect(arr).toEqual(["a", 3]);
});

});
