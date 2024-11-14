/*
medium_00045_Jump_Game_II
*/

var jump = function (nums) {
	if (nums.length === 1) return 0;
	let step = 0;
	let end = 0;
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		max = Math.max(max, i + nums[i]);
		if (max >= nums.length - 1) return step + 1;
		if (i === end) {
			step++;
			end = max;
		}
		// console.log({ step, end, max })
	}
	return step;
};

module.exports = { jump };