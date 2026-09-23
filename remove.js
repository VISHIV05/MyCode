let container = document.querySelector("#container");

//Remove first item
// let item = document.querySelector(".item");
// item.remove()

//Remove last element
let items = document.querySelectorAll(".item")
// items[items.length-1].remove()


//Remove all elements
for(let i=0;i<items.length;i++){
    items[i].remove();
}


//remove : it removes the element from the DOM
//removeChild() : parent(container) removes its child(paragraph)

