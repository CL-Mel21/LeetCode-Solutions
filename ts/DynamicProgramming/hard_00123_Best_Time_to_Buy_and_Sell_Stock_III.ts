/*
hard_00123_Best_Time_to_Buy_and_Sell_Stock_III
*/

function maxProfit(prices: number[]): number {
  let cost1: number = Infinity, profit1: number = 0, cost2: number = Infinity, profit2: number = 0;
  for (let price of prices) {
    cost1 = Math.min(cost1, price);
    profit1 = Math.max(profit1, price - cost1);
    cost2 = Math.min(cost2, price - profit1);
    profit2 = Math.max(profit2, price - cost2);
  }
  return profit2;
};

export default maxProfit;