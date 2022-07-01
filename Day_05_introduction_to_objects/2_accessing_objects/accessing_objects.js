var vehicle = {
  wheel: 4,
};
console.log(vehicle.wheel); // output 4
console.log(vehicle["wheel"]); //also output 4

// if there is no key in any object accessing that key will return undefined
console.log(vehicle.horn); //output undefined

/////// why do we need third bracket[] while we can already access prperty using dot(.)

// use case 1
var car = {
  wheel: 4,
  "start car": function () {// the key consist of white space
    console.log("started");
  },
  "brand name": "Lamborghini", // the key consist of white space
};
// this will not work. Syntax error
// console.log(car.brand name)

console.log(car["brand name"]); //output Lamborghini
car["start car"](); // output started

//use case 2
var show = "wheel"; // the key is assigned to another variable

console.log(car.show); // output undefined
console.log(car[show]); // output 4

// objects properties iterate through for...in loop
var employee = {
  name: "James Bond",
  id: "007",
  location: "anonymous",
};
for (let property in employee) {
  console.log(property, "=>", employee); // log all key=>value pair
}

// access object inside object
var employee = {
  name: "James Bond",
  id: "007",
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(employee.cars.car1); // output Ford
console.log(employee["cars"].car1); // output Ford
console.log(employee["cars"]["car1"]); // output Ford


// adding new property to a object

employee.salary = "patriotic"
employee["height"] = "6ft"

// deleting properties

delete employee.location;
delete employee['cars'];

// deleteing an unexisting property doesn't through any exception
