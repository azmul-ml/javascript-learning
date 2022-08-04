# JS Type Coercion & Equality

## What is type coercion?

Type coercion is the process of automatic or implicit conversion of values from one type to another. Such as string to number, object to boolean, and so on. Any type, be it primitive or an object, is a valid for type coercion.

***Type conversion*** is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

### Example:

```jsx
/* 
15 + 3 is evaluated first with no coercion 
as both are same type
*/
15 + 3 + "number" 
/*
type coercion is happening here, since one operand is string here 
so 18 is being converted to "18" first then concat with "number"
*/
=> 18 + "number"
=> "18number"
```

### **In Javascript there are 3 types of coercion here:**

1. String
2. Boolean
3. Number

Both primitive and object can only be converted into these three types though they work differently.

### String Conversion:

**Primitive Conversion**

```jsx
String(-0) // "0"
```
Except this one other primitive conversions are usual. Mentioned one is a bit quirky.

**Object Conversion**

When it comes object to primitive conversion JS does abstract operation `ToPrimitive(input, hint(optional) )` to make it primitive first then expected type. `hint` could be `string or number default` as all non primitive values coerced to `true`.

Let’s simplify how ToPrimitive works

1. `ToPrimitive` is passed with `input` and preferred type which is `hint` . Here `hint` would be `string`
2. Then it calls `input.toString()` and `input.valueOf()` methods
3. Last it applies `String()` function

### Examples:

```jsx
[] -> [].toString().valueOf() -> ""
[1,2,3]             // "1,2,3"
[null,undefined]    // ","
[[[],[],[]],[]]     // ",,,"
[,,,,]              // ",,,"
{p: 10}             // '[object Object]'
{p: 10, q: {r: 12}} // '[object Object]'

[undefined, null, true, 1, "5", new Date(), {a: 2}, [1,2,3]]
```

<aside>
👉🏿 If we call `toString()` or `valueOf()` by using `{}.` we run into an error `Uncaught SyntaxError: Unexpected token '.'` . It’s because JS interprets it as a valid block instead of object literal. Hence, we can’t use those methods by using `.` at the end of block. `({}).toString() | ({}).valueOf()` that will work.

</aside>

### Number Conversion:

**Primitive Conversion**

```jsx
Number("")        // 0
Number(" \t \n"   // 0
Number("009")     // 9
Number(false)     // 0
Number(true)      // 1
Number(undefined) // NaN
Number(null)      // 0
Number("1, 2, 3") // NaN
```

**Object Conversion**

It this case, the algorithm works slightly differently since `hint` is a `number` here

1. `ToPrimitive` is passed with `input` and preferred type which is `hint` . Here `hint` is `number`
2. Then it calls `input.valueOf()` and `input.toString()` methods
3. Last it applies `Number()` function

```jsx
[""]          // [""].valueOf().toString() -> "" then Number("") // 0
["0"].       // 
["-0"]
[null]
[undefined]
[1,2,3]
[[[[]]]]

[undefined, null, true, 1, "5", new Date(), {a: 2}, [1,2,3]]
```

### Boolean Conversion:

As there are lots of truthy values so it’s better to remember some falsy values. Any value that is not mentioned below is truthy.

```jsx
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

### [Symbol Conversion](https://leanpub.com/understandinges6/read/#leanpub-auto-symbol-coercion) (Skip this one to make the session simple as it's not being used often)

### 🧐 Coercion Corner Cases In One Place:

```jsx
Number("")          // 0
Number(" \t \n")    // 0
Number(null)        // 0
Number(undefined)   // NaN
Number([])          // 0
Number([null])      // 0
Number([undefined]) // 0
Number([1, 2, 3])   // NaN

Number({})          // NaN

String(-0)          // "0"
String(null)        // "null"
String(undefined)   // "undefined"
String([])          // ""
String([null])      // ""
String([undefined]) // ""

Boolean(new Boolean(false)) // true
```

```jsx
Number(true)  // 1
Number(false) // 0

1 < 2         // true
2 < 3         // true
1 < 2 < 3     // true

(1 < 2) < 3
(true) < 3    // Number(true) => 1
1 < 3        // true

//======================================

3 > 2        // true
2 > 1        // true
3 > 2 > 1    // false 😨

(3 > 2) > 1
(true) > 1
1 > 1        // false

```

## == and ===

Two special cases here when we use `==` 

```jsx
null == undefined // true
NaN != NaN        // true
```

Let’s try to demystify how JS `==` operator works

1. First check operands are same type or not. If they are in same type nothing to coerce it’s same as `===`.
2. If JS finds different types then it checks
    1. we’re comparing `null` and `undefined` which return `true` that we already mentioned earlier
    2. if we’re comparing `string` with `number` then `string` coerces to `number`
        
        ```jsx
        5 == "5"
        |
        5 == 5 // "5" -> 5
        ```
        
    3. if one of the operand type is `boolean` then `boolean` coerces to `number`
        
        ```jsx
        true == "5"
        |
        1 == "5"  // true -> 1
        |
        1 == 5   // opntion (b)
        ```
        
    4. check comparing `object` with `string` or `number` then `object` coerce to primitive
        
        ```jsx
        ({ name: "Rifat"}) == "10"
        |
        "[object Object]" == "10" // false
        
        { name: "Rifat"} == 10
        |
        "[object Object]" == 10 // follow step 2(b)
        NaN == 10               // false
        ```
        

### 🏋🏿‍♂️ More Exercises:

```jsx
true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0
```

<aside>
⚠️ Output might varies in some cases with different browser due to different JS engine

</aside>
