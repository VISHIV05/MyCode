let list = document.querySelector("#list")

list.addEventListener("click", function(event) {
    console.log(event.target.innerText)
})