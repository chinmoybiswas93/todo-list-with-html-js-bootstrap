let todoList = [];

function addToDo() {
  let todoInput = document.getElementById("todo-input");
  let todoListContainer = document.getElementById("todo-list");

  if (todoInput.value === "") {
    alert("Please enter a todo.");
    return;
  }

  todoList.push(todoInput.value);
  todoInput.value = "";

  displayTodos();
}

function displayTodos() {
  let todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];

    let todoItem = `
        <li
        class="list-group-item d-flex align-items-center justify-content-between"
        >
            <p class="mb-0">${todo}</p>
            <button onclick="editToDo(${i})" class="btn btn-secondary btn-sm">
            Edit
            </button>
      </li>
        `;
    if (todoListContainer) {
      todoListContainer.innerHTML += todoItem;
    }
  }
}

function editToDo(index) {
  let newTodo = prompt("Enter new todo:", todoList[index]);

  if (newTodo === null) {
    return;
  }

  todoList[index] = newTodo;

  displayTodos();
}
