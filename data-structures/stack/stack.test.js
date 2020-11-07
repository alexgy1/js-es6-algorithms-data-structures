const Stack = require("./stack");

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());

stack._toString();

stack.pop();
stack._toString();
stack.pop();
console.log(stack.pop());
console.log(stack.pop());

// 3
// 1,2,3
// 1,2
// 1
// null
