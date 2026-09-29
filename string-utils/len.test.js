import { describe, test, expect } from 'bun:test';
import { len } from './len.js'; 

describe('Тесты len', () => {
  test('должна вернуть 5 для строки "hello"', () => 

{expect(len('hello')).toEqual(5);}); 

test('должна вернуть 0 для пустой строки', () => {
  expect(len('')).toEqual(0);
});

test('должна вернуть 3 для строки из трёх пробелов', () => {
  expect(len('   ')).toEqual(3);
});

test('должна корректно считать кириллицу', () => {
  expect(len('привет')).toEqual(6);
});

test('должна выбросить TypeError для числа', () => {
  expect(() => len(123)).toThrow(TypeError);
});

test('должна выбросить TypeError для null', () => {
  expect(() => len(null)).toThrow(TypeError);
});

test('должна выбросить TypeError для undefined', () => {
  expect(() => len(undefined)).toThrow(TypeError);
});

})