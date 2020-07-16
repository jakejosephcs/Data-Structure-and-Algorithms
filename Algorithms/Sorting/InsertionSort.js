// O(n^2) time | O(1) space

const numArray = [2, 8, 5, 3, 9, 4, 1]

function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    let current = array[i];
    let j = i-1;
    while (j >= 0 && array[j] > current) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = current
  }
}

insertionSort(numArray)



