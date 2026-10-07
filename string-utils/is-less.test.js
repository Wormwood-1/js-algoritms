import { describe, test, expect } from 'bun:test';
import { isLess } from './is-less.js'; 

describe('Тесты isLess', () => {


test('должна вернуть true если a явно меньше', () => {
  expect(isLess('car', 'cat')).toEqual(true);
});

test('должна вернуть false если a больше', () => {
  expect(isLess('cat', 'car')).toEqual(false);
});

test('должна вернуть false для равных строк', () => {
  expect(isLess('hello', 'hello')).toEqual(false);
});

test('должна вернуть true если a короче', () => {
  expect(isLess('hello', 'hello!')).toEqual(true);
});

test('должна вернуть true для заглавной и строчной букв', () => {
  expect(isLess('A', 'a')).toEqual(true);
});

test('должна вернуть true для пустой и непустой строки', () => {
  expect(isLess('', 'a')).toEqual(true);
});

test('должна выбросить TypeError если первый аргумент не строка', () => {
  expect(() => isLess(123, 'hello')).toThrow(TypeError);
});

test('должна выбросить TypeError если второй аргумент не строка', () => {
  expect(() => isLess('hello', null)).toThrow(TypeError);
}); 
}); 