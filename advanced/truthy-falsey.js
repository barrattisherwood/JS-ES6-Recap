const products = []
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefind, NaN

if (0/1) {
    console.log('Truthy');
} else {
    console.log('Falsey');
}