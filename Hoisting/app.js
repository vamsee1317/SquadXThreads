/* 
-----------------------------------------
HOISTING IN JAVASCRIPT (Real-Time + Interview)
-----------------------------------------

🔹 What is Hoisting?
In JavaScript, hoisting is a behavior where variable and function declarations 
are moved to the top of their scope during the compilation phase.

- Variables declared with `var` → hoisted & initialized as `undefined`.
- Variables declared with `let` and `const` → hoisted but stay in 
  "Temporal Dead Zone (TDZ)" until initialized → accessing before declaration = ReferenceError.
- Function declarations → fully hoisted, so you can call them before definition.

-----------------------------------------
REAL-TIME SCENARIOS
-----------------------------------------
*/

/* 
✅ Scenario 1: E-commerce Checkout System
   - Calling checkout() before it's defined (function hoisting)
   - Using var inside the function (variable hoisting)
*/
checkout(); // works due to function hoisting

function checkout() {
    console.log("Checking out...");

    // variable hoisting with var
    console.log("Discount Applied:", discount); // undefined (hoisted, not initialized yet)
    
    var discount = getDiscount();
    console.log("Final Discount:", discount);
}

function getDiscount() {
    return "10% OFF";
}

/*
Output:
Checking out...
Discount Applied: undefined
Final Discount: 10% OFF
*/


/* 
✅ Scenario 2: Authentication Flow
   - Function hoisting allows login() to be called at the top
   - var user is hoisted as undefined
*/
login();

function login() {
    console.log("Authenticating...");

    console.log("User:", user); // undefined
    var user = "Vamsi";

    console.log("Logged in as:", user);
}

/*
Output:
Authenticating...
User: undefined
Logged in as: Vamsi
*/


/* 
✅ Scenario 3: Main Execution Flow at Top (Interview-Style Answer)
   - Keeping initApp() call at top for readability
   - Definitions at bottom (possible due to function hoisting)
*/
initApp(); // called before declaration

function initApp() {
    console.log("Initializing application...");
    fetchProducts(); // another function call before definition
}

function fetchProducts() {
    console.log("Fetching products from API...");
}

/*
Output:
Initializing application...
Fetching products from API...
*/


/*
-----------------------------------------
INTERVIEW-READY ANSWER
-----------------------------------------
If asked: "Where have you implemented hoisting in real projects?"

Answer:
"I used hoisting mainly with functions. For example, in my e-commerce project, 
I kept my main function calls (like initApp, checkout, login) at the top of the 
file for better readability, while keeping function definitions at the bottom. 
This makes the code structured and easier to maintain."

-----------------------------------------
KEY TAKEAWAYS
-----------------------------------------
1. Function declarations are fully hoisted (you can call them before definition).
2. Variables with var are hoisted and initialized as undefined.
3. Variables with let/const are hoisted but stay in TDZ → ReferenceError if accessed before init.
4. In production, function hoisting improves code readability and structure.
*/
