import { describe, expect, test } from "bun:test";
import { replaceAll } from "./replaceAll.js";

describe("ТестыreplaceAll", () => {
  test("Должна заменить одно вхождение", () => {
    expect(replaceAll("hello", "ll", "LL")).toBe("heLLo");
  });

  test("Должна заменить несколько вхождений", () => {
    expect(replaceAll("banana", "na", "NA")).toBe("baNANA");
  });

  test("Должна не учитывать подставленную строку при поиске", () => {
    expect(replaceAll("aaa", "aa", "ba")).toBe("baa");
  });

  test("Должна вернуть исходную строку, если search не найден", () => {
    expect(replaceAll("hello", "eli", "hhh")).toBe("hello");
  });

  test("Должна заменить символ строкой", () => {
    expect(replaceAll("a", "a", "hello")).toBe("hello");
  });

  test("Должна работать с заменой на более длинную строку", () => {
    expect(replaceAll("hi", "i", "ello")).toBe("hello");
  });

  test("Должна работать с заменой на пустую строку", () => {
    expect(replaceAll("hello", "l", "")).toBe("heo");
  });

  test("Должна вернуть пустую строку для пустой исходной строки", () => {
    expect(replaceAll("", "abc", "X")).toBe("");
  });

  test("Должна вставить replacement вокруг каждого символа при пустом search", () => {
    expect(replaceAll("abc", "", "X")).toBe("XaXbXcX");
  });

  test("Должна выбросить TypeError, если str не строка", () => {
    expect(() => replaceAll(123, "a", "b")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если search не строка", () => {
    expect(() => replaceAll("hello", 123, "b")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если replacement не строка", () => {
    expect(() => replaceAll("hello", "h", 123)).toThrow(TypeError);
  });
});