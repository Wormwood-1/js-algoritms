import { describe, expect, test } from "bun:test";
import { replace } from "./replace.js";

describe("replace", () => {
  test("Должна заменить 'world' на 'everyone'", () => {
    expect(replace("hello world", "world", "everyone")).toBe(
      "hello everyone",
    );
  });

  test("Должна заменить подстроку в начале", () => {
    expect(replace("hello world", "hello", "hi")).toBe("hi world");
  });

  test("Должна заменить подстроку в конце", () => {
    expect(replace("hello world", "world", "earth")).toBe("hello earth");
  });

  test("Должна заменить подстроку в середине", () => {
    expect(replace("hello world", "ello", "i")).toBe("hi world");
  });

  test("Должна вернуть исходную строку, если search не найден", () => {
    expect(replace("hello", "help", "hhhh")).toBe("hello");
  });

  test("Должна работать с заменой на более длинную строку", () => {
    expect(replace("hi", "i", "ello")).toBe("hello");
  });

  test("Должна работать с заменой на более короткую строку", () => {
    expect(replace("hello", "ello", "i")).toBe("hi");
  });

  test("Должна работать с заменой на пустую строку", () => {
    expect(replace("hello", "ll", "")).toBe("heo");
  });

  test("Должна заменить только первое вхождение", () => {
    expect(replace("banana", "na", "ba")).toBe("babana");
  });

  test("Должна работать с кириллицей", () => {
    expect(replace("привет мир", "мир", "всем")).toBe("привет всем");
  });

  test("Должна выбросить TypeError, если str не строка", () => {
    expect(() => replace(123, "a", "b")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если search не строка", () => {
    expect(() => replace("hello", 123, "b")).toThrow(TypeError);
  });

  test("Должна выбросить TypeError, если replacement не строка", () => {
    expect(() => replace("hello", "h", 123)).toThrow(TypeError);
  });
});