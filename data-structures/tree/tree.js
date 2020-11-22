class Node {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return "Node=" + value;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.leftChild = null;
    this.rightChild = null;
  }

  insert(value) {
    var node = new Node(value);
    if (this.root == null) {
      this.root = node;
      return;
    }
    var current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.leftChild == null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (current.rightChild == null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  //boolean
  find(value) {
    var current = this.root;

    while (current != null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false;
  }

  dfsPreOrder() {
    this._dfsPreOrder(this.root);
  }
  _dfsPreOrder(root) {
    //base condition
    //root print
    //left
    //right
    if (root == null) return; // root 既是根也是下一哥leftChild || rightChild
    console.log(root.value);
    this._dfsPreOrder(root.leftChild);
    this._dfsPreOrder(root.rightChild);
  }

  dfsInOrder() {
    this._dfsInOrder(this.root);
  }
  _dfsInOrder(root) {
    if (root == null) return;
    this._dfsPreOrder(root.leftChild);
    console.log(root.value);
    this._dfsPreOrder(root.rightChild);
  }

  dsfPostOrder() {
    this._dsfPostOrder(this.root);
  }
  _dsfPostOrder(root) {
    if (root == null) return;
    this._dfsPreOrder(root.leftChild);
    this._dfsPreOrder(root.rightChild);
    console.log(root.value);
  }

  height() {
    this._height(this.root);
  }
  _height(node) {
    var root = node;
    if (root == null) return -1;
    if (root.leftChild == null && root.rightChild == null) return 0;

    var leftH = this._height(root.leftChild);
    var rightH = this._height(root.rightChild);
    return 1 + Math.max(leftH, rightH);
    // (
    //   Math.max(this._height(root.leftChild), this._height(root.rightChild)) + 1
    // );
  }
}

// test insert
let t = new Tree();

t.insert(7);
t.insert(4);
t.insert(9);
t.insert(1);
t.insert(6);
t.insert(8);
t.insert(10);
// console.log(t);
// Tree {
//   root:
//    Node {
//      value: 7,
//      leftChild: Node { value: 4, leftChild: [Node], rightChild: [Node] },
//      rightChild: Node { value: 9, leftChild: [Node], rightChild: [Node] } },
//   leftChild: null,
//   rightChild: null }

//test find
// console.log(t.find(10), t.find(11));

//Breadth first
// depth first
// pre-order root l r
//in-order l roor right
// post-ordder l r root

//test dfsPreOrder
//test dfsInOrder
//test dsfPostOrder
// t.dfsPreOrder(); //7 4 1 6 9 8 10  root left right
// t.dfsInOrder();//4 1 6 7 9 8 10    left root right
// t.dsfPostOrder(); //4 1 6  9 8 10 7    ledt right root  post order root is the last element
// console.log(t);

//depth  go deeper from root
//heigth go hrigher form the leef 1 + max(h(L) , h(R))

//test height
console.log(t.height());
