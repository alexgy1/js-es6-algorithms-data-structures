/**
 *
 * 反转两个节点
 * n n+1
 * n+1的next 指向 n
 *
 *
 * 反转多个节点
 *
 * 1 双指针  重复
 * 2 递归
 */

//1  双指针  重复

function reverseLinkedList(head) {
  var p1 = head;
  var p2 = null;

  while (p1) {
    // var temp = p1.next 4
    // p1.next = p2 3
    // p2 = p1  2
    // p1 = p1.next 1
    var temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
}

var a = { val: 1 };
var b = { val: 2 };
var c = { val: 3 };
var d = { val: 4 };
var e = { val: 5 };
var f = { val: null };

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// while (a) {
//   console.log(a && a.val);
//   a = a.next;
// }

var res = reverseLinkedList(a);

while (res) {
  console.log(res && res.val);
  res = res.next;
}

// null
// 5
// 4
// 3
// 2
// 1
