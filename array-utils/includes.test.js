import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';
import { lenArr } from './lenArr.js';

describe('Тесты includes', () => {
  test('Должна вернуть true, если элемент есть', () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
  });

  test('Должна вернуть false, если элемента нет', () => {
    expect(includes([1, 2, 3], 9)).toBe(false);
  });

  test('Должна вернуть false для пустого массива', () => {
    expect(includes([], 1)).toBe(false);
  });

  test('Должна вернуть true для первого элемента', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  test('Должна вернуть true для последнего элемента', () => {
    expect(includes([1, 2, 3], 3)).toBe(true);
  });

  test('Должна найти строку', () => {
    expect(includes(['a', 'b'], 'b')).toBe(true);
  });

  test('Должна различать 0 и false', () => {
    expect(includes([0], false)).toBe(false);
    expect(includes([0], 0)).toBe(true);
  });

  test('Не должна мутировать исходный массив', () => {
    const arr = [1, 2, 3];

    const sizeBefore = lenArr(arr);
    const firstBefore = arr[0];
    const secondBefore = arr[1];
    const thirdBefore = arr[2];

    const result = includes(arr, 2);

    expect(result).toBe(true);
    expect(lenArr(arr)).toBe(sizeBefore);
    expect(arr[0]).toBe(firstBefore);
    expect(arr[1]).toBe(secondBefore);
    expect(arr[2]).toBe(thirdBefore);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => includes('abc', 'b')).toThrow(TypeError);
  });
});