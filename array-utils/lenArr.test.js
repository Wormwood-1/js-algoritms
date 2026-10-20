import { describe, test, expect } from "bun:test";
import { lenArr } from "./lenArr.js";

describe('Тесты lenArr', () => { 
test("Должна вернуть 3 для [1, 2, 3]", () => {
  const arr = [1, 2, 3];

  expect(lenArr(arr)).toBe(3);
});

test("Должна вернуть 0 для пустого массива", () => {
  const arr = [];

  expect(lenArr(arr)).toBe(0);
});

test("Должна вернуть 1 для массива из одного элемента", () => {
  const arr = [42];

  expect(lenArr(arr)).toBe(1);
});

test("Должна вернуть 4 для массива строк", () => {
  const arr = ["a", "b", "c", "d"];

  expect(lenArr(arr)).toBe(4);
});

test("Должна вернуть 5 для массива с разными типами", () => {
  const arr = [1, "two", true, null, 0];

  expect(lenArr(arr)).toBe(5);
});

test("Должна не мутировать исходный массив", () => {
  const arr = [1, 2, 3];
  const first = arr[0];
  const second = arr[1];
  const third = arr[2];
  const originalLength = lenArr(arr);

  lenArr(arr);

  expect(lenArr(arr)).toBe(originalLength);
  expect(arr[0]).toBe(first);
  expect(arr[1]).toBe(second);
  expect(arr[2]).toBe(third);
});

test("Должна выбросить TypeError, если передать строку", () => {
  expect(() => lenArr("hello")).toThrow(TypeError);
});

test("Должна выбросить TypeError, если передать число", () => {
  expect(() => lenArr(123)).toThrow(TypeError);
});

test("Должна выбросить TypeError, если передать объект", () => {
  expect(() => lenArr({ 0: "a" })).toThrow(TypeError);
});

test("Должна выбросить TypeError, если аргумент не передан", () => {
  expect(() => lenArr()).toThrow(TypeError);
}); 

test('Должна вернуть 3 для массива с undefined', () => {
  const arr = [10, undefined, 30];

  expect(lenArr(arr)).toBe(3);
});

test('Должна вернуть 3 для разреженного массива', () => {
  const arr = new Array(3);

  expect(lenArr(arr)).toBe(3);
});
});