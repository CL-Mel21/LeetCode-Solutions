/*
easy_01652_Defuse_the_Bomb
*/

var decrypt = function (code, k) {
  if (k === 0) return code.map(n => 0);
  let n = code.length;
  let sum = 0, r = new Array(n), absK = Math.abs(k);
  for (let i = 0; i < absK; i++) {
    sum += code[i];
  }
  let j = k > 0 ? n - 1 : absK;
  r[j] = sum;
  for (let i = absK; i < n + absK - 1; i++) {
    sum += code[i % n] - code[(i - absK) % n];
    j++;
    if (j >= n) j -= n;
    r[j] = sum;
  }
  return r;
};

module.exports = { decrypt };