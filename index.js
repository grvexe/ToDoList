let input = document.getElementById("taskInput");
let addButton = document.getElementById("addTask");
let list = document.getElementById("taskList");

addButton.addEventListener('click', () => {
    let newTask = document.createElement("p");
    newTask.innerText = input.value;
    list.appendChild(newTask);
    input.value = "";
    newTask.addEventListener('click', () => {
        newTask.style.textDecoration = 'line-through';
    })
    newTask.addEventListener('dblclick', () => {
        list.removeChild(newTask);
    })
})

