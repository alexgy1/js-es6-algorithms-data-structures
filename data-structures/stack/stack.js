//https://simple.wikipedia.org/wiki/Stack_(data_structure)
//Last in First out
class Stack {
  constructor() {
    this.data = [];
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    if (this._isEmpty()) return null;
    return this.data.pop();
  }

  peek() {
    if (this._isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  _isEmpty() {
    return this.data.length === 0;
  }
  _toString() {
    console.log(this.data.toString());
  }
}

module.exports = Stack;
