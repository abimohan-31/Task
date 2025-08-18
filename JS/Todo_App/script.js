// function addList() {
//             let todoInput = document.getElementById("todoInput").value;
//             let allTasks = document.getElementById("allTasks")
//             let list = new Array();

//             list.push(todoInput.value);
//             allTasks.innerText += `<input type="checkbox"` + '<li id="listName">' + todoInput.value + '</li>' + `<br>` + `<hr>`;
//             todoInput.value = "";
//         }
//         function allList() {
//             let text = "No tasks yet! Add your first task above!;"
//              document.getElementById("allTasks").innerText = text ;
            
//         }
//         function activeList(){
//             let text = "No tasks yet! Add your first task above!;"
//              document.getElementById("allTasks").innerText = text ;
            
//         }
//          function completedList(){
//             let text = "No completed tasks yet!"
//              document.getElementById("allTasks").innerText = text ;
            
//         }


const todoForm = document.getElementById("todo-form")
const todoList = document.querySelector("todos");
const todoInput = document.getElementById("todoInput");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


if (localStorage.getItem('tasks')){
    tasks.map((task) => {
        createTask(task)
    })
}
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mainInput = todoInput.value;

    if (mainInput === ""){
        return;
    }

    const task = {
        id: new Date().getTime(),
        name: mainInput,
        isCompleted: false
    }
    // console.log(task);
    tasks.push(task)
    localStorage.setItem('tasks'.JSON.stringly(tasks));

    createTask(task)
    todoForm.reset();
    mainInput.focus();
    
})

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-task')){
        const taskId = e.target.closest('li').id;
    }
    removeTask(taskId);
})

function createTask(task){
    const taskEl = document.createElement('li');
    taskEl.setAttribute('id', task.id);

    if (task.isCompleted){
        taskEl.classList.add('complete');
    }

    const taskElMarkup = `
    <div>
        <input type="checkbox" name="tasks" id="${task.id} ${task.isCompleted ? 'checked' : ""} ">
         <span>${task.name}</span>
        <button id="remove-task" ${task.name}>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
             <path
                 d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z" />
            </svg> 
        </button>
    </div>
    `

    taskEl.innerHTML = taskElMarkup;
    todoList.appendChild(taskEl);
    countTask()

}

function countTask(){
    const completeTaskArray.
}

