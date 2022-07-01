# Introduction to Objects
An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method

## Objects in Javascript
In JavaScript, almost "everything" is an object.
Even the primitives data type like string, number, boolean can also be object when using the new keyword.
### 4 ways to create object in javascript
1. Object Literals.
2. Object.create method.
3. New operator or constructor.
4. Class.

**See** ```1_introduction_to_objects``` folder for details

### Accessing objects
In javascript we can access object's properties using **dot(.)** or **third bracket []***

    const car = {
        wheel: 4
    };
    car.wheel;       // return 4
    car['wheel'];    // also return 4 

**See** ```2_accessing_objects``` folder for details

### Objects Method
JavaScript methods are actions that can be performed on objects.

A JavaScript method is a **property** containing a **function definition**.


    const car = {
        wheel:4,
        run: function(){
            console.log("start running");
        }
    };
    car.run();
**run** property will execute (as a function) when it is invoked with **()**.

**See** ```3_objects_method``` folder for details