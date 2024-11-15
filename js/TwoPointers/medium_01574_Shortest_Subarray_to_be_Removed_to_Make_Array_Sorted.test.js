const { findLengthOfShortestSubarray } = require("./medium_01574_Shortest_Subarray_to_be_Removed_to_Make_Array_Sorted");

describe('Shortest Subarray to be Removed to Make Array Sorted', () => {
  test('', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])).toBe(3);
  });
  test('', () => {
    expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1])).toBe(4);
  });
  test('', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3])).toBe(0);
  });
  test('', () => {
    expect(findLengthOfShortestSubarray([2, 2, 2, 1, 1, 1])).toBe(3);
  });
  test('', () => {
    expect(findLengthOfShortestSubarray([6, 11, 20, 20, 7, 22, 22, 22, 6, 4, 9])).toBe(7);
  });
});