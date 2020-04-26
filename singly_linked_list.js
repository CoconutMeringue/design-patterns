/**
 * reference to next node - next
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('Charles');
// first.next.next.next = new Node('Babbage');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let el = this.head;
    let pre;
    while (el.next) {
      pre = el;
      el = el.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let node = this.head;
      for (let i = 0; i != index; i++) {
        node = node.next;
      }
      return node;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return node;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let newNode = new Node(value);
      let previousNode = this.get(index - 1);
      let node = this.get(index);

      previousNode.next = newNode;
      newNode.next = node;
      this.length++
    }
    return true;
  }
}

const list = new SinglyLinkedList();
list.push('cake');
list.push('meringue');
list.push('biscuit');
console.log(list.insert(12,'bombon'));
