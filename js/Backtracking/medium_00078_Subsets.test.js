const { subsets } = require("./medium_00078_Subsets");

describe('Subsets', () => {
  test('', () => {
    expect(subsets([0])).toMatchObject([[], [0]]);
  });
  test('', () => {
    expect(subsets([1, 2, 3])).toMatchObject([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });
});