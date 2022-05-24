/*
class WhoIsThis {
    constructor(value) {
        this.price = value;

        this.display = function () {
            let price = 300;

            console.log("price = " + price);
            console.log("this.price = " + this.price);
        };
    }
}
*/

var price = 100;

function WhoIsThis(value) {
    this.price = value;
    
    this.display = function(){
        let price = 300;
        
        console.log("price = " + price);
        console.log("this.price = " + this.price);
    };
}

var obj1 = new WhoIsThis(200);
obj1.display(); 

var obj2 = new WhoIsThis(300);
obj2.display(); 

/* 
In the above example, this points to obj1 for obj1 instance
and points to obj2 for obj2 instance.
Here obj1 and obj2 both point will have two properties
price and display, where display is a function expression. 
So, this inside display() method points to obj when 
calling obj.display(). 
 */