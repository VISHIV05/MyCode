let form = document.querySelector("#registerForm")
let email = document.querySelector("#email")
let Name = document.querySelector("#name")

let button = document.querySelector("button[type = 'submit']")
let message = document.querySelector("#result")

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    if(Name.value.trim() === "" && email.value===""){
        message.innerText ="Please fill all fields"
    }

    else if(Name.value===""){
        message.innerText = "Please enter your name"
    }
    else if(email.value===""){
        message.innerText = "Please enter your email"
    }
    
    else {
        message.innerText = "Welcome " + Name.value + " , registration successful"
    }
})