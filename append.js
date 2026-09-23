let container = document.querySelector("#container")
let heading = document.createElement("h2")
heading.innerText = "Accenture Preparation"

container.append(heading);

let subject = ["JavaScript", "DOM"]

for(let i=0;i< subject.length;i++){
    let paragraph = document.createElement("p")
    paragraph.innerText = subject[i]
    container.append(paragraph)
}