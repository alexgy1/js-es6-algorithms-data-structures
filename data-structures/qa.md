## 线性表的常见问题

1. LA(1,2,3) LB(2,5,7) 求 LA LB 交集 (1,2,3,5,7)

2. 两个顺序有序表的合并 LA(1,10,100) LB(2,11,110) 求(1,2,10,11,100,110)
3. 两个链式有序表的合并
4. 一元多项式的计算

## 栈和队列是特殊的线性表

### 栈的应用案例

- 数制转换
- 括号匹配检查

```js
//思路：遍历字符串，  只有左括号就入栈  ， 是右括号就让栈里面的对应的，左括号出栈， 遍历结束后， 检查栈是否为空， 为空，正确， 反之不正确
const answer = (s ，stack= []) => {
       if(s.length %2 !==0 )return false //是奇数个 不用比了
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        for(var i of s){
            if(map[i]){stack.push(i)} //是左括号 入栈
            else {
               //i是右括号  stack.pop()是左括号, map[stack.pop()] 是右括号， 两个不等 说明第一次入栈的是右括号， 或者不是左括号对应的右括号的情况 不符合要求

                if(i != map[stack.pop()]) return false;
            }
        }
        return !stack.length
    }

时间复杂度：O(N) 要遍历一遍
空间复杂度：O(N) 要借助额外的栈
```

- 表达式求值

### 队列的应用案例

- 舞伴问题

### 算法思想

- 递归: 分治法 一个复杂的问题拆解成多个相似的小问题， 有结束条件
  - 定义是递归的：
    - 1. 阶乘函数
    - 2. 二阶 Fibonacci
  - 数据结构就是递归的
    - 1. 链表： 递归输出链表节点 ，递归出口就是当前节点为 null 否则 当前节点的值输出 然后当前节点的 next 赋值给当前节点
    - 2. tree
  - 问题的解法是递归的，问题本身没有明显递归结构，但是递归比迭代简单
    - 1. 汉诺塔问题
    - 2. 八皇后
    - 3. 迷宫问题

## 答案

```js
//解法:双指针

const mergeOrderdTwoArr = (arrA, ArrB, )=>{
  //边界处理
  if(!Array.isArray(ArrA) || !Array.isArray(ArrA)) throw('mast be array ')
  let lenA = arrA.length, lenB = arrB.length;
  if(lenA  == 0&& leB == 0) return []
  if(lenA == 0 )return arrB
  if(lenB == 0) return arrA


  //noraml
  let pA =0, pB = 0 , res = [];
  while( (pA < lenA) && (pB<lenB)){
     if(arrA[pA] > arr[pB] ){
       res.push(arr[pB])
       pB++
     }else{
       res.push(arr[pA])
       pA++
     }
  }
  whlie(pA < lenA){
    res.push(arr[pA])
    pA++
  }
  whlie(pB < lenB){
    res.push(arr[pB])
    pB++
  }
  return res
}
```
