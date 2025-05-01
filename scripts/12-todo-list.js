let todoList = [];
//C:\Users\ajay3\OneDrive\Desktop\JavaScript\scripts\11-todo-list.js
renderTodolist();
function renderTodolist() {
    let todoListHTML = '';
//C:\Users\ajay3\OneDrive\Desktop\JavaScript\12-Advanced-Functions
    todoList.forEach(function (todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button class="delete-todo-button" onclick="todoList.splice(${index},1);
                    renderTodolist();">Delete
            </button> 
            `
        todoListHTML += html;
    })

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}



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