const { maxProfit } = require("./medium_00714_Best_Time_to_Buy_and_Sell_Stock_with_Transaction_Fee");

it("", () => {
	expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
	expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
	expect(maxProfit([8,3,3,5,7,9,7,2,5,10], 3)).toBe(8);
});