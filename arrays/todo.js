const todos = [
    {
        text: 'walk the dog',
        completed: false
    },
    {
        text: 'pack firewood',
        completed: false
    },
    {
        text: 'drink a beer',
        completed: true
    },
    {
        text: 'go to sleep',
        completed: false
    },
    {
        text: 'rave hard asf',
        completed: true
    }]
    
console.log('todos: ', todos);

let deleteTodo = function (todos, todoTitleToBeDeleted) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoTitleToBeDeleted.toLowerCase()
    });
    if (index !== -1) {
        todos.splice(index, 1);
    }    
}

deleteTodo(todos, 'go to sleep');
console.log('todos', todos);