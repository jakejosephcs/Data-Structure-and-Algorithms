// O(nlongn + mlogm) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let arrayOnePointer = 0;
  let arrayTwoPointer = 0;
  let absDifference = Infinity;
  let arrayOneWinner = null;
  let arrayTwoWinner = null;
  let currAbsDifference = Infinity;

  while (
    arrayOnePointer < arrayOne.length &&
    arrayTwoPointer < arrayTwo.length
  ) {
    let firstNum = arrayOne[arrayOnePointer];
    let secondNum = arrayTwo[arrayTwoPointer];

    if (firstNum === secondNum) {
      return [firstNum, secondNum];
    } else if (firstNum < secondNum) {
      currAbsDifference = secondNum - firstNum;
      arrayOnePointer++;
    } else if (firstNum > secondNum) {
      currAbsDifference = firstNum - secondNum;
      arrayTwoPointer++;
    }

    if (currAbsDifference < absDifference) {
      absDifference = currAbsDifference;
      arrayOneWinner = firstNum;
      arrayTwoWinner = secondNum;
    }
  }

  return [arrayOneWinner, arrayTwoWinner];
}


