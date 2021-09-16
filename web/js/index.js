var inputEl = document.querySelector('input');
var buttonEl = document.getElementById("todo")
var buttonRemoveEl = document.getElementById("remove")
var ulEl = document.querySelector('ul');



var todos = [];



buttonRemoveEl.addEventListener('click',removeAllTodo);

buttonEl.addEventListener('click', addTodo);

inputEl.addEventListener("keyup", addTodoByEnter);

//inputEl

function addTodoByEnter() {

    inputEl.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            buttonEl.click();
        }
    });

}


function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {value: userInput , id: "ilId-" + userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', removeTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);
    inputEl.value = '';
    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
            todos.splice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);
}

function removeAllTodo() {
    var myList = document.getElementById('itemList');
    myList.innerHTML = '';

}