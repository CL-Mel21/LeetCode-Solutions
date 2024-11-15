/*
medium_00075_Sort_Colors
Do not return anything, modify nums in-place instead.
*/

function sortColors(nums: number[]): void {
  let low: number = 0, mid: number = 0, high: number = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    } else if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else mid++;
  }
};

export default sortColors;