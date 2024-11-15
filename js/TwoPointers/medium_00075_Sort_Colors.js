/*
medium_00075_Sort_Colors
Do not return anything, modify nums in-place instead.
*/

var sortColors = function (nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 2) {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    } else if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else {
      mid++;
    }
  }
};

module.exports = { sortColors };