const { tribonacci } = require("./easy_01137_Nth_Tribonacci_Number");

it("", () => {
	expect(tribonacci(0)).toBe(0);
	expect(tribonacci(1)).toBe(1);
	expect(tribonacci(2)).toBe(1);
	expect(tribonacci(25)).toBe(1389537);
	expect(tribonacci(37)).toBe(2082876103);

});