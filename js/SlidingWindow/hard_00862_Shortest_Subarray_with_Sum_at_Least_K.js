/*
hard_00862_Shortest_Subarray_with_Sum_at_Least_K
*/

var shortestSubarray = function (nums, k) {
  let stack = [-1], len = Infinity, j = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1] || 0;
    while (j < stack.length && nums[i] - (nums[stack[j]] || 0) >= k) {
      len = Math.min(len, i - stack[j]);
      j++;
    }

    while (j < stack.length && (nums[stack[stack.length - 1]] || 0) > nums[i])
      stack.pop();
    stack.push(i);
    // console.log({ i, stack, len })
  }
  return len === Infinity ? -1 : len;
};

module.exports = { shortestSubarray };