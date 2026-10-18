import { normalizeIndex } from './normalizeIndex';

describe('normalizeIndex', () => {
  describe('индекс внутри диапазона', () => {
    it('возвращает 0 для index = 0', () => {
      expect(normalizeIndex(0, 5)).toBe(0);
    });

    it('возвращает index, если он в середине диапазона', () => {
      expect(normalizeIndex(3, 5)).toBe(3);
    });

    it('возвращает strLength, если index === strLength (граница)', () => {
      expect(normalizeIndex(5, 5)).toBe(5);
    });

    it('возвращает 1 для index = 1 (минимальный положительный)', () => {
      expect(normalizeIndex(1, 5)).toBe(1);
    });
  });

  describe('отрицательные значения и NaN', () => {
    it('возвращает 0 для отрицательного индекса', () => {
      expect(normalizeIndex(-1, 5)).toBe(0);
    });

    it('возвращает 0 для большого отрицательного индекса', () => {
      expect(normalizeIndex(-1000, 5)).toBe(0);
    });

    it('возвращает 0 для -Infinity', () => {
      expect(normalizeIndex(-Infinity, 5)).toBe(0);
    });

    it('возвращает 0 для NaN', () => {
      expect(normalizeIndex(NaN, 5)).toBe(0);
    });

    it('возвращает 0 для -0 (и именно +0, а не -0)', () => {
      expect(Object.is(normalizeIndex(-0, 5), 0)).toBe(true);
    });
  });

  describe('индекс больше длины строки', () => {
    it('возвращает strLength, если index = strLength + 1', () => {
      expect(normalizeIndex(6, 5)).toBe(5);
    });

    it('возвращает strLength для очень большого индекса', () => {
      expect(normalizeIndex(1_000_000, 5)).toBe(5);
    });

    it('возвращает strLength для Infinity', () => {
      expect(normalizeIndex(Infinity, 5)).toBe(5);
    });

    it('возвращает 0 для пустой строки и положительного индекса', () => {
      expect(normalizeIndex(3, 0)).toBe(0);
    });
  });

  describe('дробные значения (округление вниз)', () => {
    it('округляет 2.7 до 2', () => {
      expect(normalizeIndex(2.7, 5)).toBe(2);
    });

    it('округляет 2.2 до 2', () => {
      expect(normalizeIndex(2.2, 5)).toBe(2);
    });

    it('возвращает 0 для 0.5', () => {
      expect(normalizeIndex(0.5, 5)).toBe(0);
    });

    it('возвращает 0 для -0.5', () => {
      expect(normalizeIndex(-0.5, 5)).toBe(0);
    });

    it('округляет 4.9 до 4 при strLength = 5', () => {
      expect(normalizeIndex(4.9, 5)).toBe(4);
    });

    it('возвращает strLength для 5.1 при strLength = 5', () => {
      expect(normalizeIndex(5.1, 5)).toBe(5);
    });
  });

  describe('граничные значения strLength', () => {
    it('работает с strLength = 0 и index = 0', () => {
      expect(normalizeIndex(0, 0)).toBe(0);
    });

    it('работает с strLength = 1', () => {
      expect(normalizeIndex(1, 1)).toBe(1);
      expect(normalizeIndex(2, 1)).toBe(1);
    });
  });

  describe('некорректные типы (документируют текущее поведение)', () => {
    it('undefined в качестве index даёт 0', () => {
      expect(normalizeIndex(undefined, 5)).toBe(0);
    });

    it('null в качестве index даёт 0', () => {
      expect(normalizeIndex(null, 5)).toBe(0);
    });

    it('строка "3" приводится к числу 3', () => {
      expect(normalizeIndex('3', 5)).toBe(3);
    });

    it('нечисловая строка даёт 0', () => {
      expect(normalizeIndex('abc', 5)).toBe(0);
    });
  });
});