/*
medium_00080_Remove_Duplicates_from_Sorted_Array_II
*/

var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;
  let p = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[p - 2]) {
      nums[p] = nums[i];
      p++;
    }
    // console.log({i,p, nums})
  }

  return p;
};

module.exports = { removeDuplicates };