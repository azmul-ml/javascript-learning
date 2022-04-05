function Person(name) {
  // this = {}; (implicitly)
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function() {
    console.log( "My name is: " + this.name );
    // output: My name is: Azmul
  };
  // return this; (implicitly)
}

let person = new Person("Azmul");

 /**
  let person = {
    name: "Azmul",
    isAdmin: false
  };
  */

console.log(person.name); // output: Azmul
console.log(person.isAdmin); // output: false
person.sayHi() // output: My name is: Azmul