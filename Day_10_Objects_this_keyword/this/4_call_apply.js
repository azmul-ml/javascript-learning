let person = {
  id : 101,
  name: "Hello World",
  displayInfo : function() {
    return this.id + " " + this.name;
  }
}

let person1 = {
  id: 102,
  name:"Azmul Hossain",
}

let person2 = {
  id: 100,
  name: "Mamunur Rasid",
}

// Return "102 Azmul Hossain":
let info = person.displayInfo.call(person1)
console.log(info);
// Return "100 Mamunur Rasid":
console.log(person.displayInfo.call(person2));

// Return "102 Azmul Hossain":
console.log(person.displayInfo.apply(person1));
// Return "100 Mamunur Rasid":
console.log(person.displayInfo.apply(person2));