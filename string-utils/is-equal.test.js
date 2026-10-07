import { describe, test, expect } from 'bun:test';
import { isEqual } from './is-equal.js'; 

describe('Тесты isEqual', () => {
test('должна вернуть true для равных строк', () => {
  expect(isEqual('hello', 'hello')).toEqual(true);
});

test('должна вернуть true для равных пустых строк', () => {
  expect(isEqual('', '')).toEqual(true);
});

test('должна вернуть false для разных строк одинаковой длины', () => {
  expect(isEqual('hello', 'world')).toEqual(false);
});

test('должна вернуть false для строк разной длины', () => {
  expect(isEqual('hi', 'hello')).toEqual(false);
});

test('должна вернуть false для строки с пробелом', () => {
  expect(isEqual('hi', 'hi ')).toEqual(false);
});

test('должна вернуть false если одна строка пустая, а другая нет', () => {
  expect(isEqual('', 'a')).toEqual(false);
});

test('должна вернуть false если пробелы различаются', () => {
  expect(isEqual(' a', 'a')).toEqual(false);
});

test('должна вернуть true для кириллицы', () => {
  expect(isEqual('привет', 'привет')).toEqual(true);
});

test('должна выбросить TypeError если первый аргумент не строка', () => {
  expect(() => isEqual(123, 'hello')).toThrow(TypeError);
});

test('должна выбросить TypeError если второй аргумент не строка', () => {
  expect(() => isEqual('hello', null)).toThrow(TypeError);
});
})