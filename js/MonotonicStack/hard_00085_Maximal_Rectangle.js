/*
hard_00085_Maximal_Rectangle
*/

var maximalRectangle = function (matrix) {
  let n = matrix.length, m = matrix[0].length, area = 0;
  const getRowMaxArea = (arr, area) => {
    let stack = [];
    for (let i = 0; i <= arr.length; i++) {
      while (
        stack.length > 0 && (
          arr[i] < arr[stack[stack.length - 1]]
          || i === arr.length
        )
      ) {
        const height = arr[stack.pop()];
        const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
        area = Math.max(area, height * width);
      }
      stack.push(i);
    }
    return area
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrix[i][j] = matrix[i][j] === "0" ? 0 : i > 0 ? matrix[i - 1][j] + 1 : 1;
    }
    area = getRowMaxArea(matrix[i], area);
  }
  return area;
};

module.exports = { maximalRectangle };