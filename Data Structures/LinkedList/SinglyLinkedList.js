// NOTE: WHEN THERE IS NO REFERENCE TO THE NODE (NO ARROWS POINT AT IT) IT WILL BE DELETED

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // Insert at the end of a Linked List
  addToEnd(data) {
    let newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      return this.head
    }

    let currentNode = this.head

    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
    return this.head
  }

  // Insert at the start of a Linked List
  addToStart(data) {
    let newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }
    newNode.next = this.head
    this.head = newNode
    return this.head
  }

  // Insert at a specific position in a Linked List
  insertAtPosition(data, position) {
    let newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }

    if (position === 0) {
      return this.addToStart(data)
    }
    let curr = this.head
    let i = 0
    while (i < position - 1) {
      curr = curr.next
      i++
    }
    newNode.next = curr.next
    curr.next = newNode
    return this.head
  }

  // Insert after a specific node value (insert "data" after node with value "insertAfer")
  addAfter(insertAfter, data) {
    let newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }
    let curr = this.head
    while(curr.value !== insertAfter) {
      curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
  }

  // Delete last node in the list
  deleteLast() {
    if (this.head === null || this.head.next === null) {
      this.head = null
      return this.head
    }
    let curr = this.head
    while (curr.next.next !== null) {
      curr = curr.next
    }

    curr.next = null
    return this.head
  }

  // Delete first node in the list
  deleteFirst() {
    if (this.head === null) {
      return
    }
    let curr = this.head
    this.head = this.head.next
    curr = null
  }

  // Delete after a specific node value (after node with value "data")
  deleteAfter(data) {
    curr = head
    nodeToDelete = null
    while(curr != null){
      if(curr.data === data && curr.next != null) {
        toDelete = curr.next
        curr.next = toDelete.next
        break;
      }
      curr=  curr.next
    }
    return toDelete
  }

  // Print contents of the list
  printLinkedList() {
    if (this.head === null) {
      return
    }

    let currentNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }

  // Delete at a specific position in the list
  deleteAtPosition(position) {
    if (this.head === null) {
      return
    }

    if (position === 0) {
      this.head = this.head.next
      return this.head
    }

    let curr = this.head
    let i = 0

    while (i < position - 1) {
      curr = curr.next
      i++
    }

    curr.next = curr.next.next
    return this.head
  }

  // Print linked list in reverse (iterative)
  printInReverseIterative(){
    if (this.head === null) {
      return
    }

    let stack = []
    let curr = this.head

    while (curr !== null) {
      stack.push(curr.value)
      curr = curr.next
    }

    while (stack.length > 0) {
      console.log(stack.pop())
    }

  }

  // Print linked list in reverse (recursively)
  printInReverseRecursive(head = this.head) {
    if (head === null) {
      return
    } else {
      this.printInReverseRecursive(head.next)
      console.log(head.value)
    }
  }

  // Reverse a linked list
  reverseLinkedList() {
    if (this.head === null) {
      return
    }
    let curr = this.head
    let prev = null
    let next = null
    while (curr !== null) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
    return prev
  }
}

