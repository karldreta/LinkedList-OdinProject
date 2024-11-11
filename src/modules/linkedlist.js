import node from "./nodeModule.js";

export default class LinkedList {
  constructor() {
    this.list = [];
  }
  append(value) {
    const newNode = new node();
    newNode.value = value; // We append the value after instantiation since the node class has default property values of null (which is intended in this case).
    this.list.push(newNode);

    if (this.list.length > 1) {
      let prevNode = this.list[this.list.length - 2];
      prevNode.next = newNode; // newNode references the recently pushed node.
    }
    console.log(this.list);
  }
}

const list = new LinkedList();

list.append("Karl");
list.append("James");
list.append("John");
list.append("Kara");
