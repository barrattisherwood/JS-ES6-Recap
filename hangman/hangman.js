const HangMan = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
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

HangMan.prototype.haveAGuess = function(guessedChar) {
    guessedChar = guessedChar.toLowerCase()
    isUnique = !this.guessedLetters.includes(guessedChar)
    isBadGuess = !this.word.includes(guessedChar)

    if (isUnique) {
        this.guessedLetters.push(guessedChar)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}