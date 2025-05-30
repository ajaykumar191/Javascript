let todoList = [];
renderTodolist();
function renderTodolist() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button" onclick="">Delete
            </button> 
            `
        todoListHTML += html;
    })

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
    document.querySelectorAll(".js-delete-todo-button").
        forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                todoList.splice(index, 1);
                renderTodolist();
            })
        })

        

}


document.querySelector('.js-add-todo-button').addEventListener("click", () => {
    addTodo();
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