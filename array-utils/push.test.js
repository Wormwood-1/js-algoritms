
import { describe, test, expect } from 'bun:test';
import { push } from './push.js';
import { lenArr } from './lenArr.js';

describe('Тесты push', () => {
  test('Должна добавить элемент в конец и вернуть новую длину', () => {
    const arr = [1, 2];

    const result = push(arr, 3);

    expect(result).toBe(3);
    expect(arr).toEqual([1, 2, 3]);
    expect(arr[lenArr(arr) - 1]).toBe(3);
  });

  test('Должна работать с пустым массивом', () => {
    const arr = [];

    const result = push(arr, 'a');

    expect(result).toBe(1);
    expect(arr).toEqual(['a']);
  });

  test('Должна добавлять несколько элементов по очереди', () => {
    const arr = [1];

    const firstResult = push(arr, 2);
    const secondResult = push(arr, 3);

    expect(firstResult).toBe(2);
    expect(secondResult).toBe(3);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('Должна добавить элемент в массив из одного элемента', () => {
    const arr = [10];

    const result = push(arr, 20);

    expect(result).toBe(2);
    expect(arr).toEqual([10, 20]);
  });

  test('Должна добавлять 0, false и null как полноценные элементы', () => {
    const arr = [];

    const firstResult = push(arr, 0);
    const secondResult = push(arr, false);
    const thirdResult = push(arr, null);

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(2);
    expect(thirdResult).toBe(3);
    expect(arr).toEqual([0, false, null]);
    expect(lenArr(arr)).toBe(3);
  });

  test('Должна добавить объект как элемент', () => {
    const arr = [];
    const item = { a: 1 };

    const result = push(arr, item);

    expect(result).toBe(1);
    expect(arr).toEqual([{ a: 1 }]);
  });

  test('Должна изменить исходный массив и добавить элемент в конец', () => {
    const arr = [4, 5];

    const result = push(arr, 6);

    expect(result).toBe(3);
    expect(arr[lenArr(arr) - 1]).toBe(6);
    expect(arr).toEqual([4, 5, 6]);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => push('hello', 1)).toThrow(TypeError);
  });
});
