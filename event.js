let input = document.querySelector("#name")
let output = document.querySelector("#output")
let submit = document.querySelector("#btn")
submit.addEventListener("click", function(){
    if(input.value ===""){
        output.innerText ="Please enter your name";
    }
    else{
        output.innerText= "Hello "+input.value;
    }
});