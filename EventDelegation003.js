let container = document.querySelector("#container")

let button = document.createElement("button")
button.innerText = "Delete"

container.append(button)

container.addEventListener("click", function(event) {
    if(event.target.tagName === "BUTTON") {
        console.log("Delete Button clicked")
    }
})