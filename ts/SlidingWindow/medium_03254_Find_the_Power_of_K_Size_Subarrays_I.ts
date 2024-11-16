/*
medium_03254_Find_the_Power_of_K_Size_Subarrays_I
*/


function resultsArray(nums: number[], k: number): number[] {
  if (k === 1) return nums;
  let j: number = 1 - k, r: number[] = [], arr: number[] = [nums[0]];
  for (let i: number = 1; i < nums.length; i++) {
    j++;
    if (nums[i] === arr[arr.length - 1] + 1) {
      arr.push(nums[i]);
      if (arr.length > k) arr.shift();
    } else {
      arr = [nums[i]];
    }
    if (j > -1) r.push(arr[k - 1] || -1);
  }
  return r;
};

export default resultsArray;