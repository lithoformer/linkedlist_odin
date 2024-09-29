import { LinkedList } from "./app.js";

const list = new LinkedList();

list.prepend("dragon");
list.append("monkey");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("gorilla");

console.log(list.toString());

console.log(`the size of the list is ${list.size()}`);

console.log(`the head of the list is ${list.getHead()}`);

console.log(`the tail of the list is ${list.tail()}`);

list.pop();

console.log(list.toString());

console.log(`the tail of the list is ${list.tail()}`);

console.log(`the value of the list at index 4 is ${list.at(4)}`);

console.log(`the statement that the list contains \"monkey\" is ${list.contains('monkey')}`);

console.log(`the index of the list containing \"parrot\" is ${list.find('parrot')}`);

list.insertAt('chicken', 0);

console.log(list.toString());

list.removeAt(0);

console.log(list.toString());