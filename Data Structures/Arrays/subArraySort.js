// O(n) time | O(1) space
function subarraySort(array) {
  let smallestNum = Infinity;
  let largestNum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    if (isOutOfOrder(i, currNum, array)) {
      smallestNum = Math.min(currNum, smallestNum);
      largestNum = Math.max(currNum, largestNum);
    }
  }

  if (smallestNum === Infinity) {
    return [-1, -1];
  }

  let numStartIdx = 0;
  while (smallestNum >= array[numStartIdx]) numStartIdx++;

  let numEndIdx = array.length - 1;
  while (largestNum <= array[numEndIdx]) numEndIdx--;

  return [numStartIdx, numEndIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}

