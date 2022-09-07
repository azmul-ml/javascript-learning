// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function restParameter(firstNumber, secondNumber, ...allOtherNumber) {
  console.log("first number", firstNumber);
  console.log("second number", secondNumber);
  console.log("allOtherNumber", allOtherNumber);
}

restParameter(1, 2, 3, 4, 5, 6, 7);
// output first number 1
// output second number 2
// output allOtherNumber [3,4,5,6,7]

// function wrongParameter(...firstNumber, secondNumber){}  // SyntaxError: Rest parameter must be last formal parameter

// and also a function can have only one rest parameter