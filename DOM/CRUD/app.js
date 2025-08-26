// -------------------------------
// 1. CREATE ELEMENTS
// -------------------------------
const bootstrapItem = document.createElement("li"); 
bootstrapItem.innerHTML = `<a href="https://getbootstrap.com/">Bootstrap</a>`; // using innerHTML

const tailwindItem = document.createElement("li");
tailwindItem.innerText = "TailwindCSS"; // using innerText

const reactItem = document.createElement("li");
reactItem.textContent = "ReactJS"; // using textContent

console.log("Created Elements:", bootstrapItem, tailwindItem, reactItem);

// -------------------------------
// 2. ADD / INSERT ELEMENTS
// -------------------------------
const courseList = document.getElementById("courseList");
const jsListItem = document.getElementById("js");

// prepend → adds at the beginning
courseList.prepend(bootstrapItem);

// append → adds at the end
courseList.append(reactItem);

// appendChild → older way, adds at end
courseList.appendChild(tailwindItem);

// insertBefore(newElement, referenceElement)
const javaItem = document.createElement("li");
javaItem.innerText = "Java";
courseList.insertBefore(javaItem, jsListItem);

// insertAdjacentElement(position, element)
const pythonItem = document.createElement("li");
pythonItem.innerText = "Python";
jsListItem.insertAdjacentElement("beforebegin", pythonItem); // before js item

// -------------------------------
// 3. MODIFY ELEMENTS
// -------------------------------
jsListItem.textContent = "JavaScript ES6"; // updates existing text

// -------------------------------
// 4. REPLACE ELEMENTS
// -------------------------------
const java8Item = document.createElement("li");
java8Item.innerText = "Java 8";

// replaceChild(new, old)
courseList.replaceChild(java8Item, javaItem);

// replaceWith(new)
pythonItem.replaceWith("TypeScript"); // replaces python item with plain text

// -------------------------------
// 5. DELETE ELEMENTS
// -------------------------------
// removeChild()
courseList.removeChild(tailwindItem);

// remove() - directly removes element
reactItem.remove();

// -------------------------------
// SUMMARY OF METHODS (Reference)
// -------------------------------
/*
  createElement()      -> Creates a new element
  innerHTML            -> Adds HTML content (renders tags)
  innerText            -> Adds text (ignores hidden text, respects CSS)
  textContent          -> Adds all text (including hidden text)

  append()             -> Adds at end (multiple nodes/strings allowed)
  prepend()            -> Adds at start
  appendChild()        -> Adds at end (only one node)
  insertBefore()       -> Insert before specific element
  insertAdjacentElement(position, el)
                          -> Adds relative to an element
                             positions: beforebegin, afterbegin, beforeend, afterend

  replaceChild(new, old) -> Replaces child inside parent
  replaceWith(new)       -> Replaces element directly

  removeChild(child)   -> Removes a specific child
  remove()             -> Removes element itself
*/
