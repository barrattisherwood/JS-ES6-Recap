const todos = ['walk the dog', 'pack firewood', 'drink a beer', 'go to sleep', 'rave hard asf']

todos.splice(2,1)
todos.push('last item')
todos.shift()

console.log(`Number of todos: ${todos.length}`);
console.log(todos);