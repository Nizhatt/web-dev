const list = document.getElementById("taskList");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

function addTask(text){
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    checkbox.onchange = function () {
        span.classList.toggle("done");
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
}

addBtn.onclick = function () {
    const text = input.value; 

    if (text !== "") {
        addTask(text);  
        input.value = ""; 
    }
};