const HangMan = function(word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
}

const game1 = new HangMan('cat', 2)
console.log('game1: ', game1);
const game2 = new HangMan('difficult', 4)
console.log('game2: ', game2);