import "./styles.css";
import LinkedList from "./modules/linkedlist.js";

const list = new LinkedList();

list.append("Bryan"); // 2
list.append("Jerald"); // 3
list.append("Eric"); // 4
list.append("Justin"); // 5
list.prepend("Karl"); // 0
list.prepend("Rey"); // 1
list.insertAt("John", 5);
list.removeAt(4);
console.log(list.size());
console.log(list.toString());
console.log(list.find("Karl"));
