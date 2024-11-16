/*
hard_00084_Largest_Rectangle_in_Histogram
*/

function largestRectangleArea(heights: number[]): number {
  let area: number = 0, stack: number[] = [];
  for (let i: number = 0; i <= heights.length; i++) {
    while (
      stack.length
      &&
      (i === heights.length
        || heights[i] < heights[stack[stack.length - 1]])
    ) {
      const index: number = stack.pop()!;
      const height: number = heights[index];
      const width: number = stack.length ? i - stack[stack.length - 1] - 1 : i;
      area = Math.max(area, height * width);
    }
    stack.push(i);
  }
  return area;
};

export default largestRectangleArea;