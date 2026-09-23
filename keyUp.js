let input = document.querySelector("#search")

input.addEventListener("keyup", function(event) {
    console.log(event.key)

    if(event.key === "Escape") {
        console.log("Search Cleared")
    }
})