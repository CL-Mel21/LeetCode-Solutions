const { minCostClimbingStairs } = require("./easy_00746_Min_Cost_Climbing_Stairs");

it("", () => {
	expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
	expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
})