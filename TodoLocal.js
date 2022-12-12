const todoForm = document.getElementById("TodoForm");
const todoList = document.getElementById("todoList");

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < storedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = storedTodos[i].task;
  newTodo.isCompleted = storedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  const newTodo = document.createElement("li");
  const taskValue = document.getElementById("task").value;
  
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newTodo);

  storedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(storedTodos));
});

document.querySelector('#clear').onclick = function(){
    localStorage.clear();
    window.location.reload()
}

todoList.addEventListener("click", function(evt) {
  let clickedListItem = evt.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  for (let i = 0; i < storedTodos.length; i++) {
    if (storedTodos[i].task === clickedListItem.innerText) {
      storedTodos[i].isCompleted = !storedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(storedTodos));
    }
  }
});
