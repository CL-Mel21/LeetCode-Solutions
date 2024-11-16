import largestRectangleArea from "./hard_00084_Largest_Rectangle_in_Histogram";

describe('Largest Rectangle in Histogram', () => {
  test('', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
  });
  test('', () => {
    expect(largestRectangleArea([2, 4])).toBe(4);
  });
});