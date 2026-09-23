let container = document.querySelector("#menu")

container.addEventListener("click", function(event) {
    console.log("You clicked: " + event.target.innerText)
})