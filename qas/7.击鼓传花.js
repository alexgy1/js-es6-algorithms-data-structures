let Queue = require("../queue/queue.js");
function jiguchuanhua(nameList, num) {
  let queue = new Queue();

  //入队
  for (let i = 0; i < nameList.length; i++) {
    queue.enQueue(nameList[i]);
  }
  let eliminated = "";
  while (queue.size > 1) {
    for (let i = 0; i < num; i++) {
      queue.enQueue(queue.deQueue());
    }
    eliminated = queue.deQueue();
    console.log(eliminated + "在击鼓传花 游戏中被淘汰");
  }
  return queue.deQueue();
}

let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
let winner = jiguchuanhua(names, 7);
console.log("The winner is: " + winner);
