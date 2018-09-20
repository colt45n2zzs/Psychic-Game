
/* Global Variabls and Counters */
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesRemain = 9;
var guesses = [];
var computerGuesses = [];
guessesRemainGame.textContent = guessesRemain;
winsGame.textContent = wins;
lossesGame.textContent = losses;

/* Onload Computer Function */
document.onload = function() {
    var compGuess = choices[Math.floor(Math.random() * choices.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
}

/* User Keyboard Input and If Else Logic */
document.onkeyup = function(event) {
    var playerGuess = event.key;
    guessesGame.textContent = playerGuess;
    guesses.push(playerGuess);

    if (playerGuess == computerGuesses[0] && guessesRemain > 0) {
        wins++;
        winsGame.textContent = wins;
        guessesRemain = 9;
        guessesRemainGame.textContent = guessesRemain;
        guesses.length = 0;
        guessesGame.textContent = "";
        computerGuesses.length = 0;
        var compGuess = choices[Math.floor(Math.random() * choices.length)];
        computerGuesses.push(compGuess);
        console.log(computerGuesses[0]);   
    }

    else if (playerGuess != computerGuesses[0] && guessesRemain > 0) {
        guessesRemain = guessesRemain - 1;
        guessesRemainGame.textContent = guessesRemain;
        guessesGame.textContent = guesses.join("  ");   
        for (var i = choices.length - 1; i >= 0; i--) {
            choices[i].seconds--;
            if (choices[i].seconds < 0 && choices[i].seconds == guesses[0]) { 
                choices.splice(i, 1);
            }
        }
    }

    else {
        losses++;
        lossesGame.textContent = losses;
        guessesRemain = 9;
        guessesRemainGame.textContent = guessesRemain;
        guesses.length = 0;
        guessesGame.textContent = "";
        computerGuesses.length = 0;
        var compGuess = choices[Math.floor(Math.random() * choices.length)];
        computerGuesses.push(compGuess);
        console.log(computerGuesses[0]);
        }
};