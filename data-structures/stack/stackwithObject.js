class Stack {
  constructor() {
    this.cache = {};
    this.size = 0;
  }

  //e = element
  push(e) {
    this.size++;
    this.cache[this.size] = e;
  }
  pop() {
    if (!this._isEmpty()) {
      let removed = this.cache[this.size];
      delete this.cache[this.size];
      this.size--;
      return removed;
    }
  }
  peek() {
    if (!this._isEmpty()) {
      return this.cache[this.size];
    }
  }
  _isEmpty() {
    return this.size == 0;
  }
}

let s = new Stack();

s.push("a");
s.push("b");
console.log(s);

console.log(s.peek());
console.log(s);
s.pop();
console.log(s);
s.pop();
s.pop();
console.log(s);
