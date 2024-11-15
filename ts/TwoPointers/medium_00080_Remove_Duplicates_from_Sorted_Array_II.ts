/*
medium_00080_Remove_Duplicates_from_Sorted_Array_II
*/

function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  let p: number = 2;
  for (let i: number = 2; i < nums.length; i++) {
    if (nums[i] !== nums[p - 2]) {
      nums[p] = nums[i];
      p++;
    }
  }
  return p;
};

export default removeDuplicates;