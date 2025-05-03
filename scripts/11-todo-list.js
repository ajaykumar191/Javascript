let todoList = [];
renderTodolist();
function renderTodolist() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button class="delete-todo-button" onclick="todoList.splice(${i},1);
                    renderTodolist();">Delete
            </button> 
            `
        todoListHTML += html;
    }
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

document.querySelector(".js-add-todo-button").addEventListener("click",()=>{
    
})

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const dateInputElement = document.querySelector(".js-due-date-input");
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({ name: name, dueDate: dueDate });
    inputElement.value = ''
    dateInputElement.value = ''
    console.log(todoList);
    renderTodolist();
} 