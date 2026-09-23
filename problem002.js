let studentName = document.querySelector("#studentName")
let adBtn = document.querySelector("#addBtn")
let count = document.querySelector("#count")
let studentList = document.querySelector("#studentList")

adBtn.addEventListener("click", function(){
    if(studentName.value.trim()==="") {
        return
    }
    let li = document.createElement("li")
    li.innerText = studentName.value.trim();
    studentList.append(li)

    count.innerText = studentList.children.length

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"

    deleteBtn.classList.add("delete-btn")

    li.append(deleteBtn)

    
    studentName.value =""
})

studentList.addEventListener("click", function(event){

    if(event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove()
    count.innerText = studentList.children.length
    }
    
})