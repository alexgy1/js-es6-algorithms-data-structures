//阶乘
//4! 4*Fact(4-1)

const Fact = n => {
  if (n == 0) return 1;
  return n * Fact(n - 1);
};

console.log(Fact(2));
console.log(Fact(3));
console.log(Fact(4));
