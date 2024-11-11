import node from "./nodeModule.js";

export default class LinkedList{
    constructor (list) {
        this.list = [];
    }
    append(value) {
       const newNode = new node();
       newNode.value = value;
    //    newNode.next = next;
       this.list.push(newNode)
       console.log(this.list);
       
    }
};

const list = new LinkedList();

list.append("Karl");