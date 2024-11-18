const { decrypt } = require("./easy_01652_Defuse_the_Bomb");

describe('Defuse the Bomb', () => {
  test('', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toMatchObject([12, 10, 16, 13]);
  });
  test('', () => {
    expect(decrypt([5, 7, 1, 4], 0)).toMatchObject([0, 0, 0, 0]);
  });
  test('', () => {
    expect(decrypt([2, 4, 9, 3], -2)).toMatchObject([12, 5, 6, 13]);
  });
});