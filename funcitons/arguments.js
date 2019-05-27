// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log('result: ', result);

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 10);
console.log('scoreText: ', scoreText);

// Challenge Area
// total, tipPercentage
let getTip = function(total, tipPercentage = 0.1) {
    console.log(`A ${tipPercentage * 100}% tip on $${total} would be $${total * tipPercentage}`);
    return total * tipPercentage;
}

getTip(60)