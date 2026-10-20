import { describe, test, expect } from 'bun:test';
import { lastIndexOf } from './lastIndexOf.js';
import { lenArr } from './lenArr.js';

describe('Тесты lastIndexOf', () => {
  test('Должна вернуть индекс последнего вхождения при дубликатах', () => {
    expect(lastIndexOf([1, 2, 1, 3], 1)).toBe(2);
  });

  test('Должна вернуть -1, если элемента нет', () => {
    expect(lastIndexOf([1, 2, 3], 9)).toBe(-1);
  });

  test('Должна вернуть 0 для единственного вхождения в начале', () => {
    expect(lastIndexOf([5, 6, 7], 5)).toBe(0);
  });

  test('Должна вернуть последний индекс для элемента в конце', () => {
    expect(lastIndexOf([5, 6, 7], 7)).toBe(2);
  });

  test('Должна вернуть -1 для пустого массива', () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  test('Должна найти символ', () => {
    expect(lastIndexOf(['a', 'b', 'a'], 'a')).toBe(2);
  });

  test('Должна найти строку', () => {
    expect(lastIndexOf(['ab', 'cd', 'ab'], 'ab')).toBe(2);
  });

  test('Не должна мутировать исходный массив', () => {
    const arr = [1, 2, 1, 3];

    const sizeBefore = lenArr(arr);
    const firstBefore = arr[0];
    const secondBefore = arr[1];
    const thirdBefore = arr[2];
    const fourthBefore = arr[3];

    const result = lastIndexOf(arr, 1);

    expect(result).toBe(2);
    expect(lenArr(arr)).toBe(sizeBefore);
    expect(arr[0]).toBe(firstBefore);
    expect(arr[1]).toBe(secondBefore);
    expect(arr[2]).toBe(thirdBefore);
    expect(arr[3]).toBe(fourthBefore);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => lastIndexOf('abc', 'a')).toThrow(TypeError);
  });
});