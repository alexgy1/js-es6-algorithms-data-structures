// 1 1 2 3 5 8
// f(1) = 1
// f(2) = 1
//f(3) = f(2)+ f(1)
// f(4) = f(3) + f(2)
// f(n) = f(n-1) + f(n-2)

const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
