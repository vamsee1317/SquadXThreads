// ============================
// Product Data
// ============================
let productsInfo = [
  { id: 1, name: "iPhone 15", category: "Smartphone", price: 999, inStock: true, rating: 4.8, brand: "Apple", quantity: 25 },
  { id: 2, name: "Samsung Galaxy S23", category: "Smartphone", price: 899, inStock: true, rating: 4.6, brand: "Samsung", quantity: 40 },
  { id: 3, name: "Sony WH-1000XM5", category: "Headphones", price: 349, inStock: false, rating: 4.7, brand: "Sony", quantity: 0 },
  { id: 4, name: "MacBook Air M2", category: "Laptop", price: 1199, inStock: true, rating: 4.9, brand: "Apple", quantity: 12 },
  { id: 5, name: "Dell XPS 13", category: "Laptop", price: 1099, inStock: true, rating: 4.5, brand: "Dell", quantity: 18 },
  { id: 6, name: "Nike Air Max 270", category: "Shoes", price: 150, inStock: true, rating: 4.4, brand: "Nike", quantity: 60 },
  { id: 7, name: "Adidas Ultraboost", category: "Shoes", price: 180, inStock: false, rating: 4.6, brand: "Adidas", quantity: 0 },
  { id: 8, name: "Canon EOS R10", category: "Camera", price: 999, inStock: true, rating: 4.7, brand: "Canon", quantity: 10 },
  { id: 9, name: "LG OLED55 TV", category: "Television", price: 1399, inStock: true, rating: 4.8, brand: "LG", quantity: 8 },
  { id: 10, name: "Apple Watch Series 9", category: "Smartwatch", price: 399, inStock: false, rating: 4.6, brand: "Apple", quantity: 0 }
];


// ============================
// Offers
// ============================
function showOfferBanner() {
  const offers = [
    "10% off on Electronics",
    "Free delivery for orders above $999",
    "Buy 1 Get 1 on Accessories"
  ];

  console.log("🎉 Welcome to our Store 🎉");
  offers.forEach((offer) => console.log(`👉 ${offer}`));
}

showOfferBanner();


// ============================
// Discount Countdown
// ============================
function getCountdownDiscount() {
  let now = new Date();
  let endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  let timeRemaining = endOfDay - now;

  if (timeRemaining <= 0) {
    return "❌ Discount period has ended!";
  }

  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let discount = 20; // Flat 20% discount

  return `⏳ Time left: ${hours}h ${minutes}m ${seconds}s | 💰 Flat Discount: ${discount}% (valid till EOD)`;
}

console.log(getCountdownDiscount());


// ============================
// Display Products
// ============================
function displayProducts(productList) {
  console.log("📦 Available Products:");
  productList.forEach((product) => {
    console.log(`${product.id}. ${product.name} - $${product.price} (${product.inStock ? "In Stock" : "Out of Stock"})`);
  });
}

displayProducts(productsInfo);


// ============================
// Cart Management
// ============================
let cart = [];

function addToCart(productId, quantity) {
  const product = productsInfo.find(p => p.id === productId);

  if (!product) {
    console.log(`❌ No product found with ID: ${productId}`);
    return 0;
  }

  if (!product.inStock || product.quantity < quantity) {
    console.log(`⚠️ ${product.name} is out of stock or insufficient quantity`);
    return 0;
  }

  const total = product.price * quantity;
  cart.push({ ...product, quantity, total });

  console.log(`✅ Added ${quantity} x ${product.name} to cart`);
  return total;
}

// Example Usage
addToCart(5, 3);
addToCart(1, 1);
console.log("🛒 Cart:", cart);


// ============================
// User Authentication
// ============================
let loggedInUser = null;

function loginUser(userName = "Guest", password = "000000", profilePic = "dummy.png") {
  const storedUser = { user: "Vamsee", pwd: "12345" };

  if (userName === storedUser.user && password === storedUser.pwd) {
    loggedInUser = userName;
    console.log(`✅ ${userName}, Welcome Back!`);
  } else if (userName === "Guest") {
    loggedInUser = userName;
    console.log(`👤 Logged in as Guest`);
  } else {
    console.log(`❌ Invalid login details`);
  }
}

loginUser("Vamsee", "12345");


// ============================
// Cart Summary (Function Expression)
// ============================
const showCartSummary = function () {
  if (cart.length === 0) {
    console.log(`🛒 Cart is Empty`);
    return;
  }

  console.log(`🧾 Cart Summary:`);
  cart.forEach((item) => {
    console.log(`${item.name} - $${item.total}`);
  });
};

showCartSummary();


// ============================
// IIFE Example
// ============================
(() => {
  if (!loggedInUser) {
    console.log(`🔒 Redirecting to Login Page...`);
  } else {
    console.log(`✅ User Logged In: ${loggedInUser}`);
  }
})();


// ============================
// Arrow Function Example
// ============================
const showCartCount = (user) => console.log(`${user} has ${cart.length} items in the cart`);
showCartCount(loggedInUser);


// ============================
// Callback Example - Payment
// ============================
function processPayment(amount, cb) {
  if (!loggedInUser) {
    console.log(`⚠️ Please login before making a payment`);
    return;
  }

  console.log(`💳 Processing Payment...`);

  setTimeout(() => {
    console.log(`✅ Payment in Progress`);
    console.log(`💵 $${amount} has been deducted from your account`);
    cb();
  }, 3000);
}

function paymentSuccess() {
  console.log(`🎉 Payment Successful`);
  generateInvoice();
}

function generateInvoice() {
  console.log(`📧 Invoice has been sent to your email`);
}

// Example Usage
processPayment(100000, paymentSuccess);
