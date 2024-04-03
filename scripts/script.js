function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        var label = document.createElement("label");
        label.textContent = taskText;
        label.classList.add('task-label')

        var button = document.createElement("button");
        button.textContent = "x";
        button.classList.add('remove-button')
        button.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(button);

        taskList.appendChild(li);

        taskInput.value = "";
    }
}