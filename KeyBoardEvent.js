let input = document.querySelector("#username")

input.addEventListener("keydown", function(event) {
    console.log(event.key)

    if(event.key === "Enter") {
        console.log("Form submitted")
    }
})