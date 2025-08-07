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
);


// Increment (++) and Decrement(--) Operators :


// Post Increment : num7 ++;
// Pre Increment : ++ num7;

let num7 = 1000;
let num8 = ++ num7;

console.log(`num7 : ${num7}  num8 : ${num8} `);

// num8 += 1;
// console.log(`num8 : ${num8} `);
// console.log(num8++);

// Assignment Operators :
let num9 = 1000;


num9 += 1000;
console.log(`num9 : ${num9} `); // 2000
num9 -= 1000;
console.log(`num9 : ${num9} `); // 1000
num9 *= 1000;
console.log(`num9 : ${num9} `); // 1000000
num9 /= 1000;
console.log(`num9 : ${num9} `); // 1000
num9 %= 1000;
console.log(`num9 : ${num9} `); // 0
num9 **= 1000;
console.log(`num9 : ${num9} `); // 1 or 0;



// Spread Operator :

const numList = [10, 20, 30, 40];

const finalList = [...numList, 50, 60, 70];
console.log(finalList); // [10, 20, 30, 40]



// Usage of Operators from Application Point of view :

// 1. Arithmetic Operators :

// Calculating the total price of items in Amazon Cart :

const p1 = 999;
const p2 = 1999;
const p3 = 2999;

const total = p1 + p2 + p3;

// Appliying a discount 10 %.  10 /100

let discount = 10;
const finalPrice = total - (total * discount / 100);


// Caluculating watch duration in a video :

let start = 10;
let end = 12.5;

let duration = end - start;

// Calculating average review of a product :

let ratings = [4, 5, 3, 5, 4, 2, 0, 1, 3, 5];

let sum = 0;

for(let i = 0; i < ratings.length ; i++) {
    sum += ratings[i];
}

let averageRatings = sum / ratings.length;

console.log(averageRatings);