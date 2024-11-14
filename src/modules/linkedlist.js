import node from "./nodeModule.js";

export default class LinkedList {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new node();
    newNode.value = value; // We append the value after instantiation since the node class has default property values of null (which is okayt in this case).
    if (this.start == null) {
      this.start = newNode; // Link the current end to the new node
      this.end = this.start; // Both start and end should be equal for the first node
    }

    if (this.end != null) {
      this.end.next = newNode; // Link the current end to be the newly added node.
      this.end = newNode; // Set the end to the new node.
      this.length++; // Adds 1 to the size. *We only need to increment from here since this is where we set the node.
    }
  }
  prepend(value) {
    const newNode = new node();
    newNode.value = value;

    if (this.start == null) {
      this.start = newNode;
      this.end = this.start;
    }

    if (this.start != null) {
      newNode.next = this.start; // Set the next value of the new node to the current start.
      this.start = newNode; // Set the start to the newly created nede.
      this.length++; // Adds 1 to the size.
    }
  }
  size() {
    return this.length; // Returns the total number of nodes in the list.
  }
  head() {
    // We have to rename our properties to satisfy the project.
    return this.start;
  }
  tail() {
    return this.end;
  }
  at(index) {
    let current = this.start; // Initialize the current to the start(head).
    for (let i = 0; i < index; i++) {
      current = current.next; // let current advance to the next until the iteration reaches the target(index).
    }
    // Afterwards, simply return current.
    return current;
  }
  pop() {
    // Traverse to the second to the last node.
    let current = this.start;
    for (let i = 0; i < this.length - 2; i++) {
      current = current.next;
    }
    // Set the current.next to null eliminating succeeding links and setting this.end to the second to last node.
    current.next = null;
    this.end = current;
    this.length--; // Decrement the size of the list.
  }
  find(value) {
    let current = this.start;
    for (let i = 0; i < this.length; i++) {
      if (current.value == value) {
        return i;
      } else {
        current = current.next;
      }
    }
    return null; // Return null if the value is not found in the list
  }
}
const list = new LinkedList();

list.append("Karl"); // 2
list.append("James"); // 3
list.append("Mike"); // 4
list.append("Alpha"); // 5
list.prepend("Flash"); // 1
list.prepend("Josh"); // 0
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(0));
list.pop();
console.log(list.at(3));
console.log(list.find("Karl"));

// console.log(list.head());
// console.log(list.tail());
console.log(list.size());
