let link = document.querySelector("#link");

link.setAttribute("href", "https://google.com");

link.setAttribute("target", "_self");
let button = document.createElement("button")

button.innerText = "Visit Google"

button.setAttribute("id", "btn")
button.setAttribute("type", "button")

document.body.append(button)