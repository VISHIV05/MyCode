let buttons = document.querySelectorAll(".btn");
let output  = document.querySelector("#output")

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(event){
        output.innerText = "You selected " + event.target.innerText;
    })
}