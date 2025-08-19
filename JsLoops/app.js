

// Loops :  

// A loop is a way to repeat a block of code multiple times untill a condition is met.



// for : 

    // for(let i=0 ; i <= 5 ; i++){
    //     console.log(i);
    // }

    // for( let i=0 ;  i <= 5  ;  i++){
    //     console.log("HelloWorld!!");
    // }

    // Iterating a string : 
    // let str = "HelloWorld";

    // for(let i = 0; i < str.length ; i++ ){
    //     console.log(`${i} : ${str[i]}`);
    // }

    // Iterating an array : 
    // let recommendedProducts = ["Tshirts", "Shoes", "Watches", "Mobiles", "Tshirts", "Shoes", "Watches", "Mobiles"];

    // for(let i = 0; i < recommendedProducts.length ; i++){
    //     console.log(recommendedProducts[i]);
    // }

    // Iterating an object :


    // for(let i =0; i < Object.keys(product).length ; i++){
    //     console.log(`${Object.keys(product)[i]} : ${product[Object.keys(product)[i]]}`);
    // }


// while : 

    // let j = 0;

    // while(j < 5){
    //     console.log(j);
    //     j++;
    // }


// do-while : 

    // let k = 0;

    // do{
    //     console.log(k);
    //     k++;
    // }while(k > 5);

// for of :

    // for(product of recommendedProducts){
    //     console.log(product);
    // }



// for in
    // let product = {
    //     "name" : "Tshirts",
    //     "price" : 100,
    //     "color" : "Blue",
    //     "size" : "M"
    // }

    // for(item in product){
    //     console.log(product[item]);
    // }


// Entry Controlled Loops

// For : 

// While : 


// Exit Controlled Loop

// do while : 




// Practical Examples :

// Count Controled Loop:

// for loop : 

    let products = ["Laptops", "Mobiles", "Furniture", "Accessories", "Clothing", "Fashion"];


let productsInfo = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    stock: 30,
    rating: 4.5
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sportswear",
    price: 1599,
    stock: 50,
    rating: 4.2
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Gadgets",
    price: 3499,
    stock: 20,
    rating: 4.7
  }
];



    for(let i=0; i < productsInfo.length; i++){
        // console.log(`products${i} - ${products[i]}`);
        console.log(`product${i + 1} - ${productsInfo[i].name}`);
        
    }

// Condition Controlled Loops : 

// while  : 

let  correctPassword = "netflix123";
let enteredPassword = "wrong";

while(enteredPassword !== correctPassword){
    console.log("Wrong Password !...try again");

    enteredPassword = "netflix123";
    
}

console.log("Password is correct");




// Task : 


// You need to collect a string from the user.
// Vamsee


// V
// Va
// Vam
// Vams
// Vamse
// Vamsee


// Star partterns

// *
// **
// ***
// ****
// *****


//     *
//    **
//   ***
//  ****
// *****

// num = 5

// *****
// *****
// *****
// *****
// *****


// num = 5

// * * *
//  * *
// * * *
//  * *