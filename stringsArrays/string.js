// String : 

// String is a sequence of characters used to represent text, enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

// Strings are immutable, meaning once created, their content cannot be changed. However, you can create new strings based on existing ones.


// Creating Strings

// Literal Notation

const userName = 'John Doe';
console.log(typeof userName); // Output: String


// Constructor Notation
const greeting = new String('Hello, World!');
console.log(typeof greeting); // Output: Object


// Common String Methods

const sampleText = "  Hello, JavaScript! JavaScript!  ";

// Length
console.log(sampleText.length);

// String Methods :

// Accessing Characters
console.log(sampleText.charAt(2));
console.log(sampleText.charCodeAt(2));

// Concatenation :
const firstName = "John";
const lastName = "Doe";
console.log(firstName.concat(" ", lastName));

console.log(`${firstName} ${lastName}`); // Using template literals

// Indexing :
console.log(sampleText[2]);
console.log(sampleText.indexOf("H"));
console.log(sampleText.lastIndexOf("a"));

// Searching :
console.log(sampleText.includes("JavaScript"));
console.log(sampleText.startsWith("  Hello"));
console.log(sampleText.endsWith("!  "));

// Extracting Substrings :
console.log(sampleText.slice(2, 7));
console.log(sampleText.substring(2, 7));

// slice vs substring the difference is that slice can accept negative indices, while substring cannot.
// For example:
console.log(sampleText.slice(-6, -1)); // Outputs "ript!"
console.log(sampleText.substring(-6, -1)); // Outputs "  He" (negative values are treated as 0)


console.log(sampleText.substr(2, 5));

// Note: substr() is considered a legacy function and may not be supported in all environments. It's recommended to use slice() or substring() instead.

// Trimming :
console.log(sampleText.trim());
console.log(sampleText.trimStart());
console.log(sampleText.trimEnd());

// Replacing :
console.log(`--------`)
console.log(sampleText.replace(/javascript/ig, "World"));

// Note: The replace() method only replaces the first occurrence unless using a global regex (with the 'g' flag).

// Splitting :
const csvData = "apple,banana,cherry";
console.log(csvData.split(","));

// Changing Case :
console.log(sampleText.toLowerCase());
console.log(sampleText.toUpperCase());

// Template Literals :
const age = 30;
const message = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(message);
