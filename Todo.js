document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#addtodo');
    const input = document.querySelector('#addingtodo');
    const todolist = document.querySelector('#todolist')

todolist.addEventListener('click', function(evt){
const targetTagToLowerCase = evt.target.tagName.toLowerCase();
 if(evt.target.tagName === 'BUTTON'){
    evt.target.parentElement.remove();
 } else if(targetTagToLowerCase === "li"){
    evt.target.style.textDecoration = "line-through";
 }
})

form.addEventListener('submit',function(e){
    e.preventDefault();

    const newTodo = document.createElement('li');
    const rmvBtn = document.createElement('button');

    rmvBtn.innerText = "Remove";
    newTodo.innerText = input.value;

    newTodo.appendChild(rmvBtn);
    todolist.appendChild(newTodo);

    form.reset();
    })
})