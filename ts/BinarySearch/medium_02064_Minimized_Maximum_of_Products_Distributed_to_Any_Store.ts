/*
medium_02064_Minimized_Maximum_of_Products_Distributed_to_Any_Store
*/

function minimizedMaximum(n: number, quantities: number[]): number {
	let left: number = 1, right: number = Math.max(...quantities), mid: number;

	const canDistribute = (k: number, n: number): boolean => {
		for (let i: number = 0; i < quantities.length; i++) {
			n -= Math.ceil(quantities[i] / k);
			if (n < 0) return false;
		}
		return true;
	};

	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		if (canDistribute(mid, n)) right = mid - 1;
		else left = mid + 1;
	}
	return left;
};

minimizedMaximum(500, [10000, 899, 111, 2342, 2143, 122, 436, 6578, 2324, 132, 235, 142, 1423, 143, 3, 5, 15, 10, 10])

export default minimizedMaximum;