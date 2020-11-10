const Node = require("./node");

/**
 * 1 单向链表
 * 2 双向链表
 * 3 循环链表
 */

// 单向链表的es6实现 带头节点和尾节点的单向链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //尾插法
  append(value) {
    let node = new Node(value),
      current;
    if (this.length == 0) {
      //init
      this.head = node;
    } else {
      current = this.head;
      //不为空
      while (current.next) {
        current = current.next;
      }
      //  最后节点next指向最后一个节点
      current.next = node;
    }
    this.length += 1;
  }
  toString() {
    let res = "";
    let current = this.head;

    //这里是current即可
    while (current) {
      res += " " + current.value;
      current = current.next;
    }
    return res;
  }

  //头部 或者中间  或者最后
  insert(position, data) {
    //边界判断
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(data);
    //1. 往头部插入
    if (position == 0) {
      //新节点指向第一个元素
      newNode.next = this.head;
      this.head.next = newNode;
    } else {
      //2 position > 1 //也包含了从链表尾部插入的情况 画图就可以看出
      let index = 0;
      let current = this.head;
      let prev = null; //需要引入prev变量 保证可以找到上一个节点
      //先判断再加
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      // = position
      //新节点指定下一个节点
      newNode.next = current;
      //上一个节点 指定下一个节点是 newNode
      prev.next = newNode;
    }
    this.length += 1;
  }

  search(value) {
    let curNode = this.head;
    while (curNode && curNode.value !== value) {
      curNode = curNode.next;
    }
    //if currNode =null || 找到了 都要返回
    return curNode;
  }
}

let l = new LinkedList();

// l.append(1);
l.append(2);
l.append(3);
console.log(l);
console.log(l.toString());
