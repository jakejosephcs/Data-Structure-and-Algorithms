// // O(n^2) time | O(1) space

const numArray = [2, 8, 5, 3, 9, 4, 1]

function bubbleSort(array) {
  for (let i=0; i < array.length - 1; i++) {
    for (let j=0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

bubbleSort(numArray)


