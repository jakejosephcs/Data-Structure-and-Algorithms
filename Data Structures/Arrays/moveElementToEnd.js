// O(n) time | O(1) space
function moveElementToEnd(array, twoMove) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && array[rightPointer] === twoMove) {
      rightPointer--;
    }
    if (array[leftPointer] === twoMove) {
      [array[leftPointer], array[rightPointer]] = [
        array[rightPointer],
        array[leftPointer],
      ];
    }
    leftPointer++;
  }
  return array;
}

