// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
return "Hello, what is your name?"; }
console.log(askForName())

// I simplified the code by adding the string to be exectured through return.
// This will allow console.log() to call upon the askForName method and the "Hello, what is your name?" string will be returned.



// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
        }
  
  console.log(addThreeNums(1, 2, 3));
  console.log(addThreeNums(4, 2, 7));
//Addin console.log allows the addThreeNums method to be recalled multiple times.
//Previously it only returned the second set of numbers to be recalled. 

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

//The word function wasn't complete. It read "Func". 
//Without function, the makeFreshPesto method couldn't be recalled since it was never initially created.


//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

console.log(average(9,4))

//This function did not recall anything. It only created the function.
//I recalled average with console.log() and added two numbers to fill the argument so the code could be executed.