import maximalRectangle from "./hard_00085_Maximal_Rectangle";

describe('Maximal Rectangle', () => {
  test('', () => {
    expect(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])).toBe(6);
  });
  test('', () => {
    expect(maximalRectangle([["0"]])).toBe(0);
  });
  test('', () => {
    expect(maximalRectangle([["1"]])).toBe(1);
  });
});