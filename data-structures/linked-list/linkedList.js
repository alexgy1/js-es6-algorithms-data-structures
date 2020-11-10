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
      res += current.value;
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
      this.head = newNode;
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
    return true;
  }

  //根据index 取value
  get(position) {
    //边界判断
    if (position < 0 || position > this.length) return false;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.value;
  }

  //查看元素再链表中的位置
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (data == current.value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  update(position, newData) {
    if (position < 0 || position > this.length) return false;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.value = newData;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position > this.length) return false;

    let current = this.head;

    if (position == 0) {
      this.head = this.head.next;
    } else {
      (index = 0), (prev = null);
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      //前一个节点的next指向 被删除节点的next即可 被删除的节点 在c里面要自己手动释放 js里面有垃圾回收机制 不用程序员自己释放
      prev.next = current.next;
    }

    //修改长度
    this.length--;

    return current.value;
  }

  remove(data) {
    let position = this.indexOf(data);
    //根据位置信息 删除
    return this.removeAt(position);
  }

  isEmpty() {
    return this.length == 0;
  }

  size() {
    return this.length;
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

//test linkedlist append
let l = new LinkedList();

l.append(1);
l.append(2);
l.append(3);
// // console.log(l);
// // console.log(l.toString());

// //test insert
// l.insert(0, "aa");
// l.insert(3, "bb");
// l.insert(5, "end");
// console.log(l.toString());
// // console.log(l);
// console.log("test get method");

// console.log(l.get(10));

// console.log(l.get(0), l.get(3), l.get(5));

//test indexOf
// console.log(l.indexOf(1));
// console.log(l.indexOf(100));

//test update

// console.log(l);
// l.update(0, "alex");
// console.log(l);

// console.log(l.removeAt(100));
// console.log(l.removeAt(0));

//test remove
console.log(l);
l.remove(1);
console.log(l);

//test isEmpty size
console.log(l.isEmpty(), l.size());
