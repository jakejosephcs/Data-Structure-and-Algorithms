// RECURSIVE SOLUTION
// O(n) time | O(d) or O(logn) space
function invertBinaryTree(tree) {
  if (tree === null) return;
  [[tree.left], [tree.right]] = [[tree.right], [tree.left]];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

// ITERATIVE SOLUTION
// O(n) time | O(n) space
function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    [[current.left], [current.right]] = [[current.right], [current.left]];
    queue.push(current.left);
    queue.push(current.right);
  }
}

