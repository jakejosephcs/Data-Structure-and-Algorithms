class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time | O(v) space
  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const children of current.children) {
        queue.push(children);
      }
    }
    return array;
  }
}

