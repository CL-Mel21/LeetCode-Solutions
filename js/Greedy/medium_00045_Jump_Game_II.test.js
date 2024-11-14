const { jump } = require("./medium_00045_Jump_Game_II");

describe('Jump Game II', () => {
	test('case 1', () => {
		expect(jump([11])).toBe(0);
	});
	test('case 2', () => {
		expect(jump([6, 5, 4, 3, 2, 1, 0])).toBe(1);
	});
});