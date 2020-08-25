// O(n) time | O(1) space
function hasSingleCycle(array) {
  let currIdx = 0;
  let counter = 0;
  while (counter < array.length) {
    if (counter > 0 && currIdx === 0) return false;
    counter++;
    currIdx = getNextIdx(currIdx, array);
  }
  return currIdx === 0;
}

function getNextIdx(currentIndex, array) {
  let newIndex = currentIndex + array[currentIndex];
  if (newIndex >= array.length || newIndex < 0) {
    newIndex = newIndex % array.length;
  }
  return newIndex >= 0 ? newIndex : newIndex + array.length;
}
