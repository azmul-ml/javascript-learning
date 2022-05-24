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

let info = person.displayInfo.bind(person1);
console.log(info()); // output: 102 Azmul Hossain

let info2 = person.displayInfo.bind(person2);
console.log(info2()); // output: 100 Mamunur Rasid

/*
The person1 and person2 objects borrow the 
displayInfo method from the person object.
*/