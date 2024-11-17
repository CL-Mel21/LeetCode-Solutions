/*
medium_00089_Gray_Code
*/

var grayCode = function (n) {
  let arr = [0, 1];
  for (let i = 1; i < n; i++) {
    const newArray = [...arr].reverse().map(n => n + (1 << i));
    arr.push(...newArray);
  }
  return arr;
};

module.exports = { grayCode };