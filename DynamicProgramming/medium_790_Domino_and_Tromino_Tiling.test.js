const { numTilings } = require("./medium_790_Domino_and_Tromino_Tiling");

it("", () => {
	expect(numTilings(1)).toBe(1);
	expect(numTilings(2)).toBe(2);
	expect(numTilings(3)).toBe(5);
	expect(numTilings(1000)).toBe(979232805);
});