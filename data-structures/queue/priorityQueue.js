class Node {
  constructor(e, priority) {
    this.e = e;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(e, priority) {
    this.datas = [];
  }

  enQueue(e, priority) {
    let queueElement = new Node(e, priority);

    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.datas.push(queueElement);
    }
  }
  //other methods is the same as queue
}
