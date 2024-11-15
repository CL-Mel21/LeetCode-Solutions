/*
medium_00078_Subsets
*/

var subsets = function (nums) {
  let arr = [[]];
  const helper = (i) => {
    if (i === nums.length) return;
    let new_arr = arr.map(a => [...a, nums[i]]);
    arr.push(...new_arr);
    helper(i + 1);
  };
  helper(0);
  return arr;
};

module.exports = { subsets };