document.addEventListener("DOMContentLoaded", () => {
const todoForm = document.querySelector("form")
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementById("todo-list");

let allTodos = getTodos();

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo() {
    const todoText = todoInput.value.trim();

    if(todoText.length > 0){
        allTodos.push({text: todoText, completed: false});
        saveTodos();
        updateTodoList();
        todoInput.value = "";
    }
}

function updateTodoList() {
    todoListUl.innerHTML ="";
    allTodos.forEach((todo, todoIndex) => {
       const  todoItem = createTodoItem(todo, todoIndex);
        todoListUl.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex){
    const todoId = new Date().getTime();
    const todoLi = document.createElement("li");
    todoLi.className = "todo";
    todoLi.innerText = todo; 

    todoLi.innerHTML = `
    <input type="checkbox" id="${todoId}">
                <label for="${todoId}" class="todo-text">
                    ${todo.text}                
                </label>
                <button class="delete-Btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor"
                        class="bi bi-trash" viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                </button>  
                <hr> 
    `
    
    const deleteBtn = todoLi.querySelector(".delete-Btn");
    deleteBtn.addEventListener("click", () => {
        deleteTodoItem(todoIndex)
    })

    const checkbox = todoLi.querySelector("input");
    checkbox.addEventListener("change", () => {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })
    checkbox.checked = todo.completed;
    return todoLi;
}

function deleteTodoItem(todoIndex) {
    allTodos.splice(todoIndex, 1);
    saveTodos();
    updateTodoList();
}

function saveTodos(){
    const todosJSON = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJSON);
}

function getTodos() {
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}

function allBtn(){
    updateTodoList();
}

function activeBtn(){
    todoListUl.innerHTML ="";
    allTodos.forEach((todo, todoIndex) => {
        if (!todo.completed){
            todoListUl.append(createTodoItem(todo, todoIndex));
        }
    });
}

function completedBtn(){
     todoListUl.innerHTML ="";
    allTodos.forEach((todo, todoIndex) => {
        if (todo.completed){
            todoListUl.append(createTodoItem(todo, todoIndex));
        }
    });    
}
});

