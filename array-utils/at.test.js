import { describe, test, expect } from 'bun:test';
import { at } from './at.js';
import { lenArr } from './lenArr.js';

describe('Тесты at', () => { 
    test('Должна вернуть элемент по положительному индексу', () => {
  expect(at([10, 20, 30], 1)).toBe(20);
});

test('Должна вернуть первый элемент', () => {
  expect(at([10, 20, 30], 0)).toBe(10);
});

test('Должна вернуть последний элемент по отрицательному индексу', () => {
  expect(at([10, 20, 30], -1)).toBe(30);
});

test('Должна вернуть предпоследний элемент', () => {
  expect(at([10, 20, 30], -2)).toBe(20);
});

test('Должна вернуть первый элемент через -len', () => {
  expect(at([10, 20, 30], -3)).toBe(10);
});

test('Должна вернуть undefined при выходе за правую границу', () => {
  expect(at([10, 20, 30], 5)).toBe(undefined);
});

test('Должна вернуть undefined при выходе за левую границу', () => {
  expect(at([10, 20, 30], -5)).toBe(undefined);
});

test('Должна вернуть undefined для пустого массива', () => {
  expect(at([], 0)).toBe(undefined);
});

test('Должна вернуть undefined для пустого массива и отрицательного индекса', () => {
  expect(at([], -1)).toBe(undefined);
});

test('Должна работать с массивом строк', () => {
  expect(at(['a', 'b', 'c'], 2)).toBe('c');
});

test('Должна не изменять исходный массив', () => {
  const arr = [10, 20, 30];
  const sizeBefore = lenArr(arr);
  const firstBefore = arr[0];
  const secondBefore = arr[1];
  const thirdBefore = arr[2];

  at(arr, -1);

  expect(lenArr(arr)).toBe(sizeBefore);
  expect(arr[0]).toBe(firstBefore);
  expect(arr[1]).toBe(secondBefore);
  expect(arr[2]).toBe(thirdBefore);
});

test('Должна выбросить TypeError, если arr не массив', () => {
  expect(() => at('abc', 0)).toThrow(TypeError);
});

test('Должна выбросить TypeError, если index не число', () => {
  expect(() => at([1], 'a')).toThrow(TypeError);
});
});