// Form :


function loginForm(){
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const submitButton = document.getElementById('submit');



    if(emailInput.trim() === "" || passwordInput.trim() === ""){
        alert("Please fill in all fields.");
        return;
    }else{
        alert("Form submitted successfully!");
    }


    console.log(emailInput);
    console.log(passwordInput);
}


