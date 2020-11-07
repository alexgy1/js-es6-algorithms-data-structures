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
