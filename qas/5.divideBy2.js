let Stack = require("../stack/stack.js");

const divBy2 = (decNumber, rate = 2) => {
  let remStack = new Stack(),
    rem,
    binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % rate);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / rate);
  }
  while (!remStack._isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};

console.log(divBy2(233));
console.log(divBy2(10));
console.log(divBy2(1000));
