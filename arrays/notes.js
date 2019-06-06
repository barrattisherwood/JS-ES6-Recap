const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log('removed: ', notes.pop());
// notes.push('My new note')

// console.log('shifted', notes.shift());
// console.log('shifted', notes.unshift('Very first note'));

// console.log('Second item: ', notes.splice(1, 1, 'This is the new second item'))

notes[2] = 'This is the new note 3'

notes.forEach(function(item, index) {
    console.log('index', index);
    console.log('note', item);
})

console.log('notes: ', notes.length);
console.log('notes[last]: ', notes);

// Counting... 1
for (let i = 2; i >= 0; i--) {
    console.log(`Counting... ${i}`)
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);
}