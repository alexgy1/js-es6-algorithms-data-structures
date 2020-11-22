## 数据

- 逻辑关系
  - 线性
  - 非线性
- 存储关系

  - 顺序
  - 链接

- 算法
  就是求解问题和步骤的序列，
  如何描述？

    <!-- - 自然语言 中文 英文
    - 流程图
    - 伪代码 -->

  转化成对应的程序语言
  一个问题可能有多个
  程序就是数据结构加算法

  - 有穷性
  - 确定性
  - 可行性
  - 输入
  - 输出

  如何好的算法？

  - 正确性 correctness
  - 可读性 readablity
  - 健壮性 robustness
  - 高效性 efficiency
    - 时间少
    - 占用内存少

## 算法如何衡量？

> 时间效率和空间效率有时候是矛盾的 结合具体的场景取舍

- Time

  - 事后统计
  - 事前分析 （选这个） 估算

    - 算法运行时间= 一个简单操作所需时间 \* 简单操作次数
    - 多项式 麻烦 改成 数量级 T = O(n)

    ```
    let i = 1

    whlie(i<=n){
      i*=2
    }

    1 i = 2
    2 i = 4
    3 i = 2^3

    x i = 2^x

    i<=n => 2^x <= n => x<= log2n

    对数级别
    O(logN)

    ```

- Space

## ADT abstract data type

- 数据类型
- 数据关系
- 数据操作

## c 语言中

- 用已有的数据类型定义存储结构
- 用函数定义数据操作
  > 就可以在程序中使用了 用已经有的数据类型 和数据操作来描述

```c
typedef struct{
    float realpart;
    float imaqpart;
}Complex //定义抽象类型

void assign(Complex *A, float real, float, imag) //赋值
void add(Complex *A , float real, float imag)
void add(Complex *A , float real, float imag)
void add(Complex *A , float real, float imag)
void add(Complex *A , float real, float imag)
```

## 线性表

- 元素既可以是简单类型也可以是复杂数据类型
- a-z
- 十二星座
- 某单位历年拥有计算机数量 (3, 1, 3, 34, 435)
- 元素必定有相同的特性 元素之间的关系是线性关系
- 图书管理系统
  - 查找
  - 插入
  - 删除
  - 修改
  - 排序
    - 按书名
    - isbn
  - 计数

```
图书表就抽象成线性表
每一项抽象成线性表的元素


//数组表示
var bookList = [
  {
    name:"程序设计基础",
    isbn:"123234",
    price:"44"
  },
  {
    name:"编译原理",
    isbn:"3234",
    price:"48"
  }
]

//链表表示

如何选择？
根据需要 选择合适的
所以要知道数组和链表的在插入 删除 查找方面的区别

所以图书管理系统怎么完成？
1. 选择适当的存储结构
2. 实现此存储结构上的基本操作
3. 利用基本操作完成功能

举一反三
商品信息管理
学生管理
库存管理

LineList{

  init()
  destory()//表都没了
  clear()//表本身还在
  empty()
  length()
  //查找
  getElem()
  locateElem()
  priorElem() //求前驱节点
  nextElem()
  //增
  insert()
  //删
  delete(s)
  traverse() //遍历
}

顺序表示和实现
  - 占用连续内存空间 如果每个元素占用l个存储单元 下一个的很容易计算出来
  LOC(ai + 1) = LOC(ai) + l

  LOC(ai) = LOC(a1) + (i-1)* i
链式表示和实现


顺序表的顺序存储表示
数组类似 用一维数组表示顺序表

线性表长度可变
c语言没法 数组长度不可动态定义 那怎么解决？ 用一个变量表示顺序表的长度属性

# define LIST_INIT_SIZE 100
typedef struct{
  ElmType elem[LIST_INIT_SIZE];
  int length;//当前长度
}

# define MAX_BOOK_SIZE 1000

typeDef struct{
  char no[20]; //图书ISBN
  char name[50]; //图书名字
  float price
}Book;

typeDef struct{
  Book *elem; //存储空间的基地址
  int length;//图书表中当前图书的个数
}SqList;//图书表的顺序存储结构类型为SqList



//数组的定义
1 数组静态分配
typeDef struct{
  Elemtype data[MaxSize];//基地址 就是一个指针？
  int length;
}SqList //顺序表类型

2 数组动态分配
typeDef struct{
  ElemType *data;
  int length;
}SqList

//后面为动态数组 动态分配空间
SqList L;
l.data = (ElemType*)malloc(sizeof(Elemype*) * MaxSize)

malloc(m) 函数 开辟m字节长度的地址空间 并且返回这段空间的首地址
sizeof(x)运算 计算变量x的长度
free(p) 释放指针p所指变量的存储空间，就是彻底删除一个变量

需要加头文件
<stdlib.h>
...
```

## 参考

- wiki
- 数据结构(c 语言版 第二版) 已读 245 页 /总数 883 页
- 万能的互联网

## leetcode

- [stack](https://leetcode.com/tag/stack/) 61 problems.
  20 Valid Parentheses 39.3% Easy
  42 Trapping Rain Water 50.0% Hard
  71 Simplify Path 33.2% Medium
  84 Largest Rectangle in Histogram 36.0% Hard
  85 Maximal Rectangle 38.7% Hard
  94 Binary Tree Inorder Traversal 64.7% Medium
  103 Binary Tree Zigzag Level Order Traversal 49.2% Medium
  144 Binary Tree Preorder Traversal 56.6% Medium
  145 Binary Tree Postorder Traversal 56.3% Medium
  150 Evaluate Reverse Polish Notation 37.1% Medium
  155 Min Stack 45.4% Easy
  173 Binary Search Tree Iterator 58.0% Medium
  224 Basic Calculator 37.6% Hard
  225 Implement Stack using Queues 46.3% Easy
  232 Implement Queue using Stacks 50.9% Easy
  255 Verify Preorder Sequence in Binary Search Tree 45.9% Medium
  272 Closest Binary Search Tree Value II 51.2% Hard
  316 Remove Duplicate Letters 38.4% Medium
  331 Verify Preorder Serialization of a Binary Tree 40.7% Medium
  341 Flatten Nested List Iterator 53.7% Medium
  385 Mini Parser 34.2% Medium
  394 Decode String 51.1% Medium
  402 Remove K Digits 28.5% Medium
  439 Ternary Expression Parser 56.2% Medium
  456 132 Pattern 30.4% Medium
  496 Next Greater Element I 64.7% Easy
  503 Next Greater Element II 57.4% Medium
  591 Tag Validator 34.6% Hard
  636 Exclusive Time of Functions 53.0% Medium
  682 Baseball Game 65.1% Easy
  726 Number of Atoms 50.9% Hard
  735 Asteroid Collision 43.0% Medium
  739 Daily Temperatures 64.0% Medium
  770 Basic Calculator IV 54.6% Hard
  772 Basic Calculator III 42.4% Hard
  844 Backspace String Compare 46.7% Easy
  856 Score of Parentheses 61.8% Medium
  880 Decoded String at Index 24.5% Medium
  895 Maximum Frequency Stack 61.8% Hard
  901 Online Stock Span 60.8% Medium
  907 Sum of Subarray Minimums 33.4% Medium
  921 Minimum Add to Make Parentheses Valid 74.5% Medium
  946 Validate Stack Sequences 63.1% Medium
  975 Odd Even Jump 41.8% Hard
  1003 Check If Word Is Valid After Substitutions 55.5% Medium
  1063 Number of Valid Subarrays 71.4% Hard
  1019 Next Greater Node In Linked List 58.2% Medium
  1021 Remove Outermost Parentheses 78.5% Easy
  1047 Remove All Adjacent Duplicates In String 69.6% Easy
  1081 Smallest Subsequence of Distinct Characters 53.3% Medium
  1124Longest Well-Performing Interval 33.0% Medium
  1130 Minimum Cost Tree From Leaf Values 67.1% Medium
  1190 Reverse Substrings Between Each Pair of Parentheses 63.8% Medium
  1209 Remove All Adjacent Duplicates in String II 57.3% Medium
  1249 Minimum Remove to Make Valid Parentheses 63.2% Medium
  1381 Design a Stack With Increment Operation 75.9% Medium
  1410 HTML Entity Parser 54.2% Medium
  1441 Build an Array With Stack Operations 69.4% Easy
  1541 Minimum Insertions to Balance a Parentheses String 41.8% Medium
  1544 Make The String Great 54.8% Easy
  1598 Crawler Log Folder

## data structure

- is a way in which data is stored on a computer
- is a data organization management and storage format that enables efficient and modification.

## the way of learning data structure

1. Abstract/Logical View

- ADTs are entitites that are definitions of data and operations but do not have implementation details.

2. Implementation View

## circlequeue

## linked list

- consists of nodes where each node contains a data field and a reference(link) to the next
  node in the list
- since they are not stored in a contiguous memmory locations

> advantages of Linked List over Arrays

- 1. Dynamic size
- 2. Ease of insertion/deletion

> Disadvantages of Linked List over Arrays

- 1. Random access is not allowed. We have to access elements sequentially starting from the first node
- 2. Extra memory space for a pointer is required with each element of the list
- 3. Not cache friendly. Since array elements are contiguous locations, they is locality of reference which is not there in case of linked lists.

> Options of linked list

- traversing a linked list
- append a new node
- prepend a new node
- insert a new node to a specific position in the list
- delete a node
- updating a node

> type of linked list

- singly linked list
- doubly linked list
- circular linked list

> some applications of linked list data structure

- implement Stacks Queues
- implement Graphs
- implement Hash Tables : Each bucket of the hash table can itself be a linked list
- Undo functionality in ps or word. linked list of states
