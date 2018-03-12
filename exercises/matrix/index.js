// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
     
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    // top row
    for (let i = colStart; i <= colEnd; i++) {
      // set the counter to index 0 for the first row and i index within that row/array
      result[rowStart][i] = counter;
      counter++;
    }
    // once loop is done, increment the row start to jump to next row
    rowStart++;

    // loop for end column
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = counter;
      counter++;
    }
    // decrement end column to start bottom row while columns move
    colEnd--;

    // loop for bottom row
    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = counter;
      counter++;
    }
    // decrement the end column after bottom row is filled
    rowEnd--;

    // loop for the start column
    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = counter;
      counter++;
    }
    colStart++;
  }
  return result;
}

module.exports = matrix;
