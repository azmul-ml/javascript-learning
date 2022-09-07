// spread syntax expands iterables into individual elements
var object = {
  properties1: 1,
  properties2: 2,
  properties3: 3,
};

var cloneObject = { ...object }; // will not copy the references

console.log(cloneObject.properties1); // output 1

cloneObject.properties1 = 3;

console.log(cloneObject.properties1, object.properties1); //output 3 1

// spread array elements

var ara = [1, 2, 3];
var ara2 = [...ara]; // will not copy the reference

ara2[0] = 10;

console.log(ara[0], ara2[0]); // output 1 10

// can be used as destructuring
ara = [1, 2, 3, 4, 5, 6];
let a, b, c, rest;
[a, b, ...rest] = ara;

console.log(rest) // output [3,4,5,6]
