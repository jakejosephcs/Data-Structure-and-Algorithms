// You're given a Node  class that has a naem  and an array of optional children  nodes. 
// When put together, nodes form an acyclic tree-like structure.

// Implement the depthFirstSearch method on the Node  class, which takes in an empty array, 
// traverses the tree using the Depth-first Search approach (specifically navigating
// the tree from left to right), stores all of the nodes' names in the input array, 
// and returns it.

// Sample Input:
// graph =     A
//          /  |  \
//         B   C   D
//        / \     / \
//       E   F   G   H
//          / \   \
//        I   J   K

// Sample Output:
// ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

// ____________________________________________

// O(v+e) time | O(v) space where v are the vertices (nodes) 
// and e are the edges (node connections)
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
		for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array)
    }
    return array
  }
}


