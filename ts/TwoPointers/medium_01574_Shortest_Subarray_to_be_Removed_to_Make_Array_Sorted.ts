/*
medium_01574_Shortest_Subarray_to_be_Removed_to_Make_Array_Sorted
*/

function findLengthOfShortestSubarray(arr: number[]): number {
  const n: number = arr.length;
  let l: number = 0, r: number = n - 1;
  while (arr[l + 1] >= arr[l]) l++;
  if (l === n - 1) return 0;
  while (arr[r - 1] <= arr[r]) r--;
  let i: number = 0, j: number = r, min = Math.min(r, n - l - 1);
  while (i <= l && j < n) {
    if (arr[i] <= arr[j]) {
      min = Math.min(min, j - i - 1);
      i++;
    } else j++;
  }
  return min;
};

export default findLengthOfShortestSubarray;