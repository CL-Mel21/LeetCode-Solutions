/*
medium_03254_Find_the_Power_of_K_Size_Subarrays_I
*/

var resultsArray = function (nums, k) {
  if (k === 1) return nums;
  let arr = [nums[0]];
  let r = [];
  let j = 1 - k;
  for (let i = 1; i < nums.length; i++) {
    j++;
    if (nums[i] === arr[arr.length - 1] + 1) {
      arr.push(nums[i]);
      if (arr.length > k) arr.shift();
    } else {
      arr = [nums[i]];
    }
    if (j > -1) {
      r[j] = arr[k - 1] || -1;
    }
    // console.log({ arr, r, j, i })
  }
  return r;
};

module.exports = { resultsArray };