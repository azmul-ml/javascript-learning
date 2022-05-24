//In an object method, this points to the object.
let person = {
  name: "Azmul Hossain",
  sayHi() {
    console.log(this) // output: object
    console.log("Hi ", this.name) // output: "Hi Azmul Hossain"
  }
};
person.sayHi() 

// Alone, this points to the global object
console.log(this); // output: global object

//In a function, this points to the global object.
function whoIsThis() {
  console.log(this); // output: global object
}
whoIsThis();

//In a function, in strict mode, this is undefined.
function whoIsThis() {
  "use strict";
  console.log(this); // output: undefined
}
whoIsThis();

// In an event, this points to the element that received the event.
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button> 




