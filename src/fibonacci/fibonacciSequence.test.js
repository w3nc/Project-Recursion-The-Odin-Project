import { fibs, fibsRec } from "./fibonacciSequence.js";

describe("fibs (iteration)", () => {
  test("returns that many numbers from the Fibonacci sequence", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("returns 13 numbers when asked for 13", () => {
    expect(fibs(13)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });

  test("returns [0] for a length of 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("returns [0, 1] for a length of 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("returns an empty array for a length of 0", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("returns an empty array for a negative length", () => {
    expect(fibs(-5)).toEqual([]);
  });

  test("returns a fresh array on every call", () => {
    const first = fibs(5);
    const second = fibs(5);

    expect(first).not.toBe(second);
    expect(first).toEqual(second);
  });
});

describe("fibsRec (recursion)", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test("returns that many numbers from the Fibonacci sequence", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("returns 13 numbers when asked for 13", () => {
    expect(fibsRec(13)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });

  test("returns [0] for a length of 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("returns [0, 1] for a length of 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("returns an empty array for a length of 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("returns an empty array for a negative length", () => {
    expect(fibsRec(-5)).toEqual([]);
  });

  test("agrees with the iterative version for every length up to 15", () => {
    for (let length = 0; length <= 15; length += 1) {
      expect(fibsRec(length)).toEqual(fibs(length));
    }
  });

  test("prints the showcase message once per recursive call", () => {
    fibsRec(8);

    expect(logSpy).toHaveBeenCalledWith("This was printed recursively");

    expect(logSpy).toHaveBeenCalledTimes(7);
  });
});
