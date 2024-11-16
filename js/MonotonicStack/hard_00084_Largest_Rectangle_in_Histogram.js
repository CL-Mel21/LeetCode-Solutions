/*
hard_00084_Largest_Rectangle_in_Histogram
*/

var largestRectangleArea = function (heights) {
  let area = 0;
  let stack = [];
  for (let i = 0; i <= heights.length; i++) {
    while (
      (i === heights.length && stack.length)
      || heights[i] < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      area = Math.max(area, height * width);
    }
    stack.push(i);
  }
  return area;
};

module.exports = { largestRectangleArea };