// O(n) time | O(1) space
function longestPeak(array) {
  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    const peak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if (!peak) {
      i++;
      continue;
    }

    let leftPointer = i - 2;
    while (leftPointer >= 0 && array[leftPointer] < array[leftPointer + 1]) {
      leftPointer--;
    }

    let rightPointer = i + 2;
    while (
      rightPointer < array.length &&
      array[rightPointer] < array[rightPointer - 1]
    ) {
      rightPointer++;
    }

    const currentPeakLength = rightPointer - leftPointer - 1;
    longestPeak = Math.max(currentPeakLength, longestPeak);
    i = rightPointer;
  }
  return longestPeak;
}
