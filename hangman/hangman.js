class HangMan {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing'
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Number of guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${game1.word.join('')}"`
        } else if (this.status === 'finished') {
            return `Great work! You guessed the word.`
        }    
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }        
    }
    get puzzle() {
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
    haveAGuess(guessedChar) {
        guessedChar = guessedChar.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guessedChar)
        const isBadGuess = !this.word.includes(guessedChar)
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
}