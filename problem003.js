let search = document.querySelector("#search")
let studentList = document.querySelectorAll("#studentList li")

search.addEventListener("input", function(){
    let query = search.value.toLowerCase()

    studentList.forEach(function(student){
        let query = search.value.toLowerCase().trim()
        
        if(student.innerText.toLowerCase().includes(query)){
            student.style.display ="list-item"
        }
        else {
            student.style.display = "none";
        }
    })
})

