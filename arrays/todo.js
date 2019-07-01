const todos = [
    {
        text: 'walk the dog',
        completed: true
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
        completed: false
    }]
    
// console.log('todos: ', todos);

// let deleteTodo = function (todos, todoTitleToBeDeleted) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoTitleToBeDeleted.toLowerCase()
//     });
//     if (index !== -1) {
//         todos.splice(index, 1);
//     }    
// }

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b){
        if (!a.completed && b.completed) {
            return -1;
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    });
}

sortTodos(todos)
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'go to sleep');
// console.log('todos', todos);