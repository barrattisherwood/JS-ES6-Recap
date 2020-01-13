const gameStringOutput = document.getElementById('puzzleString')
const generalOutput = document.getElementById('output')
const game1 = new HangMan('Boomer dude', 3)

gameStringOutput.innerHTML = game1.puzzle;
generalOutput.innerHTML = game1.statusMessage;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.haveAGuess(guess)
    gameStringOutput.innerHTML = game1.puzzle;
    generalOutput.innerHTML = game1.statusMessage;
})
