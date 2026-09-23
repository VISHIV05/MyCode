let search = document.querySelector("#search")
let studentList = document.querySelector("#studentList")
let students = document.querySelectorAll("#studentList li")

search.addEventListener("input", function(event) {

    let query = search.value.toLowerCase().trim()

    students.forEach(function(student) {

        if(student.innerText.toLowerCase().includes(query)) {
            student.style.display = "list-item"
        }
        else {
            student.style.display = "none"
        }

    })
})

studentList.addEventListener("click", function(event) {

    if(event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove()
    }

})