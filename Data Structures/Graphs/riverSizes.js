// O(wh) time | O(wh) space
function riverSizes(matrix) {
  const sizes = [];
  const visited = makeArray(matrix.length, matrix[0].length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j] === true || matrix[i][j] === 0) continue;
      traverseNode(i, j, visited, matrix, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, visitedArray, inputMatrix, sizes) {
  let riverSize = 0;
  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length !== 0) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visitedArray[i][j] === true) continue;
    visitedArray[i][j] = true;
    if (inputMatrix[i][j] === 0) continue;
    riverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(
      i,
      j,
      inputMatrix,
      visitedArray
    );
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (riverSize > 0) sizes.push(riverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[i].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

function makeArray(n, m) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < m; j++) {
      arr[i][j] = false;
    }
  }
  return arr;
}

