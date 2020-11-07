const Queue = require("./queue");

let q = new Queue();

q.enQueue(1);
q.enQueue(2);
q._toSting();

q.deQueue();
q._toSting();

q.peek();
