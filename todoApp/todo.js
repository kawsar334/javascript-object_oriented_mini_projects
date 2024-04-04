
class Todo {
    constructor(text) {
        this.text = text;
    }

}

class TodoList {
    constructor() {
        this.todos = [];
    }
    add() {
        const todoInput = document.getElementById("todoInput");
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const newTodo = new Todo(todoText);
            this.todos.push(newTodo);
        }
    }
    display() {
        const lists = document.getElementById('todoList');
        lists.innerHTML = "";
        this.todos.forEach((item, index) => {
            const todoItem = document.createElement("div");
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `<div class="todos"><span class="text" ><b>${index + 1}.</b>${item.text}</span><div class="btncontainer"><span class="edit" onclick="newItem.edit(${index})">Edit</span><span class="del" onclick="newItem.remove(${index})">delete</span></div></div>`;
            lists.appendChild(todoItem);

        })
    }
    edit(index){
        const newText = prompt("Enter new text todo", this.todos[index].text);
        if(newText !== null && newText.trim() !==""){
            this.todos[index].text = newText.trim();
            this.display();

        }

    }
    remove(index){
        if(confirm("are you sure want to delete this todo?")){
            this.todos.splice(index, 1)
            this.display();
        }


    }
}


const addTodoBtn = document.getElementById("addTodoBtn");
const newItem = new TodoList();
addTodoBtn.addEventListener("click", () => {
    newItem.add();
    newItem.display();

})
