// O(n) time | O(d) space
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const isValidLeft = validateBstHelper(tree.left, minValue, tree.value);
  const isValidRight = validateBstHelper(tree.right, tree.value, maxValue);
  return isValidLeft && isValidRight;
}
