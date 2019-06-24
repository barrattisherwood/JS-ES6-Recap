const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

console.log('a' < 'A');

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

// const findNote = function(notes, noteTitle) {
//     return notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const findNotes = function(notes, searchTerm) {
    return notes.filter(function(note) {
        const isTitleMatch = note.title.toLowerCase().includes(searchTerm.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(searchTerm.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}

// console.log(findNotes(notes, 'work'));
// const note = findNote(notes, 'Office modification');
// console.log('note: ', note);

sortNotes(notes);
console.log(notes);