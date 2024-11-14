const { countFairPairs } = require("./medium_02563_Count_the_Number_of_Fair_Pairs");

it("", () => {
	expect(countFairPairs([0, 0, 0, 0, 0, 0], 0, 0)).toBe(15);
	expect(countFairPairs([0, 0, 0, 1, 7, 4, 4, 5, -1, -1, -1, -2, -2, -2, -4, -4, -4, -4], 0, 6)).toBe(61);
	expect(countFairPairs([1, 7, 9, 2, 5], 11, 11)).toBe(1);
	expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6);
});