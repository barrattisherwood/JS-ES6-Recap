// Prototypal Inheritance

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}`
}

Person.prototype.setName = function(fullName) {
    const splitNameArray = fullName.split(' ');
    this.firstName = splitNameArray[0]
    this.lastName = splitNameArray[1]
}

const me = new Person('Andrew', 'Mead', 27)
me.setName('Alexis Turner')
console.log(me.getBio());

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio());