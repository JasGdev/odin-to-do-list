// src/index.js
import "./styles.css";
import listItem from './listItem.js'
import category from './category.js'

let chicken = new listItem('chicken','100','meat');
let meat = new category('meat', [chicken])

console.log(chicken)
console.log(meat)