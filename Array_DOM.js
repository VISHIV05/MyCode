let students = ["Rahul", "Aman", "Priya", "Neha"]

let list = document.querySelector("#studentList")

students.forEach(function(student) {
    let li = document.createElement("li")

    li.innerText = student

    list.append(li)
})