const person = {
  firstName:"Hello",
  lastName: "World",
  fullName: function () {
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

let fullName1 = person.fullName.bind(person1);
console.log(fullName1()); // output: Azmul Hossain

let fullName2 = person.fullName.bind(person2);
console.log(fullName2()); // output: Mamunur Rasid

/*
The person1 and person2 objects borrow the 
fullName method from the person object.
*/