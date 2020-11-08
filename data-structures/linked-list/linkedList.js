const Node = require("./node");

/**
 * 1 单向链表
 * 2 双向链表
 * 3 循环链表
 */

// 单向链表的es6实现 带头节点和尾节点的单向链表
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  //add to end of list/tail 尾插法
  append(value) {
    if (!this.tail) {
      //init
      this.head = this.tail = new Node(value);
    } else {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //add to beginning of list /head 头插法
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHeads;
    }
  }

  deleteHead() {
    if (!this.head) return null;
    let removedHead = this.head;
    //2个情况
    //one element
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      //TODO
      //用了prev 所以找到head就是 当前head下一个的prev
    }
    return removedHead.value;
  }
  deleteTail() {}

  search(value) {
    let curNode = this.head;
    while (curNode && curNode.value !== value) {
      curNode = curNode.next;
    }
    //if currNode =null || 找到了 都要返回
    return curNode;
  }
}
