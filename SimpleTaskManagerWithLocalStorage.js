const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        saveTasksToLocalStorage();
    }
}

function saveTasksToLocalStorage() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    });
}

addTaskButton.addEventListener("click", addTask);
loadTasksFromLocalStorage();
