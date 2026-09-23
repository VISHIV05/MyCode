let input = document.querySelector("#name")
let output = document.querySelector("#output")

let buttons = document.querySelectorAll(".greet")

for(let i = 0; i< buttons.length;i++){
    buttons[i].addEventListener("click", function(event){
        if(input.value === ""){
            output.innerText = "Please Enter Your Name"
        }
        else{
            output.innerText = event.target.innerText +" " + input.value;
        }
    })
}
