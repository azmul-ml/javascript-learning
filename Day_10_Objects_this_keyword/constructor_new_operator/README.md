# Constructor, operator "new"
Using the regular ```{...}``` syntax we can create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using ```constructor``` functions and the ```new``` operator.

### What is Constructor function?
Constructor functions technically are regular functions. The main purpose of constructors – to implement reusable object creation code. There are two conventions though:

1. They are named with capital letter first.
2. They should be called only with "new" operator.

**See** ```1_constructor_new.js``` file for details

### What is New Operator?
The ```new``` operator lets us create and initializes a new object from a constructor function.

When a function is executed with ```new```, it does the following steps:

1. A new empty object is created and assigned to ```this```.
2. The function body executes. Usually it modifies ```this```, adds new properties to it according to the new object.
3. The value of ```this``` is returned.

**See** ```1_constructor_new.js``` file for details