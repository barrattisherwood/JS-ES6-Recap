let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// Unix Epoch - January 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();
console.log('timestamp: ', timestamp);

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());


const dateOne = new Date('April 10 2015 01:00:00');
const dateTwo = new Date('April 10 2015 00:00:00');

const dateOneTimeStamp = dateOne.getTime();
const dateTwoTimeStamp = dateTwo.getTime();

if (dateOneTimeStamp < dateTwoTimeStamp) {
    firstDate = new Date(dateOneTimeStamp).toString();
} else if (dateOneTimeStamp > dateTwoTimeStamp) {
    firstDate = new Date(dateTwoTimeStamp).toString();
}
console.log('firstDate: ', firstDate);

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);