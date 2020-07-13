// NOTE: WHEN THERE IS NO REFERENCE TO THE NODE (NO ARROWS POINT AT IT) IT WILL BE DELETED

class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // Add node to the end of the Doubly Linked List
  addToEnd(value) {
    let newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }
    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }
    curr.next = newNode
    newNode.prev = curr
    return this.head
  }
  
  // Add node to the start of the Doubly Linked List
  addToStart(value) {
    let newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }

  // Insert after a specific node value (insert "data" after node with value "insertAfer")
  addAfter(insertAfter, data) {
    let newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      return this.head
    }
    let curr = this.head
    while (curr.value !== insertAfter) {
      curr = curr.next
    }
    // In the case where we want to insert after the last node then curr.next === null
    if (curr.next !== null) {
      newNode.next = curr.next
      curr.next.prev = newNode
    }
    curr.next = newNode
    newNode.prev = curr
  }

  // Delete the last node in the list
  deleteLast() {
    if (this.head === null || this.head.next === null) {
      this.head = null
      return this.head
    }
    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }

    curr.prev.next = null
    return this.head
  }

  // Delete the node at the start of the list
  deleteAtStart(){
    if (this.head === null || this.head.next === null) {
      this.head = null
      return this.head
    }

    this.head = this.head.next
    this.head.prev = null
    return this.head
  }

  // Delete the node that comes after the given node data
  deleteAfter(data) {
    if (this.head === null || this.head.next === null) {
      this.head = null
      return this.head
    }

    let curr = this.head
    while (curr.value !== data) {
      curr = curr.next
    }

    curr = curr.next

    if (curr!== null) {
      if (curr.next !== null) {
        curr.next.prev = curr.prev 
      }
      curr.prev.next = curr.next
    }
    
    return this.head
  }
}

