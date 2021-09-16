window.onload = function () {
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    methods: {
        addTodoByEnter: function () {

        },
        addTodo: function() {
            if (this.userInput.trim() == '') {
                return;
            }
            var newTodo = {
                id: "abc"+this.userInput,
                value: this.userInput
            };
            this.todos.push(newTodo);
            this.userInput = ''
            console.log(this.todos);
        },
        removeElement: function () {
                    this.todos.splice(0, this.todos.length);
        },
        removeTodo: function(todo) {
            var id = todo.id;
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id == id) {
                    this.todos.splice(i, 1);
                    break;
                }
            }
         }
        }

})
};