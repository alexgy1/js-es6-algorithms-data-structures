//https://en.wikipedia.org/wiki/Tower_of_Hanoi

/**
 *
 * 1 如果只有一个盘子 直接移动到c
 * 2 否则 递归
 *    A- C 要借助 B , 所以将A上 1-n-1的盘子移动到B 借助C， 将编号为n的盘子直接移动到C
 * 3 递归
 *    将B上 1-n-1的盘子移动到C A做辅助塔
 */
const move = (A, n, C) => {
  console.log(`从${A} 移动第${n}个盘子到${C}`);
};
const Hanoi = (n, A, B, C) => {
  if (n == 0) {
    move(A, 1, C);
  } else {
    Hanoi(n - 1, A, C, B);
    move(A, n, C);
    Hanoi(n - 1, B, A, C);
  }
};

Hanoi(3, "A", "B", "C");
