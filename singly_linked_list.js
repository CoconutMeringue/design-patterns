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
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('bread');
console.log(list.head);
list.pop();
console.log(list.head);
