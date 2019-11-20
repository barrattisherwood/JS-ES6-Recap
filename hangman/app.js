const gameStringOutput = document.getElementById('puzzleString')
const generalOutput = document.getElementById('output')
const game1 = new HangMan('Boomer', 3)

game1.getPuzzle();

renderOutput = function(guessedLetters, remainingGuesses) {
    gameStringOutput.innerHTML = `Hangman word: ${guessedLetters}`
    generalOutput.innerHTML = game1.getStatusMessage();
}

renderOutput(game1.getPuzzle(), game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.haveAGuess(guess)
    renderOutput(game1.getPuzzle(), game1.remainingGuesses)
})
