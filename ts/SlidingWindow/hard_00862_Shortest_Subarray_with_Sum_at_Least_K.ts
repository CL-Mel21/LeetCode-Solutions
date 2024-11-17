/*
hard_00862_Shortest_Subarray_with_Sum_at_Least_K
*/

function shortestSubarray(nums: number[], k: number): number {
  let stack: number[] = [-1], len = Infinity, left: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1] || 0;
    while (left < stack.length && nums[i] - (nums[stack[left]] || 0) >= k) {
      len = Math.min(len, i - stack[left]);
      left++;
    }
    while (left < stack.length && nums[i] <= (nums[stack[stack.length - 1]] || 0))
      stack.pop();
    stack.push(i);
  }
  return len === Infinity ? -1 : len;
};

export default shortestSubarray;