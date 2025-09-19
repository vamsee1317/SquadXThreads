/* 
-----------------------------------------
SCOPE IN JAVASCRIPT
-----------------------------------------
Scope determines the accessibility (visibility) of variables.

Types of Scope:
1. Global Scope → Variables declared outside any function/block.
2. Local/Function Scope → Variables declared inside a function.
3. Block Scope → Variables declared with let/const inside { }.
-----------------------------------------
*/

// 🔹 Global Scope Example
var globalVar = "🌍 I am a global variable";

function accessGlobal() {
    console.log("Inside function →", globalVar); // accessible
}
console.log("Outside function →", globalVar); // accessible
accessGlobal();

console.log("-------------------------------------------------");

// 🔹 Function (Local) Scope Example
function myFunction() {
    var localVar = "🔒 I am a local variable";
    console.log("Inside function →", localVar);
}
myFunction();

// console.log(localVar); // ❌ ReferenceError (not accessible outside)

console.log("-------------------------------------------------");

// 🔹 Block Scope Example
if (true) {
    let blockVar = "📦 I am a block-scoped variable";
    const blockConst = "📦 I am also block-scoped";
    console.log("Inside block →", blockVar);
    console.log("Inside block →", blockConst);
}
// console.log(blockVar);   // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

console.log("-------------------------------------------------");

// 🔹 Shadowing Example
let x = 5; // global x
{
    console.log("Before redeclaration →", x); // ❌ ReferenceError due to TDZ
    let x = 10; // block-scoped x shadows global x
    console.log("Inside block →", x);
}
console.log("Outside block →", x);

/*
Output:
Outside function → 🌍 I am a global variable
Inside function → 🌍 I am a global variable
Inside function → 🔒 I am a local variable
Inside block → 📦 I am a block-scoped variable
Inside block → 📦 I am also block-scoped
Inside block → 10
Outside block → 5
*/

console.log("-------------------------------------------------");

// 🔹 Real-Time Scenario: Shopping Cart Example
var cartCount = 0; // global (accessible everywhere)

function addToCart(item) {
    let discountApplied = false; // local scope (per function call)

    if (item === "Laptop") {
        let discount = 500; // block scope (applies only in this if block)
        discountApplied = true;
        console.log(`Added ${item} with discount of ₹${discount}`);
    } else {
        console.log(`Added ${item} with no discount`);
    }

    cartCount++;
    console.log("Cart Count:", cartCount);
    console.log("Discount Applied:", discountApplied);
}

addToCart("Laptop");
addToCart("Phone");
