const todos = ['walk the dog', 'pack firewood', 'drink a beer', 'go to sleep', 'rave hard asf']

todos.splice(2,1)
todos.push('last item')
todos.shift()

console.log(`Number of todos: ${todos.length}`);
console.log(todos);

// TODO

// 1. The first item
// 2. The second item
// 3. The third item

todos.forEach(function(item, index){
    console.log(`${index + 1}. ${item}`);
});
console.log(`----------------------`);
for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`);
}
