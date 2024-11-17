import shortestSubarray from "./hard_00862_Shortest_Subarray_with_Sum_at_Least_K";

describe("Leetcode 862: Shortest Subarray with Sum at Least K", () => {
  test("Minimum Input Size", () => {
    expect(shortestSubarray([1], 1)).toBe(1);
    expect(shortestSubarray([1], 2)).toBe(-1);
  });

  test("All Positive Numbers", () => {
    expect(shortestSubarray([1, 2, 3, 4, 5], 11)).toBe(3);
  });

  test("All Negative Numbers", () => {
    expect(shortestSubarray([-1, -2, -3], 1)).toBe(-1);
  });

  test("Mix of Positive and Negative Numbers", () => {
    expect(shortestSubarray([2, -1, 2], 3)).toBe(3);
    expect(shortestSubarray([2, -1, 2, 1], 4)).toBe(4);
  });

  test("Large Input Array", () => {
    const largeArray = Array(100000).fill(1);
    expect(shortestSubarray(largeArray, 50000)).toBe(50000);
  });

  test("K Larger Than Any Subarray Sum", () => {
    expect(shortestSubarray([1, 2, 3], 10)).toBe(-1);
  });

  test("K Equal to Total Array Sum", () => {
    expect(shortestSubarray([1, 2, 3], 6)).toBe(3);
  });

  test("Zeros in the Array", () => {
    expect(shortestSubarray([0, 0, 3, 4], 7)).toBe(2);
  });

  test("Single Valid Subarray", () => {
    expect(shortestSubarray([1, 2, 3, 4, 5], 15)).toBe(5);
  });

  test("Negative and Large Positive Values", () => {
    expect(shortestSubarray([10, -10, 20, -20, 30], 25)).toBe(1);
  });
});