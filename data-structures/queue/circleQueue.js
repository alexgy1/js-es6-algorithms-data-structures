class CircleQueue {
  constructor(len = 5) {
    this.front = this.rear = -1;
    this.data = new Array(len);
    this.len = len;
    this.count = 0;
  }

  isEmpty() {
    return this.front == -1 && this.rear == -1 ? true : false;
  }
  isFull() {
    //尾部加一 才追上头部 头尾始终差一
    if ((this.rear + 1) % this.len == this.front) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(val) {
    if (this.isFull()) return;
    if (this.isEmpty()) {
      this.rear = this.front = 0;
      this.data[this.reat] = val;
    } else {
      this.rear = (this.rear + 1) % this.len;
      this.data[this.rear] = val;
    }
    this.count++;
  }

  dequeue() {
    let res = 0,
      x;
    if (this.isEmpty()) {
      return res;
    } else if (this.rear == this.front) {
      x = this.data[this.rear];
      this.rear = this.front = -1;
      front++;
    } else {
      x = this.data[this.front];
      this.front = (this.front + 1) % this.len;
    }
    this.count--;
    return x;
  }

  count() {
    // return this.rear - this.front + 1;
    return this.count;
  }
}

let cq = new CircleQueue();

for (var i = 0; i < 6; i++) {
  cq.enqueue(i);
}
console.log(cq);
cq.dequeue();
console.log(cq.dequeue());
