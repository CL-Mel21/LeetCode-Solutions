import minimizedMaximum from './medium_02064_Minimized_Maximum_of_Products_Distributed_to_Any_Store';

describe('Minimized Maximum of Products Distributed to Any Store', () => {
	test('Example test case', () => {
		expect(minimizedMaximum(6, [11, 6])).toBe(3);
	});
	test('Another test case', () => {
		expect(minimizedMaximum(7, [15, 10, 10])).toBe(5);
	});
});