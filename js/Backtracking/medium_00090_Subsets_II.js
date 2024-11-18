/*
medium_00090_Subsets_II
*/

var subsetsWithDup = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) map[nums[i]] = (map[nums[i]] || 0) + 1;

  let arr = Object.keys(map), r = [[]];
  const helper = (i) => {
    if (arr.length === i) return;
    let newR = [], num = parseInt(arr[i]), temp = [];
    for (let j = 0; j < map[arr[i]]; j++) {
      temp.push(num);
      newR.push(...r.map(subset => [...subset, ...temp]))
    }
    r.push(...newR);
    helper(i + 1);
  };
  helper(0);
  return r;
};

module.exports = { subsetsWithDup };