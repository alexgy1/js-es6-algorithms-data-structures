## 分类

> 存储数据本身 除了存储数据本身之外 再存储一个指针 指向下一个节点的位置 叫数据域和指针域

- 单向链表 数据域+ 只有一个指针域
- 双向链表 数据域 + 两个指针域
- 循环链表

## 是否带头节点

> 首元节点: 链表的第一个节点

- 带头节点
- 不带头节点

> 头节点不存储数据， 指针域指向首元节点 ，数据域可以自己决定存或者不存

- 查找
  - 找第 i 个 必须从第一个找到第 i 个才可以 这里叫顺序存取 与存储方式不同
  - 而顺序表是随机存取

## 学生管理系统链表设计

```c

typedef Struct student{
  char num[8];
  char name[8];
  int  score;
  struct student *next;//指针域
}Lnode， *LinkList;
```

## 习题

1.  求链表长度 计数器加遍历， 如何指向首元节点？ p = head.next 头节点的 next 就是首元节点 判断是否为空， 不为空计数器加一， 指针下移， 将下一节点的地址赋值给当前节点， p = p.next