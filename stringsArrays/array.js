// Array :
// Array is nothing but a collection of items or elements which can be either be of same type or different type.
// Array is a non-primitive data type.
// Array is a reference data type.


// Creating an Array

const numbers = [1, 2, 3, 4, 5]; // Literal Notation
console.log(typeof numbers); // Output: Object

const fruits = new Array('Apple', 'Banana', 'Orange'); // Constructor Notation
console.log(typeof fruits); // Output: Object

// Array property : 
console.log(numbers.length); // Output: 5


// Accessing Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits.at(1)); // Output: Banana


// Array Methods

const productCategories = ["laptop", "Mobiles", "Furniture", "Groceries"];


// Push : 

productCategories.push("Electronics", "Fashion");


// Pop : 

const poppedElement = productCategories.pop();
console.log(poppedElement);


// Shift () :

const shiftedElement = productCategories.shift();
console.log(shiftedElement);


// unshift () :
productCategories.unshift("Fashion", "laptop");


// Slice ()
const slicedCategories = productCategories.slice(0, 5);
console.log(slicedCategories);

// Splice()

slicedCategories.splice(6, 3, "NewItem", "NewItem", "NewItem");
console.log(slicedCategories);

console.log(productCategories);


// Map ():

const numList = [10, 20, 30, 40, 50];

const squaredNums = numList.map((num) => { return num * num; num / 2 });

console.log(squaredNums);


// Mapping an Array of an object


const productInformation = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        brand: "Sony",
        actualPrice: 5999,
        discountedPrice: 4499,
        ratings: [5, 4, 4, 5, 3],
        quantity: 120,
        description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
        inStock: true,
        image: "https://picsum.photos/id/1011/400/400",
    },
    {
        id: 2,
        name: "Smart LED TV 43 inch",
        category: "Electronics",
        brand: "Samsung",
        actualPrice: 28999,
        discountedPrice: 23999,
        ratings: [4, 4, 5, 5, 4, 3],
        quantity: 45,
        description: "Ultra HD 4K Smart TV with voice assistant and multiple apps.",
        inStock: true,
        image: "https://picsum.photos/id/1015/400/400",
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        brand: "Nike",
        actualPrice: 3999,
        discountedPrice: 2999,
        ratings: [5, 5, 4, 4, 4],
        quantity: 80,
        description: "Lightweight, breathable running shoes for daily workouts.",
        inStock: true,
        image: "https://picsum.photos/id/1020/400/400",
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        category: "Home & Kitchen",
        brand: "Milton",
        actualPrice: 899,
        discountedPrice: 599,
        ratings: [4, 5, 4, 3, 5],
        quantity: 300,
        description: "Hot & cold vacuum insulated water bottle, 1L capacity.",
        inStock: true,
        image: "https://picsum.photos/id/1025/400/400",
    },
    {
        id: 5,
        name: "Gaming Laptop",
        category: "Computers",
        brand: "Asus",
        actualPrice: 99999,
        discountedPrice: 84999,
        ratings: [5, 5, 4, 5, 4, 5],
        quantity: 25,
        description: "RTX 4060, Intel i7, 16GB RAM, 1TB SSD – perfect for gaming & work.",
        inStock: true,
        image: "https://picsum.photos/id/1035/400/400",
    },
    {
        id: 6,
        name: "Cotton T-Shirt",
        category: "Fashion",
        brand: "H&M",
        actualPrice: 799,
        discountedPrice: 499,
        ratings: [4, 3, 5, 4, 4],
        quantity: 200,
        description: "100% cotton casual wear T-shirt for men & women.",
        inStock: true,
        image: "https://picsum.photos/id/1040/400/400",
    },
    {
        id: 7,
        name: "Microwave Oven",
        category: "Appliances",
        brand: "LG",
        actualPrice: 14999,
        discountedPrice: 12499,
        ratings: [5, 4, 5, 4, 5],
        quantity: 60,
        description: "28L convection microwave oven with smart cooking modes.",
        inStock: true,
        image: "https://picsum.photos/id/1045/400/400",
    },
    {
        id: 8,
        name: "Fitness Smartwatch",
        category: "Wearables",
        brand: "Fitbit",
        actualPrice: 10999,
        discountedPrice: 8999,
        ratings: [4, 4, 3, 5, 4],
        quantity: 90,
        description: "Tracks steps, heart rate, sleep, and comes with water resistance.",
        inStock: true,
        image: "https://picsum.photos/id/1050/400/400",
    },
    {
        id: 9,
        name: "Office Chair",
        category: "Furniture",
        brand: "GreenSoul",
        actualPrice: 14999,
        discountedPrice: 9999,
        ratings: [4, 5, 4, 4, 5],
        quantity: 50,
        description: "Ergonomic chair with lumbar support and adjustable height.",
        inStock: true,
        image: "https://picsum.photos/id/1055/400/400",
    },
    {
        id: 10,
        name: "Electric Kettle",
        category: "Home Appliances",
        brand: "Philips",
        actualPrice: 2499,
        discountedPrice: 1999,
        ratings: [4, 4, 5, 3, 4],
        quantity: 150,
        description: "1.5L stainless steel electric kettle with auto shut-off feature.",
        inStock: true,
        image: "https://picsum.photos/id/1060/400/400",
    },
];



// const category = productInformation.map(product => {
//     return (
//         `
//             <div class="card">
//                 <img src=${product.image} alt=${product.name}>
//                 <h3>${product.name.charAt(0).toUpperCase()}</h3>
//                 <pre>${product.discountedPrice} <strike>${product.actualPrice}</strike></pre>
//                 <button>addToCart</button>
//             </div>
        
//         `)
// });

// const productContainer = document.getElementById("productContainer");
// productContainer.innerHTML = category.join("");
// console.log(category);

// Filter () :

const numbersList = [10, 25, 30, 45, 50, 60, 75, 80, 90, 100];

const evenNumbers = numbersList.filter((num)=>{return num > 50});
console.log(evenNumbers);

// Filter the products from 2000 - 5000


const filteredProducts = productInformation.filter((product)=> product.actualPrice >=500 && product.actualPrice <= 5000 ); ;   
console.log(filteredProducts);   


// Reduce () :

const sumOfNumbersList = numbersList.reduce((accumulator, currentValue) => {  return accumulator + currentValue;}, 100);
console.log(sumOfNumbersList);


const filteredProductsSummary = filteredProducts.reduce((accumulator, product) =>{
    return accumulator + product.actualPrice;
}, 0);
console.log(filteredProductsSummary);


// fill ()

const filledArray = numbersList.fill(0);
console.log(filledArray);


// concat ()

const moreNumbers = [110, 120, 130];
const combinedArray = numbersList.concat(moreNumbers);
console.log(combinedArray);

// sort ()

const unsortedArray = [5, 3, 8, 1, 2];
const desSortedArray = unsortedArray.sort((a, b) => b - a); // Descending order
const aesSortedArray = unsortedArray.sort((a, b) => a - b); // Ascending order
console.log(aesSortedArray); // Output: [1, 2, 3, 5, 8]
console.log(desSortedArray); // Output: [8, 5, 3, 2, 1]