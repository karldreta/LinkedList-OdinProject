import node from "./nodeModule.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new node();
    newNode.value = value; // We append the value after instantiation since the node class has default property values of null (which is okayt in this case).
    if (this.head == null) {
        this.head = newNode; // Link the current tail to the new node
        this.tail = this.head; // Both head and tail should be equal for the first node
    }
    
    if (this.tail != null) {
        this.tail.next = newNode; // Link the current tail to be the newly added node.
        this.tail = newNode; // Set the tail to the new node.
        this.length++; // Adds 1 to the size. *We only need to increment from here since this is where we set the node.
    }
  }
    prepend(value) {
    const newNode = new node();
    newNode.value = value;
    
    if (this.head == null) {
        this.head = newNode; 
        this.tail = this.head;
    }

    if (this.head != null) {
        newNode.next = this.head; // Set the next value of the new node to the current head.
        this.head = newNode; // Set the head to the newly created nede.
        this.length++; // Adds 1 to the size.
    }
}
    size() {
    return this.length; // Returns the total number of nodes in the list.
}

}
const list = new LinkedList();

list.append("Karl");
list.append("James");
list.append("Mike");
list.append("Alpha");
list.prepend("Flash");
list.prepend("Josh");
console.log(list.size());




//   size() {
//     return this.list.length; // Returns the total number of nodes in the list.
//   }
//   head() {
//     return this.list[0]; // Returns the first node in the list.
//   }
//   tail() {
//     return this.list[this.list.length - 1]; // Returns the last node in the list.
//   }
//   at(index) {
//     return this.list[index]; // Returns the node at the given index;
//   }
//   pop() {
//     this.list.pop();
//     return this.list;
//   }


// list.append("John");
// list.append("Kara");
// list.prepend("Lina");
// list.prepend("Marcy");
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(3));
// console.log(list.pop());





