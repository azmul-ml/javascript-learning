// If you call a function using a new operator, the function acts as a constructor and returns an object and bind this to the object

function Employee(name, id, department) {
  this.name = name;
  this.id = id;
  this.department = department;
}

var emp1 = new Employee("Jhon", 179, "development");
var emp2 = new Employee("Alex", 179, "hr");

console.log(emp1.department); //output development
console.log(emp2.department); //output hr

// you can assign new property to the object
emp1.speciality = "frontend";

console.log(emp1.speciality); //output frontend
console.log(emp2.speciality); //output undefined

// If we want to share some property to all the objects then we have to assign those property to the constructor functions prototype property

Employee.prototype.companyAddress = "present address";

console.log(emp1.companyAddress); //output present address
console.log(emp2.companyAddress); //output present address

// If we don't pass any arguments then that property will be undefined
const emp3 = new Employee("Jahid");

console.log(emp3.name); // output jahid
console.log(emp3.department); //output undefined

// If you want to use property descriptor you can use them the following way
function Employee(name, id, department) {
  this.id = id;
  this.department = department;
  Object.defineProperties(this, {
    name: {
      value: name,
    },
  });
}
var emp4 = new Employee("Jhon", 179, "development");
console.log(emp4.name); // output john
