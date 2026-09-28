//const add=require('./calculator');
//const sub=require('./calculator');
const calculator = require('./calculator');
const {add, sub}=calculator;
console.log("Add:");
console.log(add(6,3));
console.log("SUb:");
console.log(sub(6,3));