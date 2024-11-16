/*
hard_00085_Maximal_Rectangle
*/

function maximalRectangle(matrix: string[][]): number {
  let area: number = 0, row: number[] = new Array(matrix[0].length).fill(0);
  const getRowMaxArea = (arr: number[], area: number): number => {
    let stack: number[] = [];
    for (let i: number = 0; i <= arr.length; i++) {
      while (
        stack.length && (
          arr[i] < arr[stack[stack.length - 1]]
          || i === arr.length
        )
      ) {
        const height: number = arr[stack.pop()!];
        const width: number = stack.length ? i - stack[stack.length - 1] - 1 : i;
        area = Math.max(area, height * width);
      }
      stack.push(i);
    }
    return area;
  };
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[0].length; j++) {
      row[j] = matrix[i][j] === "0" ? 0 : row[j] + 1;
    }
    area = getRowMaxArea(row, area);
  }
  return area;
};

export default maximalRectangle;