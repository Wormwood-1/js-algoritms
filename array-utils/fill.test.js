import { describe, expect, test } from "bun:test";
import { fill } from "./fill.js";

describe("Тестыfill", () => {
    test("fills the entire array by default", () => {
        const arr = [1, 2, 3];

        const result = fill(arr, 0);

        expect(arr).toEqual([0, 0, 0]);
        expect(result).toBe(arr);
    });

    test("fills from start to the end of the array", () => {
        const arr = [1, 2, 3];

        fill(arr, 0, 1);

        expect(arr).toEqual([1, 0, 0]);
    });

    test("fills the specified range", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, "*", 1, 3);

        expect(arr).toEqual([1, "*", "*", 4]);
    });

    test("clamps end when it exceeds array length", () => {
        const arr = [1, 2, 3];

        fill(arr, 0, 1, 10);

        expect(arr).toEqual([1, 0, 0]);
    });

    test("returns the same array reference", () => {
        const arr = [1, 2, 3];

        const result = fill(arr, 0);

        expect(result).toBe(arr);
    });

    test("works with an empty array", () => {
        const arr = [];

        const result = fill(arr, 0);

        expect(arr).toEqual([]);
        expect(result).toBe(arr);
    });

    test("does nothing when start is greater than or equal to end", () => {
        const arr = [1, 2, 3];

        fill(arr, 0, 2, 2);

        expect(arr).toEqual([1, 2, 3]);
    });

    test("supports a negative start index", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, 0, -2);

        expect(arr).toEqual([1, 2, 0, 0]);
    });

    test("supports a negative end index", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, 0, 0, -1);

        expect(arr).toEqual([0, 0, 0, 4]);
    });

    test("clamps a very negative start to zero", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, 0, -5);

        expect(arr).toEqual([0, 0, 0, 0]);
    });

    test("uses default start and end values", () => {
        const arr = [1, 2, 3];

        fill(arr, "*");

        expect(arr).toEqual(["*", "*", "*"]);
    });

    test("does nothing when start exceeds array length", () => {
        const arr = [1, 2, 3];

        fill(arr, 0, 5);

        expect(arr).toEqual([1, 2, 3]);
    });

    test("clamps a very negative start to zero", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, 0, -10, 2);

        expect(arr).toEqual([0, 0, 3, 4]);
    });

    test("clamps a very negative end to zero", () => {
        const arr = [1, 2, 3, 4];

        fill(arr, 0, 0, -5);

        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("throws TypeError when arr is not an array", () => {
        expect(() => fill("hello", 0)).toThrow(TypeError);
    });

    test("throws TypeError when start is not a number", () => {
        expect(() => fill([1, 2, 3], 0, "1")).toThrow(TypeError);
    });

    test("throws TypeError when end is not a number", () => {
        expect(() => fill([1, 2, 3], 0, 0, "2")).toThrow(TypeError);
    });
});