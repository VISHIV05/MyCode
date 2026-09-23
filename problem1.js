let input = document.querySelector("#studentName")

let button = document.querySelector("#addBtn")
let studentList = document.querySelector("#studentList")

button.addEventListener("click", function(event){
    let name = input.value.trim()
    if(name === ""){
        return
    }

    let li = document.createElement("li")
    li.innerText = name

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add("delete-btn")

    li.append(deleteBtn)

    studentList.append(li)

    input.value = ""


})

studentList.addEventListener("click", function(event) {

    if(event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove()
}

})