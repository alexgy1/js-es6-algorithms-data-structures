/**
 *
 *
 * LinkedList{
 *  value: value
 *  next : Node
 * }
 */

const TL = LinkedList => {
  if (LinkedList == null) return;
  console.log(p.value);
  TL(LinkedList.next);
};

//可以转化为
const TLS = LinkedList => {
  if (LinkedList) {
    console.log(p.value);
    TLS(LinkedList.next);
  }
};
