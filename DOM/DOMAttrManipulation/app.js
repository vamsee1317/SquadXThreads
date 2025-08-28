// Create Profile Picture Element
const profilePicture = document.createElement("img");
profilePicture.setAttribute("src", "https://images.pexels.com/photos/33511055/pexels-photo-33511055.jpeg");
profilePicture.setAttribute("alt", "Profile Image");

// Class Manipulations
profilePicture.className = "profilePicture"; // Initial class
profilePicture.classList.add("ceoImage");    // Add extra class
profilePicture.classList.remove("ceoImage"); // Remove it again
profilePicture.classList.toggle("highlight"); // Toggle class ON
profilePicture.classList.toggle("highlight"); // Toggle class OFF

// Append Profile Picture to Container
const profileContainer = document.getElementById("container");
profileContainer.append(profilePicture);

// Create Navigation Link
const navLink = document.createElement("a");
navLink.href = "https://www.achieversit.com";
navLink.innerText = "Visit AchieversIT";
navLink.target = "_blank"; // Open in new tab
profileContainer.append(navLink);
