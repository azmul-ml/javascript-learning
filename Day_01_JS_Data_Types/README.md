# var vs let vs const in JavaScript

Before dive into this we need to know few things first: variable declaration vs initialization, scope (specifically function scope), and hoisting.

### `Variable declaration`

```js
var declaration; // declaration
declaration = "init"; // initialization
```

### `Scope`

Scope refers to the availability of variables, functions or other expressions in certain parts of the code.

**What does lexical scope mean?**  
_Lexical scope is all about where a variable is define instead of where it's being invoked._

JavaScript is lexically scoped and there are 3 units of scope

```js
/*
--------------
Global Scope
-------------
*/

let a = "welcome to";
var b = "mlbd";

function greet() {
  console.log(a, b);
}

greet(); // welcome to mlbd

/*
--------------
Function Scope
--------------
*/
function greet() {
  let a = "welcome to";
  var b = "mlbd";
  console.log(a, b);
}
greet(); // welcome to mlbd
/*
-----------------------
Block Scope (Since ES6)
-----------------------
*/
// find later in let and const part
```

### `Hoisting`

```
From english dictionary,

Hoist (verb)
	raise (something) by means of ropes and pulleys.
```

First of all `hoisting` is not a real thing that js engine does. Js engine doesn't hoist. It doesn't move things to the top of their scope. It's a methaphor we're using to understand it plainly if we visualize JS as a single pass line line executing system what JS is not. Here is an example to prove that

```js
1. console.log("global scope")
2. function fn1() {
3.  console.log("fn1 scope")
4. }
5. }
```

Above code give us a `syntax error`. So how does it know about the error through line 5 without executing in 1st line. So before execution it's being parsed or compiled by js engine.

We'll cover that later in detail on our allocated **Javascript Engine Session**. But in our session we'll use the word hoisting to make it easy to understand.

```js
name;
title;
var name = "Rifat";
var title = "Engineer";
```

```js
console.log(name);
function printName() {
  console.log(name);
}
var name = "Rifat";
printName();
```

## `var`

- function scoped
- undefined when accessing a variable before it's declared

```js
var name = "Rifat";
{
  var name = "Alam";
}
console.log(name);
```

```js
function func() {
  // x is known here but not defined.
  console.log("value of x here: ", x);
  {
    var x = 10;
    x = x + 5;
  }
  // x is still known here and has a value.
  console.log("value of x after for block: ", x);
}
// x is NOT known here.
func();
```

## `let`

- block scoped
- ReferenceError when accessing a variable before it's initialization

```js
let name = "Rifat";
{
  let name = "Alam";
}
console.log(name);
```

```js
function func() {
  // x is NOT known here.
  console.log("value of x here: ", x);
  {
    let x = 10;
    x = x + 5;
  }
  // x is NOT known here.
  console.log("value of x after for block: ", x);
}
// x is NOT known here.
func();
```

**let doesn't hoist ??**

`let` doesn't hoist meant in a good way but it's inaccurate. `let` and `const` still hoist but these hoist differently

1. `let` and `const` hoist on block scope
2. Using `var` when it creates a variable during compile time of a scope it says scope here is variable named `anyThingYouDeclared` and also initialize it to `undefined`
   But when `let` hoist to block scope it does the same thing except initializing to `undefined`. So `let` variable is on `un-initializing `stage. `un-initializing` and `undefined` are completely different. And the `let` variable doesn't get initialized until in the block scope you run across the `let` declaration. The `un-initializing` stage is the **Temporal Dead Zone (TDZ)** while we can't access that variable.
   So `let` and `const` hoist and we're getting TDZ error because of hoisting.

```js
function test3() {
  var a = 30;
  if (true) {
    console.log(a); // TDZ
    let a;
  }
  var a = 60;
}

var v1 = "Rifat";
{
  console.log(name); // TDZ
  let v1 = "Alam";
}
```

### `Examples of let vs var`

```js
function test2() {
  var a = 30;
  let b = 40;
  if (true) {
    let b = 50;
    console.log(a);
  }
  var a = 60;
}

function test1() {
  var a = 30;
  let b = 40;
  if (true) {
    let b = 50;
    setTimeout(() => {
      console.log(a);
    });
  }
  var a = 60;
}

test1();
```

## `const`

- block scoped
- ReferenceError when accessing a variable before it's declared can't be reassigned
- `const` doesn't mean it's immutable in all cases. All it means it's can't be reassigned. It's immutable only for js primitive types (e.g number, string, boolean)

```js
const NAME = 'Md. Rifat Alam'

const person = {
  name: 'Rifat Alam'
}

person.name = 'Md. Rifat Alam` // it allows
person = 30 // Typerror

```

# Basic Operators & Operator Precedence

- Assignment operators

  ```
  Assignment 							x = y => x = y
  Addition assignment 				x += y => x = x + y
  Subtraction assignment  			x -= y => x = x - y
  Multiplication assignment 			x *= y  => x = x * y
  Division assignment 				x /= y => x = x / y
  Remainder assignment 				x %= y => x = x % y
  Exponentiation assignment 			x **= y => x = x ** y
  Logical AND assignment				x &&= y => x && (x = y)
  Logical OR assignment				x ||= y => x || (x = y)
  Logical nullish assignment			x ??= y => x ?? (x = y)
  ```

  ```javascript
  let y = (x = 2);
  // y = x = 2 is equivalent to y = (x = 2)
  // as assignment operator is right associative
  ```

- Comparison operators

  ```javascript
  ==, !=, ===, !==, >, >=, <, <=
  ```

- Arithmetic operators

  In addition to the standard arithmetic operations `(+, -, *, /)`, javaScript provides other the arithmetic operators listed below:

  ```js
  %, ++, --, - (unary negation), + (unary plus), **

  let x = 3
  x++ // return 3
  let y = 5
  ++y // return 6

  // If used as a prefix operator (++x), returns the value of its
  // operand after adding one; if used as a postfix operator (x++)
  // returns the value of its operand before adding one.

  ```

- Bitwise operators [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- Logical operators

  ```js
  &&, ||, !
  ```

  As logical expressions are evaluated left to right, we can use `short-circuit` evaluation using the following rules:

  `false && anything` is evaluated to false.  
   `true || anything` is evaluated to true.

- String operators
- ```js
  let first_name = "Rifat";
  let last_name = "Alam";

  first_name + " " + last_name; // Rifat Alam
  first_name += last_name; // RifatAlam
  ```

- Conditional (ternary) operator

  `let mode = teamParty ? 🥳 : 🥱`

- Unary operators

  ```js
  delete, typeof

  delete Math.PI; // returns false (cannot delete non-configurable properties)

  const myObj = {h: 4};
  delete myObj.h; // returns true (can delete user-defined properties)

  ```

- Relational operators

  `in, instanceof`

Here are basic precedence examples

```js
a || b * c; // evaluate a first, then produce a if a is "truthy"
a && b < c; // evaluate a first, then produce a if a is "falsy"
a ?? (b || c); // evaluate a first, then produce a if a is not null and not undefined
a?.b.c; // evaluate a first, then produce undefined if a is null or undefined
```

The exponentiation operator is right-associative: `a ** b ** c` is equal to `a ** (b ** c)`.

```javascript
2 ** 3; // 8
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; //64
4 ** (3 ** (2 ** 1)); // 262144

4 ** (3 ** (2 ** 1)) == 4 ** (3 ** (2 ** 1)); // true
```

Operator precedence in JavaScript is divided into 19 different levels. Check out from [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table) to know more about them.

# String and Template Literals

```javascript
"apple" === "apple";
```

Both single `(' ')` and double `(" ")` quotes are used to represent a string in Javascript. Choosing a quoting style is up to you and there is no special semantics for one style over the other.

**Nevertheless, it is important to note that there is no type for a single character in javascript, everything is always a string!**

Quoting can help you from escaping single (') or double(") quotes within a string.

```javascript
let div = '<div class="panel">...</div>';
```

Using quotations within a string gives rise to an error. for example,

```js
let message='Javascript's beauty is simplicity';
```

There is no way for the browser to know which one is the closing quote. The interpreter sees the second quote in `'Javascript's` as the ending quote - so the rest of the line becomes invalid.

Two alternative ways are mentioned below.

```js
var message = "Javascript's beauty is simplicity";
var message = "Javascript's beauty is simplicity";
```

### Points to remember

- A double-quoted string can have single quotes without escaping them, conversely, a single-quoted string can have double quotes within it without having to escape them.
- Double quotes ( \" ) must escape a double quote and vice versa single quotes ( \' ) must escape a single quote.
- In JSON only quoting style allowed is double-quote. Single quote is not allowed in JSON

## Template literals (Template strings)

Tagged templates are set with backtick(`) character and allowing us to use multiline strings, string interpolation and tagged templates.

```js
var name = "Rifat";
var msg = `Javascript's beauty is simplicity``Hello, ${name}`;
```

### Tagged Template

```js
let mark = (strings, ...values) => {
  return strings.reduce((result, str, idx) => {
    result += str + (values[idx] ?? "");
    return result;
  }, "");
};
const NAME = "Rifat Alam";
let title = "Frontend Engineer";
let intro = mark`Hello, My name is ${NAME}. Currently working as a ${title}.`;
console.log(intro); // ??
```

# Strict Mode

Strict mode enables certain JS codes to run in a different way to make it more restricted.

- Strict mode applies to entire scripts or to individual functions
- It doesn't apply to block statements enclosed in `{}` braces;
- Strict mode code and non-strict mode code can coexist,
  so scripts can opt into strict mode incrementally

```js
// Whole-script strict mode syntax
"use strict";
var v = "Hi! I'm a strict mode script!";
```

```js
function fn1() {
  // Function-level strict mode syntax
  "use strict";
  function fn2() {...}
  return "strict mode function!";
}
```

**From ES6 (ES2015), functions inside block are scoped to that block. It's not available before.**

```js
"use strict"
{
	function fn() {...}
}
fn() // ReferenceError
```

**ES2015 introduced JS modules and therefore a 3rd way to enter strict mode. The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.**

```js
function M() {
  // because this is a module, I'm strict by default
}
export default M;
```

Strict mode changes some previously-accepted mistakes into errors. Details of these changes are provided below.

- It is not allowed to create global variables by mistake. All variables and objects must be declared before use.

```js
"use strict";
var mistypeVariable;
mistypeVarible = 17; // ReferenceError
```

- It is not permissible to delete a variable or function or any undeleteable property.

```js
"use strict";
var x;
delete x; // !!! syntax error
delete Object.prototype; // throws a TypeError
```

- Assigning values to variables that would be silently ignored in normal circumstances turns into an error. For instance, assigning a value to non-writeable or no-extensible such as undefined, null, NaN etc would throw an error.

  ```js
  // Assignment to a non-writable global
  var undefined = 5; // throws a TypeError
  var Infinity = 5; // throws a TypeError

  // Assignment to a non-writable property
  var obj1 = {};
  Object.defineProperty(obj1, "x", { value: 42, writable: false });
  obj1.x = 9; // throws a TypeError

  // Assignment to a getter-only property
  var obj2 = {
    get x() {
      return 17;
    },
  };
  obj2.x = 5; // throws a TypeError.

  // Assignment to a new property on a non-extensible object
  var fixed = {};
  Object.preventExtensions(fixed);
  fixed.newProp = "ohai"; // throws a TypeError
  ```

- It ensures that all parameters of a function are unique.

```js
"use strict";
function fn(b, c, b) {}
fn(2, 3, 2);
```

- It does not allow the use of Octal literals with a preceding zero (e.g. 0604).
- It prevents `eval` and `arguments` from being used as variable names.

- The eval function is not permitted to create a new variable in the scope of which it is called.

```js
var x = 10;
var evalX = eval("'use strict'; var x = 2; x");
```

- Using the `this` keyword to reference the global document object is not allowed in order to make the script more secure. Instead, it returns undefined.
- Value passed as `this` to a function in strict mode is not forced into being an object.

```js
"use strict";
function fun() {
  return this;
}
console.log(fun() === undefined); // true
console.log(fun.call(2) === 2); // true
console.log(fun.apply(null) === null); // true
console.log(fun.call(undefined) === undefined); // true
console.log(fun.bind(true)() === true); // true
```
