class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    //为空
    if (this.length == 0) {
      this.head = node;
    } else {
      //不为空
      let current = this.head;
      while (current) {
        current = current.next;
      }
      console.log(current);
      // current.next = node;
    }
    this.length++;
  }

  toString() {
    //从前往后遍历
    return this.backwardTraversal();
  }

  forwardTraversal() {
    let current = this.tail,
      resStr = "";
    while (current) {
      resStr += current.data + "";
      current = current.prev;
    }
    return resStr;
  }

  backwardTraversal() {
    let current = this.head,
      resStr = "";
    while (current) {
      resStr += current.data + "";
      current = current.next;
    }
    return resStr;
  }
}

let l = new DoubleLinkedList();

//test append
l.append("aaa");
l.append("bbb");
// l.append("ccc");

console.log(l);
