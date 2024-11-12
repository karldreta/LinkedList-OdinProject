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
}
const list = new LinkedList();

list.append("Karl");
list.append("James");
list.append("Mike");
list.append("Alpha");
list.prepend("Flash");
list.prepend("Josh");
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
console.log(list.at(0));





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
// console.log(list.start());
// console.log(list.end());
// console.log(list.at(3));
// console.log(list.pop());





