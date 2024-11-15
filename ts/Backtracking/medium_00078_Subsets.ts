/*
medium_00078_Subsets
*/

function subsets(nums: number[]): number[][] {
  const arr: number[][] = [[]];
  const helper = (i: number): void => {
    if (i === nums.length) return;
    const new_arr = arr.map((a) => [...a, nums[i]]);
    arr.push(...new_arr);
    helper(i + 1);
  };
  helper(0);
  return arr;
};

export default subsets;