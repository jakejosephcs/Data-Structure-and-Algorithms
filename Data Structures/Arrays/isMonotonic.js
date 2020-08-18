// O(n) time | O(1) space
function isMonotonic(array) {
  let firstPointer = 0;
  let secondPointer = 1;
  let initalSign = Math.sign(array[secondPointer] - array[firstPointer]);
  while (initalSign === 0) {
    firstPointer++;
    secondPointer++;
    initalSign = Math.sign(array[secondPointer] - array[firstPointer]);
  }
  let newSign;

  for (let i = firstPointer; i < array.length - 1; i++) {
    firstPointer = i;
    secondPointer = i + 1;
    newSign = Math.sign(array[secondPointer] - array[firstPointer]);
    if (newSign !== initalSign && newSign !== 0) {
      return false;
    }
  }
  return true;
}

