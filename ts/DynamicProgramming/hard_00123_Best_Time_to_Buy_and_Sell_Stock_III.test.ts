import maxProfit from "./hard_00123_Best_Time_to_Buy_and_Sell_Stock_III";

describe('Best Time to Buy and Sell Stock III', () => {
  test('', () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
  });
  test('', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
  test('', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
  test('', () => {
    expect(maxProfit([1, 2, 3, 4, 5, 0, 6])).toBe(10);
  });
  test('', () => {
    expect(maxProfit([1, 5, 2, 10, 3, 12])).toBe(18);
  });
});