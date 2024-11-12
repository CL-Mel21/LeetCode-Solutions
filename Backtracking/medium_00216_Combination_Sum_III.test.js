const { combinationSum3 } = require("./medium_00216_Combination_Sum_III");
const _ = require("lodash");

it('', () => {
  const arrs = combinationSum3(4, 15);
  arrs.forEach(arr => {
    const sum = _.sum(arr);
    expect(sum).toBe(15);
  })
});

it('', () => {
  const arrs = combinationSum3(4, 9);
  expect(arrs.length).toBe(0);
});


it('', () => {
  const arrs = combinationSum3(4, 50);
  expect(arrs.length).toBe(0);
});


