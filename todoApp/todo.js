class Todo {
    constructor(text) {
        this.text = text;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        const todoInput = document.getElementById("todoInput");
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const newTodo = new Todo(todoText);
            this.todos.push(newTodo);
        }
    }

    displayTodo() {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = ""; // Clear the existing todo list

        // Iterate over todos and create a new div element for each todo item
        this.todos.forEach((item, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.textContent = `${index + 1}. ${item.text}`; // Display index and todo text
            todoList.appendChild(todoItem);
        });
    }

    updateTodo() {
        // You can implement the updateTodo method here
    }

    deleteTodo() {
        // You can implement the deleteTodo method here
    }
}

const todoListApp = new TodoList();

document.getElementById('addTodoBtn').addEventListener('click', () => {
    todoListApp.addTodo();
    todoListApp.displayTodo(); // Call displayTodo after adding a new todo
});

todoListApp.displayTodo(); // Call displayTodo to initially display todos
