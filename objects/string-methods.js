let name = '    Andrew Mead      ';


let upperCaseName = name.toUpperCase();
console.log(upperCaseName);

let lowerCaseName = name.toLowerCase();
console.log(lowerCaseName);

// Includes method
let password = 'abc123password098';
password.includes('password');
console.log('password.includes(\'password\'): ', password.includes('password'));

// Trim
console.log(name.trim());

// Challende area

// isValidPassword
let isValidPassword = function (string) {
    return string.length > 8 && !string.includes('password')
}
// length is more than 8 & it doesn't contain word password

console.log(isValidPassword('ffffffffd'));
console.log(isValidPassword('abc123#%$^'));
console.log(isValidPassword('errweradasdasdpasswordsdfsdf'));