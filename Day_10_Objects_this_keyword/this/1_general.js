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

//In an object method, this points to the object.
const person = {
  firstName: "Azmul",
  lastName : "Hossain",
  fullName : function() {
    console.log(this) // output: object
    return this.firstName + " " + this.lastName;
  }
};
person.fullName() // output: "Azmul Hossain"

// In the arrow method
const personA = {
  firstName: "Azmul",
  lastName : "Hossain",
  fullName : () => {
    console.log(this) // output: global object
    return this.firstName + " " + this.lastName;
  }
};
personA.fullName() // undefined undefined

// In an event, this points to the element that received the event.
{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}



