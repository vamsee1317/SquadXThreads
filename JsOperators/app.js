// Operators :

// Operators are symbols used to perform operations on variables and values.

// Types of Operators :
// 1. Arithmetic Operators (+, -, *, /, %)
// 2. Comparison Operators (==, !=, >, <, >=, <=)
// 3. Logical Operators (&&, ||, !)
// 4. Increment /Decrement Operators (++ , --)
// 5. typeOf
// 6. spread Operator
// 7. Rest Operator
// 8. Bitwise Operator
// 9. Terinary Operator


// Arithmetic Operators :

let num1 = "1000A";
let num2 = 200;

console.log(
    `
    Addition : ${num1 + num2}
    Subtraction : ${num1 - num2}
    Multiplication : ${num1 * num2}
    Division : ${num1 / num2}
    Modulus : ${num1 % num2}
    
    `
);


// Comparision :
let num3 = "200";
let num4 = 200;

console.log(
    `
    Equals to : ${num3 == num4}
    Tripple Equals : ${num3 === num4}
    Not Equal to : ${num3 != num4}
    Greater than : ${num3 > num4}
    Less than : ${num3 < num4}
    Greater than or Equal to : ${num3 >= num4}
    Less than or Equal to : ${num3 <= num4}

    `
);
// Logical Operators :
let num5 = 1000;
let num6 = 100;

console.log(
    `
    And Operator : ${num5 > 1000 && num6 < 100}
    Or Operator : ${num5 > 1000 || num6 < 1000}
    Not Operator : ${!(num5 > num6)}

    `
)