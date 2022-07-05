// Classes are a template for creating objects. They encapsulate data with code to work on that data.
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  //this function will set into the class prototype not directly to the object
  printId() {
    console.log("name: ",this.name)
    console.log("id: ",this.id)
  }
}

var emp1 = new Employee("Alex",179);
var emp2 = new Employee("John",180);

console.log(emp1.id); //output 179
console.log(emp1.printId()); // output
// name:  Alex
// id:  179

console.log(emp2.id); //output 180
console.log(emp2.printId()); //output
// name:  John
// id:  180

// if you call a class without the new operator it will through type error
var employee = Employee(); // through error

console.log(typeof Employee); //output function
// If you want to share any property or methods through the class you have assign it to prototype to the class
Employee.prototype.companyName = "Monstarlab"

console.log(emp1.companyName)  // output Monstarlab
console.log(emp2.companyName)  // output Monstarlab
