// O(n + m) time | O(1) space
function searchInSortedMatrix(matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    let currValue = matrix[i][j];
    if (target === currValue) {
      return [i, j];
    } else if (target < currValue) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
}

