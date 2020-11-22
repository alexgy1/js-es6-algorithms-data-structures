//head 是linkedList的实例
const midOrUpMidNode = head => {
  //没有点 或者一个 或者两个
  if (head == null || head.next == null || head.next.next == null) return head;

  let slow = head.next,
    fast = head.next.next;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//奇数或者偶数
const midOrDownMidNode = head => {
  if (head == null || head.next == null) return null;
  if (head.next.next == null) return head;

  let slow = head;
  let fast = head.next;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
