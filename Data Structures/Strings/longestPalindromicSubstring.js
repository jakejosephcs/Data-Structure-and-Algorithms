// O(n^2) time | O(1) space
function longestPalindromicSubstring(string) {
  let currLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = checkIfPalindrome(string, i - 1, i + 1);
    let even = checkIfPalindrome(string, i - 1, i);

    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currLongest =
      longest[1] - longest[0] > currLongest[1] - currLongest[0]
        ? longest
        : currLongest;
  }
  return string.slice(currLongest[0], currLongest[1]);
}

function checkIfPalindrome(string, leftIndex, rightIndex) {
  while (leftIndex >= 0 && rightIndex < string.length) {
    if (string[leftIndex] !== string[rightIndex]) break;
    leftIndex--;
    rightIndex++;
  }
  return [leftIndex + 1, rightIndex];
}

