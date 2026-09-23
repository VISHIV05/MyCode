let skill =["C++", "JavaScript"]
let container = document.querySelector("#container")

for(let i=0;i<skill.length;i++){
    let paragraph= document.createElement("p");
    if(i===0){
        paragraph.innerText = skill[0];
        container.prepend(paragraph);
    }
    else{
        paragraph.innerText = skill[1]
        container.append(paragraph)
    }

}

//append adds the element to the end of container
//while prepend adds the element to the start of the container
