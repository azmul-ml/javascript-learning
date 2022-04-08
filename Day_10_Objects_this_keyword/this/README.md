# This Keyword
The ``this`` keyword is one of the most widely used and yet confusing keyword in JavaScript. Here, you will learn everything about ```this``` keyword.

### What is this?
In JavaScript, the ```this``` keyword points to an object. The object become diffrent depends on how a function is called or invoked.

**In general** ```this``` follows the below rules
```1. Alone, this points to the global object that means window object.```
```2. In a function, this points to the global object.```
```3. In a function, in strict mode, this is undefined.```
```4. In an object method, this points to the object.```
```5. In an event, this points to the element that received the event.```

**In details**, The following four rules applies to ```this``` in order to know which object is pointed by ```this``` keyword.

```1. Global Scope```
```2. Object's Method```
```3. call() or apply() method```
```4. bind() method```

**See** ```1_general.js``` file for details

#### Global Scope
1. If a function is called from the global scope then inside the function the ```this``` will point to the window object.
2. ```this``` points to global window object even if it is used in an inner function.

**See** ```2.1.global_scope.js``` & ```2.2.global_scope.js``` files for details
#### Object's Method
We can create an object of a function using ```new``` keyword. So, when we create an object of a function using ```new``` keyword then ```this``` will point to that particular object

**See** ```3.1_object_method.js``` & ```3.2_object_method.js``` files for details
#### Call & Apply Methods
In JavaScript, a function can be invoked using ```()``` operator as well as ```call()``` and ```apply()```method as shown below.

```javascript
function WhoIsThis() {
    console.log('Hello');
}

WhoIsThis();
WhoIsThis.call();
WhoIsThis.apply();
```
The ```call()``` and ```apply()``` methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.

**See** ```4_call_apply.js``` file for details

#### Bind Method
With the ```bind()``` method, an object can borrow a method from another object.

**See** ```5_bind.js``` file for details
### About Precedence
So these 4 rules applies to ```this``` keyword in order to we can determine which object ```this``` points to. The following is precedence of order.

1. bind()
2. call() and apply()
3. Object method
4. Global scope
   
So, we should check first whether a function is being called as callback function using ```bind()```? If not then check whether a function is being called using ```call()``` or ```apply()``` with parmeter? If not then check whether a function is being called as an object function? Otherise check whether a function is being called in the global scope without dot notation or using window object.

Thus, use these simple rules in order to know which object the ```this``` refers to inside any function.




