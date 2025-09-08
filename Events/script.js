const gparent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// -------------------------
// Event Bubbling (default)
// -------------------------
gparent.addEventListener("click", () => {
  console.log(`GrandParent Triggered with Bubbling`);
});

parent.addEventListener("click", () => {
  console.log(`Parent Triggered with Bubbling`);
});

child.addEventListener("click", () => {
  console.log(`Child Triggered with Bubbling`);
});

// -------------------------
// Event Capturing (3rd param = true)
// -------------------------
gparent.addEventListener("click", () => {
  console.log(`GrandParent Triggered with Capturing`);
}, true);

parent.addEventListener("click", () => {
  console.log(`Parent Triggered with Capturing`);
}, true);

child.addEventListener("click", () => {
  console.log(`Child Triggered with Capturing`);
}, true);







// -------------------------

// Events
// Types of Events
// Implementation of Events
// Event Propagation
// Event Bubbling
// Event Capturing
// stopPropagation()
// immediateStopPropagation()
// Event Delegation
// Event Listener
// Event handlers
// addEventListener()