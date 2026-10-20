import { describe, test, expect } from 'bun:test';
import { shift } from './shift.js';

describe('Тесты shift', () => {
  test('Должна удалить первый элемент и вернуть его', () => {
    const arr = [1, 2, 3];

    const result = shift(arr);

    expect(result).toBe(1);
    expect(arr[0]).toBe(2);
    expect(arr[1]).toBe(3);
    expect(2 in arr).toBe(false);
  });

  test('Должна вернуть undefined для пустого массива', () => {
    const arr = [];

    const result = shift(arr);

    expect(result).toBe(undefined);
    expect(arr).toEqual([]);
  });

  test('Должна удалить единственный элемент', () => {
    const arr = [42];

    const result = shift(arr);

    expect(result).toBe(42);
    expect(0 in arr).toBe(false);
  });

  test('Должна сохранить порядок остальных элементов', () => {
    const arr = ['a', 'b', 'c'];

    const result = shift(arr);

    expect(result).toBe('a');
    expect(arr[0]).toBe('b');
    expect(arr[1]).toBe('c');
    expect(2 in arr).toBe(false);
  });

  test('Должна корректно удалить falsy значение 0', () => {
    const arr = [0, 1];

    const result = shift(arr);

    expect(result).toBe(0);
    expect(arr[0]).toBe(1);
    expect(1 in arr).toBe(false);
  });

  test('Два shift подряд должны удалить два элемента', () => {
    const arr = [1, 2, 3];

    const firstResult = shift(arr);
    const secondResult = shift(arr);

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(2);
    expect(arr[0]).toBe(3);
    expect(1 in arr).toBe(false);
    expect(2 in arr).toBe(false);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => shift('abc')).toThrow(TypeError);
  });
});