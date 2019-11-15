const HangMan = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.returnedWord = [];
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c', 'a'];
    this.outOfGuesses = false;
    this.found = false;
}

HangMan.prototype.getPuzzle = function() {
    this.setInitial();
    this.guessLetters();
    this.hasPlayerWon();
}

HangMan.prototype.setInitial = function() {
    this.word.forEach((letter) => {
        if (letter !== ' ') {
            this.returnedWord.push('*')
        } else {
            this.returnedWord.push(' ')
        }
    })
}

HangMan.prototype.guessLetters = function() {
    for (i = 0; i < this.guessedLetters.length; i++) {
        if (this.remainingGuesses > 0) {
            this.word.forEach((letter, index) => {
                if (letter === this.guessedLetters[i]) {
                    this.returnedWord[index] = letter
                }
            })
        } else {
            this.outOfGuesses = true;
            break
        }
        this.remainingGuesses--;
    }
}

HangMan.prototype.hasPlayerWon = function() {
    let isWinning = true;
    if (!this.outOfGuesses) {
        this.returnedWord.forEach((letter) => {
            if (letter === '*') {
                isWinning = false;
            }
        })
        if (isWinning) {
            console.log('Congratulations, you have won!');
        }
    } else {
        console.log('Sorry, you are out of guesses');
    }
    console.log('Returned Array: ', this.returnedWord);
    console.log('Returned Word: ', this.returnedWord.join(''));
}

const game1 = new HangMan('Cat', 3)
console.log(game1.getPuzzle());

const game2 = new HangMan('New Jersey', 7)
console.log(game2.getPuzzle());