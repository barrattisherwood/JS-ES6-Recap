let num = 103.941;

console.log(num.toFixed(12));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

// Challenge area
// 1 - 5 - true if correct - false if incorrect

let makeGuess = function(guess) {
    let min = 1;
    let max = 5;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return guess === randomNumber
}

console.log(makeGuess(1));