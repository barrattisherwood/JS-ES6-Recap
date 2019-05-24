// Undefined for variable
let name

if (name === undefined) {
    console.log('Please provide a name');
} else {
    console.log('name: ', name);
}

// Undefined for function arguments
let square = function(num) {
    console.log(num);
}

square();

// Undefined as function return default value

let result = square();
console.log('result: ', result);

// Null as assigned value
let age = 27

age = null

console.log('age: ', age);
