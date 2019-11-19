const gameStringOutput = document.getElementById('puzzleString')
const remainingGuessesOutput = document.getElementById('remainingGuesses')
const game1 = new HangMan('Boomer', 3)

game1.getPuzzle();

renderOutput = function(guessedLetters, remainingGuesses) {
    gameStringOutput.innerHTML = `Hangman word: ${guessedLetters}`
    remainingGuessesOutput.innerHTML = `Number of guesses left: ${remainingGuesses}`
}

renderOutput(game1.getPuzzle(), game1.remainingGuesses)
console.log('Game status: ', game1.status);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.haveAGuess(guess)
    renderOutput(game1.getPuzzle(), game1.remainingGuesses)
    console.log('Game status: ', game1.status);
})
