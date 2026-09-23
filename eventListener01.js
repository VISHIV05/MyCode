let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")

let count = document.querySelector("#count")

let cnt=0;

increase.addEventListener("click", function(){
    cnt = cnt+1;
    count.innerText = cnt;
});

decrease.addEventListener("click", function(){
    cnt = cnt-1;
    count.innerText = cnt
});

reset.addEventListener("click", function(){
    cnt = 0;
    count.innerText = cnt;
});