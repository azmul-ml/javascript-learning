// Unoptimized code - different type object
const load = (obj) => {
    return obj.x
}

load({x: 4, a: undefined})
load({x: undefined, a: undefined})


//Optimized code - always construct same type object
const load = (obj) => {
    return obj.x
}

load({x: 4, y: undefined, a: undefined})
load({x: undefined, y: 9, a: undefined})