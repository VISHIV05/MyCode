let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTask");

let taskList = document.querySelector("#taskList");
let taskCount = document.querySelector("#taskCount");

addBtn.addEventListener("click", function (event) {
  let task = input.value.trim();

  if (task === "") {
    return;
  }
  let li = document.createElement("li");
  li.innerText = task;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskCount.innerText = "Tasks : " + taskList.children.length;

  input.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
    taskCount.innerText = "Tasks : " + taskList.children.length;
  }

  
});
