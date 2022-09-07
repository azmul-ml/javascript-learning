// Primitives are stored and copied by reference, but objects are copied and stored by references
let primitive = "first value";
let secondPrimitive = primitive;

console.log(secondPrimitive); // first value

primitive = "changed";

console.log(primitive); // changed
console.log(secondPrimitive); // first value

let person1 = {
  id: 1,
  name: "alex",
};

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let person2 = person1;

console.log(person2.name); // alex

person2.name = "jhon";
console.log(person1.name); // jhon

console.log(person1 == person2); //true   , both variable reference same object
console.log(person1 === person2); //true

let a = { id: 1 };
let b = { id: 1 };
console.log(a == b); // false,  two independent objects


// side effects of objects
// genrally we can't change const but we can modify a const object

const person = {
    name:'Alex'
}
person.name = "Jhon" // doesn't through error
person.age = 23

console.log(person.name, person.age) // Jhon 23
