// O(n^2) time | O(1) space

const numArray = [2, 8, 5, 3, 9, 4, 1]

function selectionSort(array) {
  for (let i=0; i<array.length-1; i++) {
    let iMin = i;
    for (let j=i+1; j<array.length; j++) {
      if (array[j] < array[iMin]) {
        iMin = j;
      }
    }
    let temp = array[i];
    array[i] = array[iMin];
    array[iMin] = temp;
  }
  return array;
}

selectionSort(numArray)


