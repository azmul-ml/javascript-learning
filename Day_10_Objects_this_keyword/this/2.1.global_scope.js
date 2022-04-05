
var price = 10;
function whoIsThis() {
    var price = 20;

    console.log("output: price = " + price); // output: 20
    console.log("output: this.price = " + this.price); // output: 10
}
whoIsThis();
//window.whoIsThis();

/* In the above example, the whoIsThis() 
function is being called from the global scope. 
this keyword in whoIsThis() function will 
point to window object. So, this.price 
will return 10. However, if you access 
price without this then it will point to 
local price variable that is defined in 
whoIsThis() function. */





