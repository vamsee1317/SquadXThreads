//  JavaScript Variables

//  What is a Variable?

// A **variable** is a named storage container used to store data that can be used and modified later in a program.

// ---

//  How to Declare Variables in JavaScript

// You can declare variables using the following **keywords**:

// | JavaScript Version | Keyword        |
// | ------------------ | -------------- |
// | ES5                | `var`          |
// | ES6                | `let`, `const` |

// ---

//  Syntax:

// ```js
// var variableName = value;
// let variableName = value;
// const variableName = value;
// ```

// ---

//  var vs let vs const

// | Keyword | Declaration | Initialization | Re-initialization | Re-declaration |
// | ------- | ----------- | -------------- | ----------------- | -------------- |
// | `var`   | Yes         | Yes            | Yes               | Yes            |
// | `let`   | Yes         | Yes            | Yes               | No             |
// | `const` | Yes         | Yes (must)     | No                | No             |

// ---

//  Important Notes:

// 1. `const` must be **declared and initialized in the same line**.
// 2. `let` and `const` are **block scoped**; `var` is **function scoped**.
// 3. Re-declaring a `let` or `const` variable in the same scope causes an error.

// ---

//  Examples

//  1. Using `var`

// ```js
// var userName = "John";
// console.log(userName); // Output: John

// userName = "Johnny";
// console.log(userName); // Output: Johnny

// var userName = "JD";
// console.log(userName); // Output: JD
// ```

// * Re-initialization: Allowed
// * Re-declaration: Allowed

// ---

//  2. Using `let`

// ```js
// let age = 25;
// console.log(age); // Output: 25

// age = 26;
// console.log(age); // Output: 26

// // let age = 27; // Error: Identifier 'age' has already been declared
// ```

// * Re-initialization: Allowed
// * Re-declaration in same scope: Not allowed

// ---

//  3. Using `const`

// ```js
// const country = "India";
// console.log(country); // Output: India

// // country = "USA"; // Error: Assignment to constant variable
// // const country = "UK"; // Error: Identifier 'country' has already been declared
// ```

// * Re-initialization: Not allowed
// * Re-declaration: Not allowed
// * Must be initialized during declaration

// ---

//  Invalid Example for `const`

// ```js
// // const userName; // Error: Missing initializer
// // console.log(userName);
// ```

// Correct way:

// ```js
// const userName = "John Doe";
// console.log(userName); // Output: John Doe
// ```

// ---

//  Summary

// * Use `let` for variables that can change.
// * Use `const` for values that should remain constant.
// * Avoid using `var` in modern JavaScript—prefer `let` or `const` for better scoping and cleaner code.

