let heading = document.createElement("h2");
let container = document.querySelector("#container")
heading.innerText = "My Skills"

container.append(heading)

let skills = ["C++", "Python", "SQL", "JavaScript", "Power BI"];

for (let i=0;i<skills.length;i++){
    let paragraph = document.createElement("p")
    paragraph.innerText = skills[i];
    container.append(paragraph)
}

let button = document.createElement("button")
button.innerText = "[Clear Skills]"
container.append(button)
