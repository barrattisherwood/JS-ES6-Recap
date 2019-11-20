const HangMan = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing'
}

HangMan.prototype.getStatusMessage = function() {
    if (this.status === 'playing') {
        return `Number of guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${game1.word.join('')}"`
    } else if (this.status === 'finished') {
        return `Great work! You guessed the word.`
    }    
}

HangMan.prototype.calculateStatus = function() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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
    if (this.status !== 'playing') {
        return
    }
    if (isUnique) {
        this.guessedLetters.push(guessedChar)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.calculateStatus()
}