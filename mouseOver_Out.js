let box = document.querySelector("#box")

box.addEventListener("mouseover", function(event){
    box.innerText ="Mouse Entered"
})
box.addEventListener("mouseout", function(event){
    box.innerText = "Mouse Left"
})