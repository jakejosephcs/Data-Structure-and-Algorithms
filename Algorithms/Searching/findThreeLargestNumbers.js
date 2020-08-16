// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  let largestThree = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    if (curr > largestThree[2] || largestThree[2] === null) {
      largestThree[0] = largestThree[1];
      largestThree[1] = largestThree[2];
      largestThree[2] = curr;
    } else if (curr > largestThree[1] || largestThree[1] === null) {
      largestThree[0] = largestThree[1];
      largestThree[1] = curr;
    } else if (curr > largestThree[0] || largestThree[0] === null) {
      largestThree[0] = curr;
    }
  }
  return largestThree;
}

