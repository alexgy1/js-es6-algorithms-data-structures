//First In First out
class Queue {
  constructor() {
    this.cache = {};
    this.head = this.tail = 0;
  }

  enqueue(e) {
    this.cache[this.tail] = e;
    this.tail++;
  }

  dequeue() {
    let removed = this.cache[this.head];
    delete this.cache[this.head];
    //从头移除 头指针后移
    this.head++;
    return removed;
  }
}

let q = new Queue();
q.enqueue("A");
q.enqueue("B");

console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
q.enqueue("s");
console.log(q);
