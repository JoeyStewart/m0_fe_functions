// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting(){
return "Howdy, partner!"
}
console.log(greeting())
console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name){
    return `Boy howdy ${name}, how are ya?`;
    }
    console.log(customGreeting("The Dude"))
    console.log(customGreeting("Bubba"))


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last){
    return `Hey, how are you, ${first} ${middle} ${last}?`;
}
console.log(greetPerson("Theodore", "President", "Roosevelt"))
console.log(greetPerson("Carl", "Van", "Weezer"))
// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(Num){
    var Num2 = Num * Num
    return Num2
}
console.log(square(3))
console.log(square(14))


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(Num, Product){
    if(Num === 0)
    return `${Product} - OUT of Stock!`
    
    else if(Num >= 4)
    return `${Product} is stocked`
    
    else {
        return `${Product} - running LOW`
    }
}
console.log(checkStock(4, "Coffee"))
console.log(checkStock(3, "Tortillas"))
console.log(checkStock(0, "Cheese"))
console.log(checkStock(1, "Salsa"))


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"