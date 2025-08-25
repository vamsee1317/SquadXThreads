// -----------------------------------------------
// DOM - Document Object Model :
// -----------------------------------------------
// 1. DOM is nothing but a tree-like structure where
//    all the HTML elements are arranged in a hierarchical fashion.
// 2. DOM enables JavaScript to easily access, traverse,
//    and manipulate elements on a web page.
// 3. Using DOM we can perform CRUD operations
//    (Create, Read, Update, Delete) on HTML elements.

// -----------------------------------------------
// DOM SELECTORS :
// -----------------------------------------------

// getElementsByTagName() 
// -> Selects elements by their HTML tag name.
// -> Returns an HTMLCollection (array-like object).
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);  
// Example: Will select all <p> tags present in the document.


// getElementsByClassName()
// -> Selects elements by their class name.
// -> Returns an HTMLCollection.
const sections = document.getElementsByClassName("section");
console.log("getElementsByClassName:", sections);  
// Example: Will select all elements with class="section".


// getElementById()
// -> Selects only ONE element with the given ID.
// -> IDs must be unique in a page.
const header = document.getElementById("mainHeader");
console.log("getElementById:", header);  
// Example: Will select the element with id="mainHeader".


// querySelector()
// -> Selects the FIRST matching element based on a CSS selector.
// -> Returns a single element.
const searchInput = document.querySelector(".search-box > #searchForm > input:first-child");
console.log("querySelector:", searchInput);  
// Example: Will select the first <input> inside #searchForm which is inside .search-box.


// querySelectorAll()
// -> Selects ALL matching elements based on a CSS selector.
// -> Returns a NodeList (can be looped using forEach).
const allParagraphs = document.querySelectorAll("p");
console.log("querySelectorAll:", allParagraphs);  
// Example: Will select all <p> tags present in the document.
