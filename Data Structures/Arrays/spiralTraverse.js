// ------ITERATIVE SOLUTION------
// O(n) time | O(n) space
function spiralTraverse(array) {
  let startRow = 0;
  let endRow = array.length - 1;
  let startColumn = 0;
  let endColumn = array[0].length - 1;
  const result = [];

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let col = startColumn; col <= endColumn; col++) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endColumn]);
    }

    for (let col = endColumn - 1; col >= startColumn; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startColumn === endColumn) break;
      result.push(array[row][startColumn]);
    }

    startRow++;
    endRow--;
    startColumn++;
    endColumn--;
  }
  return result;
}

// ------RECURSIVE SOLUTION------
// O(n) time | O(n) space
function spiralTraverse(array) {
  const result = [];
  spiralFill(array, 0, array[0].length - 1, 0, array.length - 1, result);
  return result;
}

function spiralFill(array, startColumn, endColumn, startRow, endRow, result) {
  if (startColumn > endColumn || startRow > endRow) return;

  for (let col = startColumn; col <= endColumn; col++) {
    result.push(array[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endColumn]);
  }

  for (let col = endColumn - 1; col >= startColumn; col--) {
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }

  for (let row = endRow - 1; row >= startRow + 1; row--) {
    if (startColumn === endColumn) break;
    result.push(array[row][startColumn]);
  }

  spiralFill(array, startColumn + 1, endColumn - 1, startRow + 1, endRow - 1, result);
}
