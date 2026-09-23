let products = ["Laptop", "Phone", "Tablet"]

let container = document.querySelector("#productList")

products.forEach(function(product){
    let list = document.createElement("li");
    list.innerText = product
    container.append(list)
})

container.addEventListener("click", function(event){
    console.log(event.target.innerText)
})