
var inputEl = $('input');
var buttonEl = $('#todo');
var buttonRemoveEl = $("#remove");
var ulEl = $('ul');

var todos = [];

buttonRemoveEl.click(removeAllTodo);
buttonEl.click(addTodo);
inputEl.keyup(addTodoByEnter);


function addTodoByEnter() {
    inputEl.keypress(function (e) {
        var key = e.which;
        if(key == 13)
        {
            buttonEl.click();
        }
    });

}


function addTodo() {
    var userInput = inputEl.val();
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {value: userInput , id: "ilId-" + userInput};
    todos.push(newTodo);
    $('<li>'  + userInput  + '</li>').appendTo(ulEl).attr('dataset-id' ,newTodo.id).click(removeTodo);
    inputEl.val('');
}

function removeTodo(event) {
    var clickedLi = $(this);
    var itemId = clickedLi.attr('dataset-id');
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
            todos.splice(i, 1);
            break;
        }
    }
    clickedLi.remove();
}

function removeAllTodo() {
    var myList = document.getElementById('itemList');
    myList.innerHTML = '';

}