import { describe, test, expect } from 'bun:test';
import { unshift } from './unshift.js';

describe('Тесты unshift', () => {
  test('Должна добавить элемент в начало и вернуть новую длину', () => {
    const arr = [2, 3];

    const result = unshift(arr, 1);

    expect(result).toBe(3);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('Должна работать с пустым массивом', () => {
    const arr = [];

    const result = unshift(arr, 'a');

    expect(result).toBe(1);
    expect(arr).toEqual(['a']);
  });

  test('Должна добавить элемент в массив из одного элемента', () => {
    const arr = [20];

    const result = unshift(arr, 10);

    expect(result).toBe(2);
    expect(arr).toEqual([10, 20]);
  });

  test('Должна сохранить порядок остальных элементов', () => {
    const arr = ['b', 'c', 'd'];

    const result = unshift(arr, 'a');

    expect(result).toBe(4);
    expect(arr).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Два unshift подряд: первый добавленный элемент становится вторым', () => {
    const arr = [2, 3];

    const firstResult = unshift(arr, 1);
    const secondResult = unshift(arr, 0);

    expect(firstResult).toBe(3);
    expect(secondResult).toBe(4);
    expect(arr).toEqual([0, 1, 2, 3]);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => unshift('abc', 1)).toThrow(TypeError);
  });
});