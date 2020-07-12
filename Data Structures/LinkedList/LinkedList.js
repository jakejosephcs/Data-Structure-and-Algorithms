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

  addToEnd(data) {

    let n = new Node(data)

    if (this.head === null) {
      this.head = n
    } else {
      let curr = this.head
      while(curr.next !== null) {
        curr = curr.next
      }
      curr.next = n
    }
  }

  addToStart(data) {
    n = new Node(data)
    n.next = head
    head = n
  }

  addAfter(insertAfter, data) {
    curr = head
    while(curr !== null) {
      if (curr.data === insertAfter) {
        n = new Node(data)
        n.next = curr.next
        curr.n = n
        break
      }
      curr = curr.next
    }
  }

  deleteLast() {
    curr = head
    if (curr === null || curr.next === null) {
      head = null
      return curr
    }
    nextNode = curr.next
    while(curr.next !== null) {
      if(nextNode.next === null) {
        curr.next = null
      }
      curr = nextNode
      nextNode = nextNode.next
    }
    return curr
  }

  deleteFirst() {
    if (head != null) {
      toDelete = this.head
      head = head.next
      return toDelete
    }
    return null
  }

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
}
