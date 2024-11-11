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
    // console.log(this.list);
  }
  prepend(value) {
    const newNode = new node();
    newNode.value = value;
    this.list.unshift(newNode);
    newNode.next = this.list[1] // Since we’re adding the node at index 0, the next node is now at-- you guessed it--index 1.
    // console.log(this.list);
  }
  size() {
    return this.list.length; // Returns the total number of nodes in the list.
  }
  head() {
    return this.list[0]; // Returns the first node in the list.
  }
  tail() {
    return this.list[this.list.length - 1]; // Returns the last node in the list.
  }
  at(index) {
    return this.list[index]; // Returns the node at the given index;
  }
}

const list = new LinkedList();

list.append("Karl");
list.append("James");
list.append("John");
list.append("Kara");
list.prepend("Lina");
list.prepend("Marcy");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(3));




