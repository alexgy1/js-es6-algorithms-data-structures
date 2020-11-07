class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
  toStrin(cb) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}

module.exports = Node;
