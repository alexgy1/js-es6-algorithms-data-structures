//https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
class Queue {
  constructor() {
    this.data = [];
    this.size = this.data.length;
  }

  peek() {
    if (this._isEmpty()) return null;
    return this.data.shift();
  }
  enQueue(e) {
    this.data.push(e);
  }
  deQueue() {
    if (this._isEmpty()) throw new Error("queue is empty");
    return this.data.shift();
  }

  _isEmpty() {
    return this.zie === 0;
  }
  _toSting() {
    console.log(this.data.toString());
  }
}

module.exports = Queue;
