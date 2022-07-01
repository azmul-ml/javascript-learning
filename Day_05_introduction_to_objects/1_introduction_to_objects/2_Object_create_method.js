var shape = {
  height: 10,
  width: 10,
  area: function () {
    return this.height * this.height;
  },
};

// shape object will be the prototype of square object
var square = Object.create(shape);

console.log(square.__proto__); //this will output the shape object

console.log(square.height); //output 10

square.height = 15; // own property. will not take
console.log(square.height); //output 15

// we can change the prototype or parent object from child
square.__proto__.height = 20;
console.log(shape.height); // output 20

// we can create object also without having any prototype
var home = Object.create(null);
console.log(home.__proto__); // output undefined

// In general all object in js has a prototype of Object
// but as we are setting the prototype as null we will see no prototype for home

// creating object with properties
var rectangle = Object.create(shape, {
  diagonal: {
    value: 2,
  },
  height:{
      value:20
  }
});

console.log(rectangle.diagonal) // output 2
console.log(rectangle.height)  // output 20

// there are a lot of other attributes for a property
// we will discuss those in later session
