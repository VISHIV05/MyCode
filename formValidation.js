let registrationForm = document.querySelector("#form")
let username = document.querySelector("#username")
let age = document.querySelector("#age")
let message = document.querySelector("#message")
let email = document.querySelector("#email")
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault()

    if(username.value.trim() === "") {
        message.innerText = "Username is required"
        return
    }

    if(age.value.trim() === "") {
        message.innerText = "Age is required"
        return
    }

    let ageValue = Number(age.value)

    if(ageValue < 18) {
        message.innerText = "Age should be equal to or above 18"
        return
    }
    
    if(!email.value.trim.includes("@")){
        message.innerText = "Email should include '@' "
        return
    }

    message.innerText = "Registration successful"
})