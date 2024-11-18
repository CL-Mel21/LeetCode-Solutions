/*
medium_00090_Subsets_II
*/

function subsetsWithDup(nums: number[]): number[][] {
  let map: Map<number, number> = new Map();
  for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

  let arr: number[] = Array.from(map.keys()), r: number[][] = [[]];
  const helper = (i: number): void => {
    if (i === arr.length) return;
    let newR: number[][] = [], temp: number[] = [];
    for (let j = 0; j < (map.get(arr[i]) || 0); j++) {
      temp.push(arr[i]);
      newR.push(...r.map(subset => [...subset, ...temp]));
    }
    r.push(...newR);
    helper(i + 1);
  };

  helper(0);
  return r;
};

export default subsetsWithDup;