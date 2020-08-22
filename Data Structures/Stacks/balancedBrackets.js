// O(n) time | O(n) space
function balancedBrackets(string) {
  const stack = [];

  const openingBrackets = '([{';
  const closingBrackets = ')]}';

  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === brackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
