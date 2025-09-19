const container = document.getElementById("container");
let url = "https://dummyjson.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add(
        "product-card",
        "bg-white",
        "rounded-2xl",
        "shadow-md",
        "p-4",
        "flex",
        "flex-col",
        "items-center",
        "transition",
        "transform",
        "hover:scale-105",
        "hover:shadow-xl"
      );

      div.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" 
          class="w-full h-48 object-cover rounded-xl mb-4" />
        <h2 class="text-lg font-semibold text-gray-800 mb-2">${product.title}</h2>
        <p class="text-sm text-gray-600 mb-2 line-clamp-2">${product.description}</p>
        <p class="text-md font-bold text-indigo-600 mb-4">Price: $${product.price}</p>
        <button type="button" 
          class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      `;

      container.appendChild(div);
    });
  })
  .catch((error) => console.log(error));




//   Async Await Version

const productContainer = document.getElementById("productContainer");

const fetchProducts = async  () =>{
    try{
        const response = await fetch(url);
        const data = await response.json();


       data.products.forEach((product) => {
         const div = document.createElement("div");
         div.classList.add(
           "product-card",
           "bg-white",
           "rounded-2xl",
           "shadow-md",
           "p-4",
           "flex",
           "flex-col",
           "items-center",
           "transition",
           "transform",
           "hover:scale-105",
           "hover:shadow-xl"
         );

         div.innerHTML = `
           <img src="${product.images[0]}" alt="${product.title}" 
             class="w-full h-48 object-cover rounded-xl mb-4" />
           <h2 class="text-lg font-semibold text-gray-800 mb-2">${product.title}</h2>
           <p class="text-sm text-gray-600 mb-2 line-clamp-2">${product.description}</p>
           <p class="text-md font-bold text-indigo-600 mb-4">Price: $${product.price}</p>
           <button type="button" 
             class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-indigo-700 transition">
             Add to Cart
           </button>
         `;

         productContainer.appendChild(div);
       });
    }
    catch(error){
        console.log(error);
    }

}

fetchProducts();




// Spread Operator
// Rest Operator
// Destructuring
// Modules
// error handling
// Closures and Lexical Scoping. 