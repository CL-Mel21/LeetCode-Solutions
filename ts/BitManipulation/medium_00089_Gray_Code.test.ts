import { grayCode } from "../../js/Bit/medium_00089_Gray_Code";

describe('Gray Code', () => {
  test('', () => {
    expect(grayCode(1)).toMatchObject([0, 1]);
  });
  test('', () => {
    expect(grayCode(2)).toMatchObject([0, 1, 3, 2]);
  });
  test('', () => {
    expect(grayCode(4)).toMatchObject([0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8]);
  });
});