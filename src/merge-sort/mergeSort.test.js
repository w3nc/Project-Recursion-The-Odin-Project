import mergeSort from "./mergeSort.js";

describe("mergeSort", () => {
  describe("assignment examples", () => {
    test("mergeSort([]) -> []", () => {
      expect(mergeSort([])).toEqual([]);
    });

    test("mergeSort([73]) -> [73]", () => {
      expect(mergeSort([73])).toEqual([73]);
    });

    test("mergeSort([1, 2, 3, 4, 5]) -> [1, 2, 3, 4, 5]", () => {
      expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) -> [0, 1, 1, 2, 3, 5, 8, 13]", () => {
      expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
        0, 1, 1, 2, 3, 5, 8, 13,
      ]);
    });

    test("mergeSort([105, 79, 100, 110]) -> [79, 100, 105, 110]", () => {
      expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
    });
  });

  describe("edge cases", () => {
    test("swaps two items that are out of order", () => {
      expect(mergeSort([2, 1])).toEqual([1, 2]);
    });

    test("sorts negative numbers and keeps duplicates", () => {
      expect(mergeSort([5, -3, -3, 0, -10, 5])).toEqual([-10, -3, -3, 0, 5, 5]);
    });

    test("sorts an array that is in reverse order", () => {
      expect(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });

    test("does not mutate the array it is given", () => {
      const input = [3, 1, 2];
      const sorted = mergeSort(input);

      expect(sorted).not.toBe(input);
      expect(input).toEqual([3, 1, 2]);
      expect(sorted).toEqual([1, 2, 3]);
    });
  });

  describe("against the built-in sort", () => {
    test("matches Array.prototype.sort on a deterministic pseudo-random array", () => {
      const input = Array.from({ length: 150 }, (_, index) => (index * 37) % 101);

      expect(mergeSort(input)).toEqual([...input].sort((a, b) => a - b));
    });
  });
});
