let subjects = ["HTML", "CSS", "JavaScript"];
let container = document.querySelector("#container");

for(let i=0;i<subjects.length;i++){
    let paragraph = document.createElement("p")
    paragraph.innerText = subjects[i];
    container.appendChild(paragraph)
}
let paragraph = document.createElement("p")
paragraph.innerText = "DOM"
container.appendChild(paragraph)