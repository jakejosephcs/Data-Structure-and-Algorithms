// O(n) time | O(1) space
function isPlaindrome(string) {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

