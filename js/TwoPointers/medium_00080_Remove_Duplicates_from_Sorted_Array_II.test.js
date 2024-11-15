const { removeDuplicates } = require("./medium_00080_Remove_Duplicates_from_Sorted_Array_II");

describe('Remove Duplicates from Sorted Array II', () => {
  test('', () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe(5);
  });
  test('', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
  });
  test('', () => {
    expect(removeDuplicates([1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 10, 10, 11])).toBe(17);
  });
});