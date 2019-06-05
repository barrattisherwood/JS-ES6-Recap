let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook).summary;
let otherBookSummary = getSummary(myBook).pageCountSummary;
console.log('bookSummary: ', bookSummary);
console.log('otherBookSummary: ', otherBookSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

let getTemps = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit - 32) * 5/9 + 273.15
    }
}

console.log(getTemps(74));
