/*
medium_00089_Gray_Code
*/

function grayCode(n: number): number[] {
  let arr: number[] = [0, 1];
  for (let i: number = 1; i < n; i++) {
    arr.push(...[...arr].reverse().map(n => n + (1 << i)));
  }
  return arr;
};

export default grayCode;