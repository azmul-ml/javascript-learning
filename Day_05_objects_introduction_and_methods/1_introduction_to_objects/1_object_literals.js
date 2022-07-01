// There are four ways to create object in js

var shape = {
  height: 10,
  width: 10,
  area: function () {
    return this.height * this.height;
  },
};

console.log(shape.height); //output 10
console.log(shape.area()); //output 100
