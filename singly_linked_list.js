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
}

const list = new SinglyLinkedList();
console.log(list);
list.unshift('Biscuit');
list.unshift('Meringue');
console.log(list);
