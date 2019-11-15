const HangMan = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c', 'a'];
}

HangMan.prototype.getPuzzle = function() {
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new HangMan('Cat', 3)
console.log(game1.getPuzzle());

const game2 = new HangMan('New Jersey', 7)
console.log(game2.getPuzzle());