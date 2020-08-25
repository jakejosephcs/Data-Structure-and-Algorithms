// O(n) time | O(n) space
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, leftIdx, rightIdx) {
  if (rightIdx < leftIdx) return;
  const midIdx = Math.floor((leftIdx + rightIdx) / 2);
  const bstNode = new BST(array[midIdx]);
  if (bst === null) {
    bst = bstNode;
  } else {
    if (array[midIdx] < bst.value) {
      bst.left = bstNode;
      bst = bst.left;
    } else {
      bst.right = bstNode;
      bst = bst.right;
    }
  }
  constructMinHeightBst(array, bst, leftIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, rightIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
