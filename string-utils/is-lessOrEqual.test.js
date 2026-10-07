import { describe, test, expect } from 'bun:test';
import { isLessOrEqual } from './is-lessOrEqual.js'; 

describe('Тесты isLessOrEqual', () => {
    
test('должна вернуть true если a меньше', () => {
  expect(isLessOrEqual('car', 'cat')).toEqual(true);
});

test('должна вернуть true если строки равны', () => {
  expect(isLessOrEqual('hello', 'hello')).toEqual(true);
});

test('должна вернуть false если a больше', () => {
  expect(isLessOrEqual('cat', 'car')).toEqual(false);
});

test('должна вернуть false если a длиннее и символы совпадают', () => {
  expect(isLessOrEqual('hello!', 'hello')).toEqual(false);
});

test('должна вернуть true если a короче и символы совпадают', () => {
  expect(isLessOrEqual('hello', 'hello!')).toEqual(true);
});

test('должна вернуть true для пустых строк', () => {
  expect(isLessOrEqual('', '')).toEqual(true);
});

test('должна выбросить TypeError если первый аргумент не строка', () => {
  expect(() => isLessOrEqual(123, 'hello')).toThrow(TypeError);
});

test('должна выбросить TypeError если второй аргумент не строка', () => {
  expect(() => isLessOrEqual('hello', null)).toThrow(TypeError);
}); 
});