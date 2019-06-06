let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge

// name, age, location

// An

let user = {
    name: 'Barratt',
    age: 29,
    location: 'Johannesburg'
}

console.log(`${user.name} is ${user.age} and lives in ${user.location}`);

user.age++;

console.log(`${user.name} is ${user.age} and lives in ${user.location}`);