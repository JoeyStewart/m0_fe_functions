// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes method calls on the string "Hello World"
// includes has the argument "Hellow". This is to see if the string called upon by includes contain "Hello".
// The return value is true.

"Hello World".endsWith("Hello");
// The endsWith method calls on the "Hello World" string.
// endsWith passes the argument of "Hello". The purpose of this method is to declare if the string ends with the word "Hello".
// The return value is false.

"Hello World".endsWith("rld");
// The endsWith method calls on the "Hello World" string
// endsWith passes the argument of "rld". This methods purpose is to confirm if the string called upon ends with the letters "rld"
// The return value is true

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toUpperCase() method is called on the goodName variable. This variable stores the "Carl" string.
// The toUpperCase() method capitalizes the entire string of the variable. 
// The return of toUppoerCase() is "CARL"
// The includes() method is called on the badName variable. This variable stores the "Garbage Truck" string.
// The includes() method has the argument of "Garbage". This is to determine if the badName variable includes the word "Garbage"
// The return is true, since "Garbage Truck" includes the word "Garbage"
var goodName = "Carl"
var badName = "Garbage Truck"

console.log(firstName.toUpperCase())
console.log(badName.includes("Garbage"))





// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var coolFoods = ["Apples", "Salad", "Asparagus", "Egg"]
var badFoods = ["Candy", "Chair", "Plastic", "Chips"]

coolFoods.push("Pickles")
console.log(coolFoods)

badFoods.shift()
console.log(badFoods)

//The push method calls upon the coolFoods variable. Its purpose is to add more elements to the array.
//Within the push method is the "Pickles" argument. This ensures that when the method is executed, "Pickles" is added to the 
//array of the variable coolFoods.
//The return value recalled the entire array with "Pickles" added as fourth index.
//The shift method calls upon the variable of badFoods.
//The shift method removes the index 0 element within an array. 
//This method returned the badFoods array with the "Candy" element removed. Each element is moved up one index.
