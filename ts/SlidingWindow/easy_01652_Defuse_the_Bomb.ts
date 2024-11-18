/*
easy_01652_Defuse_the_Bomb
*/

function decrypt(code: number[], k: number): number[] {
  const n: number = code.length;
  if (k === 0) return new Array(n).fill(0);
  let r: number[] = new Array(n), absK: number = Math.abs(k), j: number = k > 0 ? n - 1 : absK, sum: number = 0;
  for (let i: number = 0; i < absK; i++) {
    sum += code[i];
  }
  r[j] = sum;
  for (let i: number = absK; i < n - 1 + absK; i++) {
    sum += code[i % n] - code[(i - absK) % n];
    j++;
    if (j >= n) j -= n;
    r[j] = sum;
  }
  return r;
};

export default decrypt;