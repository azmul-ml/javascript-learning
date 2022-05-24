var price = 10;

function someFunction() {

    function whoIsThis() {
        var price = 20;

        console.log("output: price = " + price); // output: 20
        console.log("output: this.price = " + this.price); // output: 10
    }
    whoIsThis(); 
}

someFunction();

/* So, if 'this' is used inside any global function 
and the function is called without dot notation 
or using window. then this will refer to global
object which is default window object. */