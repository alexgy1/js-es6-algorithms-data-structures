// const item = new WeakMap(); //WeakMap 可以确保属性私有 怎么做到的？

// class Stack {
//   constructor() {
//     item.set(this, []);
//   }

//   push(e) {
//     let s = item.get(this);
//     s.push(e);
//   }

//   pop() {
//     let s = item.get(this);
//     let r = s.pop();
//     return r;
//   }
// }

//item 是类外部声明的 谁都可以改动 怎么办？ 借助闭包
var Stack = (function() {
  const item = new WeakMap(); //WeakMap 可以确保属性私有 怎么做到的？

  class Stack {
    constructor() {
      item.set(this, []);
    }

    push(e) {
      let s = item.get(this);
      s.push(e);
    }

    pop() {
      let s = item.get(this);
      let r = s.pop();
      return r;
    }
  }
  return Stack;
})();

let s = new Stack();

s.push(1);
s.push(2);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
