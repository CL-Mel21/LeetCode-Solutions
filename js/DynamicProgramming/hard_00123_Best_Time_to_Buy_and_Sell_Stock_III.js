/*
hard_00123_Best_Time_to_Buy_and_Sell_Stock_III
*/

var maxProfit = function (prices) {
  let cost1 = Infinity, profit1 = 0, cost2 = Infinity, profit2 = 0;
  for (let i = 0; i < prices.length; i++) {
    cost1 = Math.min(cost1, prices[i]);
    profit1 = Math.max(profit1, prices[i] - cost1);
    cost2 = Math.min(cost2, prices[i] - profit1);
    profit2 = Math.max(profit2, prices[i] - cost2);
  }
  return profit2;
};

module.exports = { maxProfit };