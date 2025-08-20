// ----------------------------------------------------
// Functions in JavaScript
// Functions are blocks of code that perform a specific task 
// whenever they are invoked (called).
// ----------------------------------------------------


// 1. Function Declaration (without parameters & without return)
function greetHello() {
    console.log("Hello There!!!");
}
greetHello();
greetHello();


// 2. Function Declaration (without parameters & with return)
function calculateSquare() {
    return 4 * 4;
}
const squareResult = calculateSquare();
console.log("Square is:", squareResult);


// 3. Function Declaration (with parameters & without return)
function displayCube(num) {
    console.log(`Cube of ${num} is:`, num * num * num);
}
displayCube(4);
displayCube(5);


// 4. Function Declaration (with parameters & with return)
function greetUser(user, location) {
    return `Hello ${user}, welcome from ${location}`;
}
const userMessage = greetUser("Vamsee", "Hyderabad");
console.log(userMessage);


// 5. Function with Default Parameters
function greetWithDefault(user = "Guest") {
    console.log(`Hello ${user}`);
}
greetWithDefault();       // uses default
greetWithDefault("Krishna");


// ----------------------------------------------------
// Function Expressions
// ----------------------------------------------------

// 6. Function Expression (without parameters)
const sayHi = function () {
    console.log("Hi There!!!");
};
sayHi();


// 7. Function Expression (with return value)
const calculateCube = function (num) {
    return num * num * num;
};
console.log("Cube is:", calculateCube(3));


// ----------------------------------------------------
// Anonymous Functions & IIFE
// ----------------------------------------------------

// 8. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE (executed immediately).");
})();

(function (name) {
    console.log(`This IIFE runs for: ${name}`);
})("Vamsee");


// ----------------------------------------------------
// Arrow Functions
// ----------------------------------------------------

// 9. Arrow Function (single parameter, single line)
const addToCart = item => console.log(`${item} added to cart successfully`);
addToCart("Laptop");

// 10. Arrow Function (multiple parameters & return value)
const multiplyNumbers = (a, b) => a * b;
console.log("Multiplication Result:", multiplyNumbers(5, 6));


// ----------------------------------------------------
// Callback Functions
// ----------------------------------------------------

// 11. Function using a Callback
function greetWithCallback(person, callbackFn) {
    console.log("Hi " + person);
    callbackFn();
}

// Callback Function Definition
function showCallbackMessage() {
    console.log("I am the callback function!");
}

// Passing function as an argument
greetWithCallback("Peter", showCallbackMessage);

