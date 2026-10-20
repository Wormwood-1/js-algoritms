import { describe, test, expect } from 'bun:test';
import { indexOf } from './indexOf.js';
import { lenArr } from './lenArr.js';

describe('Тесты indexOf', () => {
  test('Должна найти элемент в середине', () => {
    expect(indexOf([10, 20, 30], 20)).toBe(1);
  });

  test('Должна найти первый элемент', () => {
    expect(indexOf([10, 20, 30], 10)).toBe(0);
  });

  test('Должна найти последний элемент', () => {
    expect(indexOf([10, 20, 30], 30)).toBe(2);
  });

  test('Должна вернуть -1, если элемента нет', () => {
    expect(indexOf([10, 20, 30], 99)).toBe(-1);
  });

  test('Должна вернуть индекс первого вхождения при дубликатах', () => {
    expect(indexOf([1, 2, 1, 3], 1)).toBe(0);
  });

  test('Должна вернуть -1 для пустого массива', () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  test('Должна найти строку по значению', () => {
    expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
  });

  test('Должна корректно работать с массивом строк', () => {
    expect(indexOf(['abc', 'def', 'xyz'], 'def')).toBe(1);
  });

  test('Должна различать 0 и false', () => {
    expect(indexOf([0, false], 0)).toBe(0);
    expect(indexOf([0, false], false)).toBe(1);
  });

  test('Должна найти false', () => {
    expect(indexOf([true, false], false)).toBe(1);
  });

  test('Не должна мутировать исходный массив', () => {
    const arr = [10, 20, 30];

    const sizeBefore = lenArr(arr);
    const firstBefore = arr[0];
    const secondBefore = arr[1];
    const thirdBefore = arr[2];

    const result = indexOf(arr, 20);

    expect(result).toBe(1);
    expect(lenArr(arr)).toBe(sizeBefore);
    expect(arr[0]).toBe(firstBefore);
    expect(arr[1]).toBe(secondBefore);
    expect(arr[2]).toBe(thirdBefore);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => indexOf('abc', 'b')).toThrow(TypeError);
  });
});