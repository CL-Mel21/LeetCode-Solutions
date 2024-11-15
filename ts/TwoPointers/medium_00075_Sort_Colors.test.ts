import sortColors from "./medium_00075_Sort_Colors";

describe('Sort Colors', () => {
  test('', () => {
    const arr = [1, 0, 1, 0, 2, 1, 1, 0];
    sortColors(arr);
    expect(arr).toMatchObject([0, 0, 0, 1, 1, 1, 1, 2]);
  });
  test('', () => {
    const arr = [2, 0, 2, 1, 1, 0];
    sortColors(arr);
    expect(arr).toMatchObject([0, 0, 1, 1, 2, 2]);
  });
});