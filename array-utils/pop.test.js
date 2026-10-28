
import { describe, test, expect } from 'bun:test';
import { pop } from './pop.js';
import { lenArr } from './lenArr.js';

describe('Тесты pop', () => {
  test('Должна удалить последний элемент и вернуть его', () => {
    const arr = [1, 2, 3];

    const result = pop(arr);

    expect(result).toBe(3);
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(2 in arr).toBe(false);
    expect(lenArr(arr)).toBe(3);
  });

  test('Должна вернуть undefined для пустого массива', () => {
    const arr = [];

    const result = pop(arr);

    expect(result).toBe(undefined);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна удалить единственный элемент', () => {
    const arr = [42];

    const result = pop(arr);

    expect(result).toBe(42);
    expect(0 in arr).toBe(false);
    expect(lenArr(arr)).toBe(1);
  });

  test('Должна работать с массивом строк', () => {
    const arr = ['a', 'b'];

    const result = pop(arr);

    expect(result).toBe('b');
    expect(arr[0]).toBe('a');
    expect(1 in arr).toBe(false);
  });

  test('Должна корректно удалить 0', () => {
    const arr = [0];

    const result = pop(arr);

    expect(result).toBe(0);
    expect(0 in arr).toBe(false);
  });

  test('Должна корректно удалить false', () => {
    const arr = [false];

    const result = pop(arr);

    expect(result).toBe(false);
    expect(0 in arr).toBe(false);
  });

  // Уважаемые ревтьюеры, обратите внимание на следующий тест. 
  // Он проверяет, что при двух вызовах pop подряд, второй вызов вернёт undefined. 
  // Второй вызов возвращает undefined, потому чтофункция снова обращается к индексу 2, который уже удалён. 
  // Элемент 2 с индексом 1 остаётся на месте.
  // Напишите заметочку тут, если есть идеи, как сделать по-другому.
  test('Должна корректно работать при двух вызовах подряд', () => {
    const arr = [1, 2, 3];

    const firstResult = pop(arr);
    const secondResult = pop(arr);

    expect(firstResult).toBe(3);
    expect(secondResult).toBe(undefined);

    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(2 in arr).toBe(false);
    expect(1 in arr).toBe(true);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => pop('hello')).toThrow(TypeError);
  });
});
