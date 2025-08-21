let productsInfo = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Smartphone",
    price: 999,
    inStock: true,
    rating: 4.8,
    brand: "Apple",
    quantity: 25
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Smartphone",
    price: 899,
    inStock: true,
    rating: 4.6,
    brand: "Samsung",
    quantity: 40
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 349,
    inStock: false,
    rating: 4.7,
    brand: "Sony",
    quantity: 0
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 1199,
    inStock: true,
    rating: 4.9,
    brand: "Apple",
    quantity: 12
  },
  {
    id: 5,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1099,
    inStock: true,
    rating: 4.5,
    brand: "Dell",
    quantity: 18
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 150,
    inStock: true,
    rating: 4.4,
    brand: "Nike",
    quantity: 60
  },
  {
    id: 7,
    name: "Adidas Ultraboost",
    category: "Shoes",
    price: 180,
    inStock: false,
    rating: 4.6,
    brand: "Adidas",
    quantity: 0
  },
  {
    id: 8,
    name: "Canon EOS R10",
    category: "Camera",
    price: 999,
    inStock: true,
    rating: 4.7,
    brand: "Canon",
    quantity: 10
  },
  {
    id: 9,
    name: "LG OLED55 TV",
    category: "Television",
    price: 1399,
    inStock: true,
    rating: 4.8,
    brand: "LG",
    quantity: 8
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    category: "Smartwatch",
    price: 399,
    inStock: false,
    rating: 4.6,
    brand: "Apple",
    quantity: 0
  }
];


function showOfferBanner(){
    const offers = [
        "10% of on Electronics",
        "Free delivery for the orders above $999",
        "Buy 1 Get 1 on Accessories"
    ];

    console.log("Welcome to our Store");
    offers.forEach((offer)=>{console.log(`🎉${offer}🎉`)})
}

showOfferBanner();

// const productPrices = [999, 599, 499, 199, 299, 899];

// productPrices.forEach((price)=>{
//     console.log((price - (price * 0.1) + price * 0.18));
// });



function getCountdownDiscount() {
  // Get current time
  let now = new Date();

  // Set today’s end of day (23:59:59)
  let endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  // Calculate remaining time in ms
  let timeRemaining = endOfDay - now;

  if (timeRemaining <= 0) {
    return "❌ Discount period has ended!";
  }

  // Convert remaining time into hours, minutes, seconds
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Static discount for today
  let discount = 20; // 20% flat discount for the day

  return `⏳ Time left: ${hours}h ${minutes}m ${seconds}s | 💰 Flat Discount: ${discount}% (valid till EOD)`;
}


const discount = getCountdownDiscount();
console.log(discount);



// Display all the products : 

function displayProducts(productList){
    console.log("Available Products");

    productList.forEach((product)=>{
        console.log(`${product.id}. ${product.name} - ${product.price}`);
        
    })
}

displayProducts(productsInfo);


let cart = [];


function addToCart(productId, quantity){
    const product = productsInfo.find(p=> p.id === productId);

    if(!product){
        console.log(`No results Found`);
        return 0;
    }


    const total = product.price * quantity;

    cart.push({...product, quantity, total});
    return total;
}

const cartTotal = addToCart(5, 3);
addToCart(1, 1);

console.log(cart);


console.log(cartTotal);


