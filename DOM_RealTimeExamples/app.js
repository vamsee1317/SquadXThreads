// DOM Real Time Examples  : 


// To-do-list : (CRUD operations)

// Dynamic Navbar
// Profile Card Generators
// Image Gallery With LightBox
// FormValidations - (forms concept)


// Events : Events are nothing but actions or occurences that happen in the browser, often triggered by the user or the browser itself and can be handled with Js code.

// Types of events : 
    // Mouse Events
    // Keyboard Events
    // Form Events
    // Window Events

// Implementation of events :
    // inline events
    // internal events
    // props events
    // external events (addEventListner).  ***




const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const tasktext = taskInput.value.trim();

  if (tasktext === "") {
    return alert("Please enter a task!");
  }

  // Create a List Item
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 shadow-sm";

  const span = document.createElement("span");
  span.textContent = tasktext;
  span.className = "text-gray-700";

  // Delete Button
  const delteBtn = document.createElement("button");
  delteBtn.textContent = "✕";
  delteBtn.className = "text-red-500 hover:text-red-700 font-bold ml-4";
  delteBtn.onclick = () => li.remove();

  li.append(span, delteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});




// Dynamic Navbar code starts here

const navbar = document.getElementById("navbar");
const links = ["Home", "About", "Services", "Blog", "Reviews", "Contact"];

links.push("offers", "coupouns");


links.forEach((item)=>{
  const a = document.createElement("a");
  a.textContent = item;
  console.log(a);

  a.setAttribute("href", "#" + item.toLowerCase());
  a.className =
    "text-gray-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300";
  navbar.appendChild(a);
});


