// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

var person = {
  name: "Alex",
  age: 30,
  dept: "IT",
};

for (let value of Object.values(person)) {
  console.log(value); // output Alex, then 30, then IT
}

console.log(Object.values(person)); // output ["Alex",30,"IT"]

for (let value of Object.keys(person)) {
  console.log(value); // output name, then age, then dept
  console.log(person[value]) // output Alex, then 30, then IT
}

console.log(Object.keys(person)) // output ['name','age','dept']

for(let [key, value] of Object.entries(person)){
  console.log(key); // output name, then age, then dept
  console.log(value) // output Alex, then 30, then IT
}

console.log(Object.entries(person))  // output [['name','Alex'],['age',30],['dept','IT']]
