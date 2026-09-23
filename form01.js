let form = document.querySelector("#loginForm")
let input = document.querySelector("#password")
let button = document.querySelector("button[type='submit']");
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let message = document.querySelector("#message")

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(username.value ==="" || password.value ===""){
        message.innerText = "Please fill all fields"
    }
    else {
        message.innerText = "Login Successful"
    }

})