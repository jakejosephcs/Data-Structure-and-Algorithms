// O(n^2) time | O(1) space
function selectionSort(array) {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let smallestIndex = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }
    [array[currentIndex], array[smallestIndex]] = [
      array[smallestIndex],
      array[currentIndex],
    ];
    currentIndex++;
  }
  return array;
}


