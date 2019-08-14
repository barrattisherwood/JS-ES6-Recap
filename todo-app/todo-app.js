const todos = [
    {
        text: 'walk the dog',
        completed: true
    },
    {
        text: 'pack firewood',
        completed: true
    },
    {
        text: 'drink a beer',
        completed: false
    },
    {
        text: 'go to sleep',
        completed: false
    },
    {
        text: 'rave hard asf',
        completed: false
    }]

// You have 2 todos left in a p element
// Add a p for each todos above (use text per item)
const incompleteTodos = todos.filter(function(item) {
    return !item.completed
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(item){
    const newTodoParagraph = document.createElement('p');
    newTodoParagraph.textContent = item.text;
    document.querySelector('body').appendChild(newTodoParagraph);
});