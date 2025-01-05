class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) 
        current = current.nextNode;
      current.nextNode = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) current = current.nextNode;
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.headNode;
    for (let i = 0; i < index; i++) current = current.nextNode;
    return current;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const popped = this.headNode;
      this.headNode = null;
      this.length--;
      return popped;
    }
    let current = this.headNode;
    while (current.nextNode.nextNode) current = current.nextNode;
    const popped = current.nextNode;
    current.nextNode = null;
    this.length--;
    return popped;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let output = "";
    let current = this.headNode;
    while (current) {
      output += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return output + "null";
  }
  insertAt(value, index) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    let current = this.headNode;
    let prev = null;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.nextNode;
      i++;
    }
    const newNode = new Node(value);
    prev.nextNode = newNode;
    newNode.nextNode = current;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      const removed = this.headNode;
      this.headNode = this.headNode.nextNode;
      this.length--;
      return removed;
    }
    let current = this.headNode;
    let prev = null;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.nextNode;
      i++;
    }
    prev.nextNode = current.nextNode;
    this.length--;
    return current;
  }
}

module.exports = { LinkedList };
