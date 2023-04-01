let todoInput = document.getElementById("todo-input");
let todoListContainer = document.getElementById("todo-list");

function addToDo() {
  let todo = todoInput.value;
  if (todo == "") {
    alert("Please enter todo");
    return;
  }
  todoListContainer.innerHTML += `
    <li
    class="list-group-item d-flex align-items-center justify-content-between"
    >
        <p class="mb-0">${todo}</p>
        <button onclick="editToDo(event)" class="btn btn-secondary btn-sm">
        Edit
        </button>
  </li>
    `;
  todoInput.value = "";
}

function editToDo(event) {
  const element = event.target.parentElement.children[0];
  let newToDo = prompt("Edit todo: ", element.innerText);
  element.innerText = newToDo;
}
