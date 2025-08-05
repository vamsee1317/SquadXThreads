// Data Type : 

// A DT is a classification that tells us what type of data a variable contains.

// DT are classified into two types :
// 1. Primitive DT

   // These are further classfied into :
        // number

        const aadharNumber = 123412341234;
        console.log(typeof aadharNumber); // number

        let cartItems = [];

        let totalCartValue = cartItems.reduce((sum, item)=> sum + item.price, 0);

        // // Variable decalaration in Java
        // int aadharNumber = 123412341234;

        // string :
        let customerName = "VamseeKrishna";
        let welcomeMessage = `Hello ${customerName}!`
        console.log(typeof welcomeMessage); // string

        // boolean : (True | False)

        let isCustomerVerified = true;

        let isLoggedIn = false;
        console.log(typeof isLoggedIn); // boolean

        if(isLoggedIn){
            console.log("User is logged in");
            showDashBoard();
        }else{
            console.log("User is not logged in");
            loginPage();
        }
        
        // null :
        let customerAddress = null;
        console.log(typeof customerAddress); // object
    
        // undefined :
        let customerAge;
        console.log(typeof customerAge); // undefined

        let email;

        if(email === undefined){
            console.log("Email is not available");
            promptUserEmail();
        }

        // symbol
        // bigInt

// 2. Non-Primitive DT
    // These are further classified into :
        // array : is nothing but a collection of elements of any data type or same data type stored in a single variable.

        // Syntax : 
        // let variableArrayName = [string, number, boolean, object, array, null, undefined, symbol, bigInt];
        // let constArrayName = ["string","string","string","string","string", ]

        const categories = ["Electronics", "Fashion", "HomeAppliances"];

        categories.push("Mobiles", "Laptops", "Watches");

        console.log(categories);

        let searchSuggestionHistory = [];

        // Netflix : 

        let genres = ["Action", "Comedy", "Drama", "Horror", "Thriller"];
    
        let videoQuality = ["144p", "360p", "720p", "1080p", "4K"];

        console.log(videoQuality);
    
        // object :
        // is a collection of key-value pairs where key is a string and value can be any data type.
        // Syntax :
        // let variableObjectName = {
        //     "key1" : "value1",
        //     "key2" : "value2",
        //     "key3" : "value3"
        //     ...
        // }

        // Netflix : 
        let movie = {
            "title" : "Avengers",
            "genre" : "Action",
            "rating" : [],
            "releaseYear" : 2019
        }

        // AOB : 
        // AOB stands for Arrow oF Objects.
        // It is used to create objects in a more concise way.

        const users = [{
            "id" : 1,
            "name" : "John",
            "age" : 25
        }, 
        {
            "id" : 2,
            "name" : "Jane",
            "age" : 30
        }, 
        {
            "id" : 3,
            "name" : "Bob",
            "age" : 35,
            "skills" : [{}, {}, {}]
        }];


        console.log(users[2].skills[1]);

        // function