const person = {
  firstName: "Hello",
  lastName : "World",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName:"Azmul",
  lastName: "Hossain",
}

const person2 = {
  firstName:"Mamunur",
  lastName: "Rasid",
}

// Return "Azmul Hossain":
let fullName = person.fullName.call(person1)
console.log(fullName);
// Return "Azmul Hossain":
console.log(person.fullName.apply(person1));

// Return "Mamunur Rasid":
console.log(person.fullName.call(person2));
// Return "Mamunur Rasid":
console.log(person.fullName.apply(person2));