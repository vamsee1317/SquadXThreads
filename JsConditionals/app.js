// Conditional Statements : 
// CS will help us to execute different blocks of code based on different conditions.
// CS will help us to take decisions
// CS will work based boolean values (True/False)

// if

// if(true){
//     console.log("Condition is true");
// }

// if-else

if (true) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

// ternary operator

(true)?( console.log("Condition is true") ): console.log("Condition is false");

// if-else if-else

let task = "Completed"

if (true) {
    console.log(`${task} from true block`);
} else if (false) {
    console.log(`${task} from false block`);
} else if (true) {
    console.log(`${task} from true block`);
} else {
    console.log(`${task} from else block`);
}

// switch :

let role = "";

switch (role) {
    case "Admin":
        console.log("Admin role");
        break;
    case "Manager":
        console.log("Manager role");
        break;
    case "Developer":
        console.log("Developer role");
        break;
    default:
        console.log("No role found");
    // switch will work based on the value of the variable and will execute the code block of the case which matches with the value of the variable

}
// ternary operator : 



// Nested Conditional Statements


if(true){
    console.log("Parent Condition is true")
    if(true){
        console.log("Condition is false");
    }else{
        console.log("Condition is true");
    }
}else{
    console.log("Parent Condition is false");
    if(true){
        console.log("Condition is true");
    }else{
        console.log("Condition is false");
    }
}



// Code examples from real time projects :


// if - single path

// Payment success example :

const payment = {};

if(payment.status === "success"){
    sendConfirmationEmail();
}

// Product availability example :

if(product.stock > 0){
   enableAddToCartButton();
}

// Hotel stay example :

if(availableRooms > 0){
    showAvailableRooms();
}


// Upload File example :

if(file.size <= maxFileSize ){
    uploadFile();
}

// If-else - Two paths

// Login status : 

if(user.isLoggedIn){
    redirectToDashBoard();
}else{
    redirectToLogin();
}

// Delivery pickUp example :

if(restaurant.hasDelivery && restaurant.devliveryPartnersCount < 0 ){
    showDeliveryOption();
}else{
    showPickUpOption();
}

// discount example :

if(cart.totalAmount > 1000){
    applyDiscount();
}else{
    showRegularPrice();
}


// if-else ladder :
let fare = 0;

if(vehichleType === "Bikes"){
    fare = distance * 15;
}else if(vehichleType === "Auto"){
    fare = distance * 20;
}else if(vehichleType === "Cars"){
    if(cartType === "suv"){
        fare = distance * 25;
    }else if(cartType === "XUV"){
        fare = distance * 30;
    }
}else{
    console.log("Select the type of a vehicle");
}


// Order Status : 
let orderStatus = "";

if(orderStatus === "pending"){
    showPendingMessage();
}else if(orderStatus === "inProgress"){
    showInProgressMessage();
}else if(orderStatus === "dispatached"){
    showDispatchedMessage();
}else if(orderStatus === "outForDelivery"){
    showOutForDeliveryMessage();
}else if(orderStatus === "delivered"){
    showDeliveredMessage();
    showFeedbackForm();
}else{
    showErrorMessage();
}



// Terniary Operator :

// Login Lables : 

let buttonLabel = isLoggedIn ? "Logout" : "Login";

// Discount Messages:
let discountMessage = isDiscountApplied ? "Discount Applied" : "No Discount";


// Theme Messages : 
let themeMessage = isDarkMode ? "Dark Mode" : "Light Mode";

// Out of stock
let isOutOfStock = productQuantity <=0 ? "Out of Stock" : "In Stock";



// Switch Cases : 

let employee = {};

switch(employee.role){
    case "admin":
        console.log("Admin");
        loadAdminDashboard();
        break;
    case "Manager" :
        console.log("Manager");
        loadManagerDashboard();
        break;
    case "Tester":
        console.log("Tester");
        loadTesterDashboard();
        break;
    default:
        console.log("Invalid Role");
        loadDefaultDashboard();
}



// Nested Conditions : 

if(user.isLoggedIn){
    if(user.paymentMethodsSaved){
        console.log("Payment Methods Saved");
    }else{
        console.log("Payment Methods Not Saved");
    }
}else{
    console.log("User Not Logged In");

}