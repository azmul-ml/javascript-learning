var price = 100;

function WhoIsThis() {
    this.price = 200;
    
    this.display = function(){
        var price = 300;
        
        console.log("price = " + price); // 300
        console.log("this.price = " + this.price);  // 200
    };
}
var obj = new WhoIsThis();

obj.display(); 

/* In the above example, obj will have two properties
 price and display, where display is a function expression. 
 So, this inside display() method points to obj when 
 calling obj.display(). */