

// Functions are nothing but a block of code, which performs a specific task whenever it is invoked or called.

// Function Declarations :

// function sayHello(){
//     console.log("Hello There!!!");
// }

// sayHello();
// sayHello();
// sayHello();

// Function without Parameters without return statements

function sayHello() {
    console.log("Hello There!!!");
}

sayHello();


// Function without Parameters with return statements

function squreRoot() {
    return 4 * 4;
}

// console.log(squreRoot());

const result = squreRoot();
console.log(result);

// Function with Parameters without return statements

function cubeRoot(num) {
    console.log(num);
    console.log(num * num * num);
}

cubeRoot(4);
cubeRoot(5);
cubeRoot(7);
// Function with Parameters with return statements

// function greet(user, location){
//    return(`Hellooo ${user}, ${location}`)
// }

// user1 = greet("Vamsee", "Hyd");

// console.log(user1);


// Function with Default Parameters

// function greet(user = "Guest") {
//     console.log(`Hello ${user}`);
// }

// greet();
// greet("Krishna");

// Function Expressions :

// const sayHello = function(){
//     console.log("Hello There!!!");
// }

// sayHello();

// const cubeRoot = function () {
//     return (4 * 4 * 4);
// }

// console.log(cubeRoot())


// Anonymous Functions
// Self Invoking functions or IIFE

// (function(){
//     console.log(`This is IIFE`);
// })()

    (function (name) {
        console.log(`This is ${name}`);
    })("Vamsee")

// Arrow Functions : 

    // const functionName = () => {}
        // const functionName = () => ()
                // const functionName = name => c.log(name);

    const addToCart = item => console.log(`${item} added to cart successfully`);
    

    addToCart("Laptop");


// Call Back functions : 


// function
function greet(Peter, callMe) {
    console.log('Hi' + ' ' + Peter);
    callMe();
}




// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);