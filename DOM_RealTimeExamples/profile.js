const cardContainer = document.getElementById("cardContainer");

document.getElementById("createCard").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const imgUrl = document.getElementById("imgUrl").value.trim();

  if (!name || !role || !imgUrl) {
    return alert("Please fill all fields!");
  }

  // Create Card
  const card = document.createElement("div");
  card.className =
    "bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col items-center p-3 transform hover:scale-105 transition duration-300";

  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  img.setAttribute("alt", name);
  img.className = "w-24 h-24 object-cover rounded-full border-2 border-gray-300"; 
  // 👆 50% border radius using rounded-full

  const h3 = document.createElement("h3");
  h3.textContent = name;
  h3.className = "text-lg font-bold text-gray-800 mt-4";

  const p = document.createElement("p");
  p.textContent = role;
  p.className = "text-gray-600 mt-1";

  card.append(img, h3, p);
  cardContainer.append(card);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("imgUrl").value = "";
});
