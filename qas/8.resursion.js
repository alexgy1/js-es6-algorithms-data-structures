// 4! = 4*3*2*1
const factorical = n => {
  var res = 1;
  for (var i = n; i > 1; i--) {
    res *= i;
  }
  return res;
};
// console.log(factorical(4));

// 4! = 4*3*2*1
// 3! = 3*2*1

// 4! = 4 * 3!
// n! = n * (n-1)!

//f(4) = 4 * f(3)
// f(3) = 3 * f(2)
// f(2 ) = 2 * f(1)
// f(1 ) = 1 * f(0)

//f(0) base condition  = 1

// f(1) = 1 * 1
// f(2 ) = 2 * 1
// f(3) = 3 * 2
// f(4) = 4 * 3 * 2
const factRecursive = n => {
  if (n == 0) return 1;
  return n * factRecursive(n - 1);
};

console.log(factRecursive(4));
