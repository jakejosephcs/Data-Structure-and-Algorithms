// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.

// You can assume that there will only be one closest value.

// Each BST  node has an integer value, a left child node, and a right child node.
// A node is said to be a valid BST  node if and only if it satisfies the BST
// property: its value  is strictly greater than the values of every
// node to its left; its value  is less than or equal to the values
// of every node to its right; and its children nodes are either valid BST nodes
// themselves or None / null

// Sample Input: 
// tree =   10
//        /     \
//        5      15
//       /   \   /   \
//      2     5 13   22
//     /           \
//    1            14
// target = 12

// Sample Output: 13

// ____________________________________________

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
  let winningNode = tree;
	let currNode = tree;
	let winningDiff = 0;
	let currDiff = 0;
	
	while (currNode) {
		winningDiff = Math.abs(target - winningNode.value);
		currDiff = Math.abs(target - currNode.value);
		
		if (currDiff < winningDiff) {
			winningNode = currNode;
		}
		
		if (currNode.value < target) {
			currNode = currNode.right;
		} else {
			currNode = currNode.left;
		}
	}
	return winningNode.value
}

// Average: O(log(n)) time | O(n) space
// Worst: O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, tree)
}

function findClosestValueInBstHelper(tree, target, winner) {
	if (tree === null) return winner.value
	let currNode = tree
	let winningNode = winner
	let currDifference = Math.abs(target - currNode.value)
	let winningDifference = Math.abs(target - winningNode.value)

	if (currDifference < winningDifference) {
		winningNode = currNode
	}

	if (currNode.value < target) {
		return findClosestValueInBstHelper(currNode.right, target, winningNode)
	} else if (currNode.value > target) {
		return findClosestValueInBstHelper(currNode.left, target, winningNode)
	} else {
		return winningNode.value
	}
}


