// // app.js

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");

//   const firstName = document.getElementById("firstName");
//   const lastName = document.getElementById("lastName");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmPassword");

//   // Utility: show error under field
//   function showError(input, message) {
//     // remove old error if exists
//     const oldError = input.parentElement.querySelector(".error");
//     if (oldError) oldError.remove();

//     // create error element
//     const error = document.createElement("span");
//     error.classList.add("error");
//     error.innerText = message;
//     input.parentElement.appendChild(error);
//   }

//   // Utility: clear all errors
//   function clearErrors() {
//     document.querySelectorAll(".error").forEach((el) => el.remove());
//   }

//   form.addEventListener("submit", (e) => {
//     e.preventDefault(); // stop form from submitting
//     clearErrors();

//     let isValid = true;

//     // Regex patterns
//     const nameRegex = /^[A-Za-z]{2,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     // Firstname
//     if (!nameRegex.test(firstName.value.trim())) {
//       isValid = false;
//       showError(firstName, "Firstname should be at least 2 letters.");
//     }

//     // Lastname
//     if (!nameRegex.test(lastName.value.trim())) {
//       isValid = false;
//       showError(lastName, "Lastname should be at least 2 letters.");
//     }

//     // Email
//     if (!emailRegex.test(email.value.trim())) {
//       isValid = false;
//       showError(email, "Enter a valid email address.");
//     }

//     // Password
//     if (!passwordRegex.test(password.value)) {
//       isValid = false;
//       showError(
//         password,
//         "Min 8 chars, include uppercase, lowercase, number & special char."
//       );
//     }

//     // Confirm Password
//     if (password.value !== confirmPassword.value) {
//       isValid = false;
//       showError(confirmPassword, "Passwords do not match.");
//     }

//     if (isValid) {
//       // ✅ Success
//       form.reset();
//       alert("Form submitted successfully ✅"); // optional, can remove
//     }
//   });
// });



// app.js

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");

//   const firstName = document.getElementById("firstName");
//   const lastName = document.getElementById("lastName");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmPassword");

//   // Utility: show error under field
//   function showError(input, message) {
//     const oldError = input.parentElement.querySelector(".error");
//     if (oldError) oldError.remove();

//     const error = document.createElement("span");
//     error.classList.add("error");
//     error.innerText = message;
//     input.parentElement.appendChild(error);
//   }

//   // Utility: clear all errors
//   function clearErrors() {
//     document.querySelectorAll(".error").forEach((el) => el.remove());
//   }

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     clearErrors();

//     let isValid = true;

//     // Regex patterns
//     const nameRegex = /^[A-Za-z]{2,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     // Firstname
//     if (!nameRegex.test(firstName.value.trim())) {
//       isValid = false;
//       showError(firstName, "Firstname should be at least 2 letters.");
//     }

//     // Lastname
//     if (!nameRegex.test(lastName.value.trim())) {
//       isValid = false;
//       showError(lastName, "Lastname should be at least 2 letters.");
//     }

//     // Email
//     if (!emailRegex.test(email.value.trim())) {
//       isValid = false;
//       showError(email, "Enter a valid email address.");
//     }

//     // Password
//     if (!passwordRegex.test(password.value)) {
//       isValid = false;
//       showError(
//         password,
//         "Min 8 chars, include uppercase, lowercase, number & special char."
//       );
//     }

//     // Confirm Password
//     if (password.value !== confirmPassword.value) {
//       isValid = false;
//       showError(confirmPassword, "Passwords do not match.");
//     }

//     if (!isValid) return;

//     // ✅ If valid, prepare payload
//     const payload = {
//       firstName: firstName.value.trim(),
//       lastName: lastName.value.trim(),
//       email: email.value.trim(),
//       password: password.value.trim(),
//     };

//     console.log("🚀 Payload:", payload);

//     try {
//       // Example API call (replace with your endpoint)
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       const data = await response.json();
//       console.log("✅ API Response:", data);

//       // Show success
//       const successMsg = document.createElement("span");
//       successMsg.classList.add("success");
//       successMsg.innerText = "Form submitted successfully ✅";
//       form.appendChild(successMsg);

//       // reset form
//       form.reset();
//     } catch (error) {
//       console.error("❌ Error:", error);
//       showError(email, "Something went wrong. Please try again.");
//     }
//   });
// });




// app.js

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");

//   const firstName = document.getElementById("firstName");
//   const lastName = document.getElementById("lastName");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmPassword");

//   // Regex patterns
//   const nameRegex = /^[A-Za-z]{2,}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   // Utility: show error under field
//   function showError(input, message) {
//     const oldError = input.parentElement.querySelector(".error");
//     if (oldError) oldError.remove();

//     if (message) {
//       const error = document.createElement("span");
//       error.classList.add("error");
//       error.innerText = message;
//       input.parentElement.appendChild(error);
//     }
//   }

//   // Validation functions
//   function validateFirstName() {
//     if (!nameRegex.test(firstName.value.trim())) {
//       showError(firstName, "Firstname should be at least 2 letters.");
//       return false;
//     }
//     showError(firstName, "");
//     return true;
//   }

//   function validateLastName() {
//     if (!nameRegex.test(lastName.value.trim())) {
//       showError(lastName, "Lastname should be at least 2 letters.");
//       return false;
//     }
//     showError(lastName, "");
//     return true;
//   }

//   function validateEmail() {
//     if (!emailRegex.test(email.value.trim())) {
//       showError(email, "Enter a valid email address.");
//       return false;
//     }
//     showError(email, "");
//     return true;
//   }

//   function validatePassword() {
//     if (!passwordRegex.test(password.value)) {
//       showError(
//         password,
//         "Min 8 chars, include uppercase, lowercase, number & special char."
//       );
//       return false;
//     }
//     showError(password, "");
//     return true;
//   }

//   function validateConfirmPassword() {
//     if (password.value !== confirmPassword.value) {
//       showError(confirmPassword, "Passwords do not match.");
//       return false;
//     }
//     showError(confirmPassword, "");
//     return true;
//   }

//   // Attach real-time validation
//   firstName.addEventListener("input", validateFirstName);
//   lastName.addEventListener("input", validateLastName);
//   email.addEventListener("input", validateEmail);
//   password.addEventListener("input", validatePassword);
//   confirmPassword.addEventListener("input", validateConfirmPassword);

//   // Submit handler
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const isValid =
//       validateFirstName() &&
//       validateLastName() &&
//       validateEmail() &&
//       validatePassword() &&
//       validateConfirmPassword();

//     if (!isValid) return;

//     // ✅ If valid, prepare payload
//     const payload = {
//       firstName: firstName.value.trim(),
//       lastName: lastName.value.trim(),
//       email: email.value.trim(),
//       password: password.value.trim(),
//     };

//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Failed to submit form");

//       const data = await response.json();
//       console.log("✅ API Response:", data);

//       // Success message
//       const successMsg = document.createElement("span");
//       successMsg.classList.add("success");
//       successMsg.innerText = "Form submitted successfully ✅";
//       form.appendChild(successMsg);

//       form.reset();
//     } catch (error) {
//       console.error("❌ Error:", error);
//       showError(email, "Something went wrong. Please try again.");
//     }
//   });
// });



// Local storage version


// app.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Regex patterns
  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Utility: show error under field
  function showError(input, message) {
    const oldError = input.parentElement.querySelector(".error");
    if (oldError) oldError.remove();

    if (message) {
      const error = document.createElement("span");
      error.classList.add("error");
      error.innerText = message;
      input.parentElement.appendChild(error);
    }
  }

  // Validation functions
  function validateFirstName() {
    if (!nameRegex.test(firstName.value.trim())) {
      showError(firstName, "Firstname should be at least 2 letters.");
      return false;
    }
    showError(firstName, "");
    return true;
  }

  function validateLastName() {
    if (!nameRegex.test(lastName.value.trim())) {
      showError(lastName, "Lastname should be at least 2 letters.");
      return false;
    }
    showError(lastName, "");
    return true;
  }

  function validateEmail() {
    if (!emailRegex.test(email.value.trim())) {
      showError(email, "Enter a valid email address.");
      return false;
    }
    showError(email, "");
    return true;
  }

  function validatePassword() {
    if (!passwordRegex.test(password.value)) {
      showError(
        password,
        "Min 8 chars, include uppercase, lowercase, number & special char."
      );
      return false;
    }
    showError(password, "");
    return true;
  }

  function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match.");
      return false;
    }
    showError(confirmPassword, "");
    return true;
  }

  // Attach real-time validation
  firstName.addEventListener("input", validateFirstName);
  lastName.addEventListener("input", validateLastName);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid =
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword();

    if (!isValid) return;

    const payload = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    // 🔹 Check if user already exists in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === payload.email);

    if (userExists) {
      showError(email, "This email is already registered.");
      return;
    }

    // 🔹 Save new user
    users.push(payload);
    localStorage.setItem("users", JSON.stringify(users));

    // Success message
    const successMsg = document.createElement("span");
    successMsg.classList.add("success");
    successMsg.innerText = "Registration successful ✅";
    form.appendChild(successMsg);

    // Reset form
    form.reset();
  });
});
