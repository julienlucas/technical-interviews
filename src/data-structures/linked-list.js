class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    /* List is empty */
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      /* There is one node in the list */
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      /* There are multiple nodes in the list */
      // Start our pointer at the head
      let currentNode = this.head;
      // We're removing the last node in the list
      const nodeToRemove = this.tail;
      // This will be our new tail
      let secondToLastNode;

      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    /* We want the first node */
    if (index === 0) {
      return this.head;
    }

    /* We want the last node */
    if (index === this.length - 1) {
      return this.tail;
    }

    /* We want a node somewhere in the list */
    let currentNode = this.head;
    let iterator = 0;

    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  delete(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else if (index === 0) {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length--;
      return nodeToRemove;
    } else {
      let currentNode = this.head;
      let previousNode;
      let iterator = 0;

      while (iterator < index) {
        iterator++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      const nodeToDelete = currentNode;
      previousNode.next = currentNode.next;

      if (previousNode.next === null) {
        this.tail = this.previousNode;
      }

      this.length--;

      return nodeToDelete;
    }
  }

  print() {
    let currNode = this.head;
    while (currNode !== null) {
      currNode = currNode.next;
    }
  }
}

const list = new LinkedList();
list.push("Emma");
list.push("Sarah");
list.push("Ivy");
