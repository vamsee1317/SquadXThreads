// ================================
// EVENTS IN JAVASCRIPT
// ================================

// 👉 What is an Event?
// An event is an action or occurrence that happens in the browser,
// which JavaScript can respond to. 

// Example: A user clicking a button, typing in a textbox, resizing the window, 
// or even when a page finishes loading. 

// Events make websites INTERACTIVE and DYNAMIC.
// Without events, websites would just be static HTML and CSS pages.


// ======================================
// TYPES OF EVENTS
// ======================================

// 1. Mouse Events
//    These are triggered by mouse actions such as clicking, hovering, or scrolling.
//    Examples: onclick, ondblclick, onmouseover, onmouseout, onmousemove.
//    Real-time Example: Clicking a "Submit" button on a form.

// 2. Keyboard Events
//    These are triggered when the user interacts with the keyboard.
//    Examples: onkeydown, onkeyup, onkeypress.
//    Real-time Example: Typing a password and showing/hiding it when pressing Enter.

// 3. Form Events
//    These are triggered while working with form elements (input, select, textarea).
//    Examples: onsubmit, onchange, onfocus, onblur, oninput.
//    Real-time Example: Submitting a login form, validating inputs before submission.

// 4. Window Events
//    These are triggered when certain actions happen in the browser window.
//    Examples: onload, onresize, onscroll, onbeforeunload.
//    Real-time Example: Displaying a popup when the page loads, 
//    or hiding/showing header when scrolling down.


// ======================================
// WAYS TO IMPLEMENT EVENTS
// ======================================

// 1. Inline Events
//    - Directly written inside the HTML element using attributes.
//    - Simple but not recommended for large projects as it mixes HTML with JS.
//    Example:
//      <button onclick="alert('Button Clicked!')">Click Me</button>

// 2. Property Based Events (DOM Object Property)
//    - Assigning an event directly to a DOM element property in JavaScript.
//    - Cleaner than inline but allows only ONE handler at a time.
//    Example:
    //  const btn = document.getElementById("myBtn");

    //  console.log(btn);

    //  btn.onclick = function() {
    //      alert("Button Clicked!");
    //  }

// 3. addEventListener Method
//    - Most modern and recommended approach.
//    - Allows multiple event listeners on the same element.
//    - Syntax: element.addEventListener(event, callback)
//    Example:
    //  const btn = document.getElementById("myBtn");

    //  btn.addEventListener("click", function() {
    //      alert("Button Clicked!");
    //  });

// ======================================
// SUMMARY
// ======================================
// - Events allow us to capture user actions and respond accordingly.
// - Categories: Mouse, Keyboard, Form, Window.
// - Ways to implement: Inline, Property Based, addEventListener (best practice).



const signInBtn = document.getElementById("signInBtn");


signInBtn.addEventListener("click",  function() {
      // Fetch values and remove extra spaces
      let userName = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();

      // Check if username is empty
      if (userName === "") {
        alert("Username cannot be empty!");
        return false; // stops form submission
      }

      // Check if password is empty
      if (password === "") {
        alert("Password cannot be empty!");
        return false;
      }

      // If everything is valid
      alert("Form submitted successfully!");
      return true;
    }
);


// Event Bubbling & Capturing : 