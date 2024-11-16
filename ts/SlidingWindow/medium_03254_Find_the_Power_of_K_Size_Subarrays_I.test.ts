import resultsArray from "./medium_03254_Find_the_Power_of_K_Size_Subarrays_I";

describe('Find the Power of K-Size Subarrays I', () => {
  test('', () => {
    expect(resultsArray([1, 2, 3], 1)).toMatchObject([1, 2, 3]);
  });
  test('', () => {
    expect(resultsArray([1, 2, 3, 5], 2)).toMatchObject([2, 3, -1]);
  });
});