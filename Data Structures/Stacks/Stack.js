class Stack {
  constructor() {
    this.size = 0
    this.storage = {}
  }

  // Push element to the top of the stack
  push(element) {
    this.size++
    this.storage[this.size] = element
  }

  // Remove element from the top of the stack
  pop() {
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size--
    return removed
  }

  // View the top most element in the stack
  peek() {
    return this.storage[this.size]
  }
}