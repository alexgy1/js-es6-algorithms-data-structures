//给定一个head 判断链表是否是回文

// 12321  12a21
//进栈 出栈再比较

const isPalinndrome = head => {
  let stack = [];
  let cur = head;
  //进栈
  while (cur != null) {
    stack.push(cur);
    cur = cur.next;
  }

  while (cur != null) {
    if (cur.value != stack.pop()) {
      return false;
    }
    cur = cur.next;
  }
  return true;
};

//减少空间  快慢指针  找到中点 一张纸对折  剩下的放进栈

//能不能不用栈？ 可以 但是要改变链表的结构

const isPalinndrome3 = head => {
  if (head == null || head.next == null) return true;

  let n1 = (n2 = head);
  while (n2.next != null && n2.next.next != null) {
    n1 = n1.next;
    n2 = n2.next.next;
  }
  //n1 is middle index

  //find the next index of middle index
  n2 = n1.next; // right part first node
  n1.next = null; // mid.next =null
  let n3; //   null n2  n3
  while (n2 != null) {
    // 1 2 3  2 1   -变成 1 -> 2 -> 3  <-2 <-1
    n3 = n2.next; //save the next node
    n2.next = n1;
    n1 = n2;
    n2 = n3;
  }

  n3 = n1; // save last node
  n2 = head;
  let res = true;
  while (n1 != null && n2 != null) {
    //check palindrome
    if (n1.value != n2.value) {
      res = false;
      break;
    }
    n1 = n1.next;
    n2 = n2.next;
  }
  n1 = n3.next;
  n3.next = null;
  while (n1 != null) {
    //recover list
    n2 = n1.next;
    n1.next = n3;
    n3 = n1;
    n1 = n2;
  }
  return res;
};
