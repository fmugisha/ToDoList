window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");
    const validEl = document.getElementById("valid");
    const themeMo = document.getElementById("theme");

    themeMo.addEventListener('click', () => {
        document.body.classList.toggle("darkMode");
        if (document.body.classList.contains("darkMode")) {
            themeMo.src = "./light.png";
        } else {
            themeMo.src = "./dark.png"
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;

        if (!task) {
            validEl.innerHTML = "Please fill out the task before click Add Task button!";
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "Delete";

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = "";
        validEl.innerHTML = "";

        taskEditEl.addEventListener('click', () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerHTML = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskEditEl.innerHTML = "Edit";
            }
        });

        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        })
    })
})