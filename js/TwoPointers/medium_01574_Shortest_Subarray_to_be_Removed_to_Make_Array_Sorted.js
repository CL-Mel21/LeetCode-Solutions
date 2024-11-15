/*
medium_01574_Shortest_Subarray_to_be_Removed_to_Make_Array_Sorted
*/

var findLengthOfShortestSubarray = function (arr) {
  let n = arr.length;
  let l = 0, r = n - 1;
  while (arr[l + 1] >= arr[l]) l++;
  if (l === n - 1) return 0;
  while (arr[r - 1] <= arr[r]) r--;
  let i = 0, j = r, min = Math.min(r, n - l - 1);
  while (i <= l && j < n) {
    if (arr[i] <= arr[j]) {
      min = Math.min(min, j - i - 1);
      i++;
    } else j++;
  }
  return min;
};

module.exports = { findLengthOfShortestSubarray };