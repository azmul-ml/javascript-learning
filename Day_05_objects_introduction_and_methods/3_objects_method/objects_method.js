var car = {
  start: function () {
    console.log("started");
  },
};

car.start()  // output started
car.start    // return function definition

// not defined poperty invocation will case reference error

car.stop()  // will cause reference error