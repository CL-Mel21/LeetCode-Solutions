/*
medium_02064_Minimized_Maximum_of_Products_Distributed_to_Any_Store
*/
const quantities = [10000, 899, 111, 2342, 2143, 122, 436, 6578, 2324, 132, 235, 142, 1423, 143, 3, 5, 15, 10, 10];



var minimizedMaximum = function (n, quantities) {
	let left = 1, right = Math.max(...quantities);
	const canDistribute = (k, n) => {
		for (let q of quantities) {
			n -= Math.ceil(q / k);
			if (n < 0) return false;
		}
		return n >= 0;
	};
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (canDistribute(mid, n)) right = mid - 1;
		else left = mid + 1;
		console.log({ left, right })
	}
	console.log(left)
	return left;
};

module.exports = { minimizedMaximum }