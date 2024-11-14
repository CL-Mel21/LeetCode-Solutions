/*
medium_00045_Jump_Game_II
*/

function jump(nums: number[]): number {
	if (nums.length === 1) return 0;
	let step: number = 0, end: number = 0, max: number = 0;
	for (let i: number = 0; i < nums.length; i++) {
		max = Math.max(max, i + nums[i]);
		if (max >= nums.length - 1) return step + 1;
		if (i === end) {
			step++;
			end = max;
		}
	}
	return step;
};

export default jump;