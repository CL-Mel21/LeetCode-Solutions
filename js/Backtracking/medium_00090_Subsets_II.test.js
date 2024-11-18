const { subsetsWithDup } = require("./medium_00090_Subsets_II");

describe('Subsets II', () => {
  test('', () => {
    expect(subsetsWithDup([0])).toMatchObject([[], [0]]);
  });
  test('', () => {
    expect(subsetsWithDup([1, 2, 2])).toMatchObject([[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]);
  });
  test('', () => {
    expect(subsetsWithDup([0, 0, 0, 1, 1, 1])).toMatchObject([[], [0], [0, 0], [0, 0, 0], [1], [0, 1], [0, 0, 1], [0, 0, 0, 1], [1, 1], [0, 1, 1], [0, 0, 1, 1], [0, 0, 0, 1, 1], [1, 1, 1], [0, 1, 1, 1], [0, 0, 1, 1, 1], [0, 0, 0, 1, 1, 1]]);
  });
});