let Stack = require("../stack/stack.js");

const baseConverter = (decNumber, base = 2) => {
  let remStack = new Stack(),
    rem,
    binaryString = "";
  digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack._isEmpty()) {
    //十进制转 二进制 余数是0或1
    //十进制转 八进制 余数是0-7
    //十进制转 16进制 余数是0-9 + A-F
    //digits = "0123456789ABCDEF" digits[remStack.pop()]做转化
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
};

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
