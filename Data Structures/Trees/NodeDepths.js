// Write a function that takes in a Binary Tree and returns a sum of 
// its node depths.

// A Binary Tree branch is a path of nodes in a tree that starts at 
// the root node and ends at any leaf node.

// Each BinaryTree node has an integer value, a left child node, and a right child node.
// Children nodes can either be BinaryTree nodes themselves or None / null.

// Sample Input:
// tree =   1
//       /     \
//       2       3
//     /   \    /  \
//    4     5  6    7
//  /   \  
// 8    9 

// Sample Output: 
// 16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc.
// Summing all of the depths yields 16

// ____________________________________________

// O(n) time | O(h) space where n is the number of 
// nodes and h is the depth of the binary tree
function nodeDepths(root, depth = 0) {
  if (root === null) return 0

  return depth 
    + nodeDepths(root.left, depth + 1) 
    + nodeDepths(root.right, depth + 1)
}

// O(n) time | O(h) space where n is the number of 
// nodes and h is the depth of the binary tree
function nodeDepths(root) {
  const callStack = [{node: root, depth: 0}];
  let sumOfDepths = 0;
  
  while (callStack.length > 0) {
    let poppedNode = callStack.pop();
    let node = poppedNode.node;
    let depth = poppedNode.depth;

    if (node === null) continue

    sumOfDepths += depth

    callStack.push({node: node.left, depth: depth + 1})
    callStack.push({node: node.right, depth: depth + 1})
  }

  return sumOfDepths
}

