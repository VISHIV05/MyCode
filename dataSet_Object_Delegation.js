let students = [
    {name: "Rahul", age: 21},
    {name: "Aman", age: 22},
    {name: "Priya", age: 20}
]

let container = document.querySelector("#studentList")

students.forEach(function(student) {
    let li = document.createElement("li")
    li.dataset.name = student.name
    li.innerText = student.name + " - " + student.age

    container.append(li)
})

container.addEventListener("click", function(event) {
   if (event.target.tagName === "LI") {
        console.log(event.target.dataset.name)
    }
})