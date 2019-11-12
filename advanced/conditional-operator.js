// const myAge = 27;
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';
// console.log(message)

// const myAge = 32;
// const showPage = () => {
//     return 'Showing the page';
// }
// const showErrorPage = () => {
//     return 'Showing the error page';
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'test', 'test', 'test'];

//1. Print "Team size: 3" if less than or equal to 4
//2. Print "Too many people on your team" otherwise

const printTeamSize = () => {
    return `Team size: ${team.length}`;
}

const printTooManyPeople = () => {
    return 'Too many people on your team';
}

const message = team.length <= 4 ? printTeamSize() : printTooManyPeople()
console.log(message);


