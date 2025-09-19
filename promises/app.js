// Sync vs Async javascript


// Synchronous

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

console.log('------------------');

// Asynchronous

console.log('1');
console.log('2');

setTimeout(() => {
    console.log('3');
}, 2000);

console.log('4');
console.log('5');


// Callback Hell

setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
            setTimeout(() => {
                console.log('4');
                setTimeout(() => {
                    console.log('5');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Promises

// Promise is a special object in javascript which is used to handle asynchronous operations in a better way.

// A promise has three states:
// 1. Pending
// 2. Resolved
// 3. Rejected

// Syntax : new Promise((success, failure) => { });


// Basic example of promise

let isLoggedIn = false;
 
let promise = new Promise((resolve, reject) => {
    if(isLoggedIn) {
        resolve('User is logged in');
    } else {
        reject('User is not logged in');
    }
});
console.log(promise);


promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});


// Example 1 : Register user and send email

// Register user
function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User registered successfully');
            resolve();
        }, 5000);
    });
}


// Send email

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Email sent to ${email}`);
            resolve();
        }, 2000);
    });
}

registerUser('test@example.com', 'password123').then(() => {
        return sendEmail('test@example.com');
    })
    .then(() => {
        console.log('All done');
    })
    .catch((error) => {
        console.log(error);
    });



// API : Application Programming Interface.     
// API is a point of interaction between different software applications.
// APIs are used to fetch data from a server and display it on a web page.
// APIs are used to send data to a server and store it in a database.
// APIs are used to perform CRUD operations (Create, Read, Update, Delete) on a database.
// APIs are used to perform authentication and authorization.
// APIs are used to perform payment gateway integration.
// APIs are used to perform third party integrations (e.g. Google Maps, Facebook, Twitter, etc.).



// Fetch Method : The fetch() method is used to make an API call.
// The fetch() method returns a promise.
// The fetch() method takes one mandatory argument, the URL of the resource you want to fetch.
// The fetch() method can also take an optional second argument, an object containing any custom settings that you want to apply to the request.


// console.log(fetch("https://dummyjson.com/products"));


let url = "https://dummyjson.com/products";

let productsData = [];

fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    // console.log(data.products);
    // productsData = data.products;
    productsData = data.products;
}).catch(()=>{
    console.log('Error while fetching the data');
});

console.log(productsData);