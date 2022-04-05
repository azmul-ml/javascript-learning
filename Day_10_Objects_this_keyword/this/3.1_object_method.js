function WhoIsThis() {
  this.price = 10;
}
var obj1 = new WhoIsThis();

var obj2 = new WhoIsThis();
obj2.price = 20;

console.log(obj1.price); // output: 10
console.log(obj2.price); // output: 20

/*
In the above example, this points to obj1 for obj1 instance
and points to obj2 for obj2 instance. we know in JavaScript,
properties can be attached to an object dynamically 
using dot notation. Thus, price will be a property of 
both the instances and each will have a separate copy of price.
*/


