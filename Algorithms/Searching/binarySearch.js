// O(logn) time | O(1) space
function binarySearch(array, target) {
	let left = 0;
  let right = array.length - 1;
	let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

