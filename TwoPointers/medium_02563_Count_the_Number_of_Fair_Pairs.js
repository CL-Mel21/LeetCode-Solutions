/*
medium_02563_Count_the_Number_of_Fair_Pairs
Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

A pair (i, j) is fair if:

0 <= i < j < n, and
lower <= nums[i] + nums[j] <= upper
 

Example 1:

Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
Example 2:

Input: nums = [1,7,9,2,5], lower = 11, upper = 11
Output: 1
Explanation: There is a single fair pair: (2,3).
 

Constraints:

1 <= nums.length <= 105
nums.length == n
-109 <= nums[i] <= 109
-109 <= lower <= upper <= 109
*/

var countFairPairs = function (nums, lower, upper) {
	nums.sort((a, b) => a - b);
	// console.log(nums)
	let l = 0, r = nums.length - 1;
	c = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (r <= i) break;
		while (nums[i] + nums[r] > upper && r > i) r--;
		while (nums[i] + nums[l] < lower && l < r) l++;
		while (nums[i] + nums[l] >= lower && l > i) l--;
		l = Math.max(l, i);
		c += r - l;
		// console.log(i, l, r, c)
	}

	return c;
};

module.exports = { countFairPairs };