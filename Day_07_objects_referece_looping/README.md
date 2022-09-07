# Objects Reference and Copying
Primitives are stored and copied as a whole value, but objects are copied and stored by references

There are two places to store data
1. Stack
2. Memory Heap

    let numOne = 50;

    let numTwo = numOne



![stack](/Day_07_objects_referece_looping/images/stack.png "Js memory")

    let object1 = {
        name:'Bingeh',
        age:18
    };
    let object2 = object1;

![heap](/Day_07_objects_referece_looping/images/heap.png "Js memory")


### cloning js objects without deep cloning
    Object.assign
    {...}
### cloning js objects with deep cloning

    structuredClone
    JSON.stringify



**See** ```1_object_references_and_copying``` folder for details

# Rest Pattern

### Spread Operator
spread syntax expands iterables into individual elements

    var cloneObject = { ...object };

### Rest parameter

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

    function restParameter(firstNumber, secondNumber, ...allOtherNumber) {}


**See** ```2_rest_pattern``` folder for details

# Objects Looping

**Object.keys(obj)** – returns an array of keys.
**Object.values(obj)** – returns an array of values.
**Object.entries(obj)** – returns an array of [key, value] pairs.


**See** ```3_objects_looping``` folder for details