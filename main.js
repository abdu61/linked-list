const { LinkedList } = require("./linkedlist.js");

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("fish");
list.pop();
list.prepend("rabbit");


console.log(list.toString());
console.log(list.at(3));
console.log("Head: ", list.head());
console.log("Tail: ", list.tail());

console.log("Size: ", list.size());
