// Cloning

let person = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in person) {
  clone[key] = person[key];
}

// now clone is a fully independent object with the same content
clone.name = "Alex"; // changed the data in it

console.log(person.name); // John

// Using Object.assign
let person2 = {};
Object.assign(person2, person);

person2.name = "Bond";
console.log(person.name); // John

// we can add other properties and object as well
let properties1 = { id: 12 };
let properties2 = { dept: "IT" };

person2 = Object.assign(person2, person, properties1, properties2);

console.log(person2.name, person2.id, person2.dept); // John 12 IT

// declared in line
let person3 = Object.assign({}, person, properties1);
console.log(person3.id, person3.name); // 12 John

// nested cloning
let nestedObject = {
  id: 1,
  dept: {
    id: 1,
    name: "it",
  },
};

let cloneNestedObject = Object.assign({}, nestedObject);
cloneNestedObject.id = 2;

console.log(nestedObject.id, cloneNestedObject.id); //output 1 2

cloneNestedObject.dept.name = "HR";

console.log(nestedObject.dept.name, cloneNestedObject.dept.name); // output HR HR

// structured clone
nestedObject = {
  id: 1,
  dept: {
    id: 1,
    name: "IT",
  },
};
let deepCloneNestedObject = structuredClone(nestedObject);

deepCloneNestedObject.dept.name = "ACCOUNT";

console.log(nestedObject.dept.name, deepCloneNestedObject.dept.name); // output  IT ACCOUNT

// using JSON.stringify

let deepCloneNestedObject2 = JSON.parse(JSON.stringify(nestedObject));
deepCloneNestedObject2.dept.name = "LAB";

console.log(nestedObject.dept.name, deepCloneNestedObject2.dept.name) // output IT LAB

// For smaller object JSON.stringify is faster but for large object it is slower than structuredClone