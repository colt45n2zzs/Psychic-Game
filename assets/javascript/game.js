var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 


        document.onkeyup = function(event) {
        userGuess.textContent = event.key;
        computerGuess.textContent = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        var userGuess = event.key;
        var winTotal = winGame.textContent;
        var loseTotal = loseGame.textContent;
        var guessRemainTotal = guessRemain.textContent;
        var guessMade = guessMade.textContent;
        var guessMadeArr = []; 

        if (userGuess != computerGuess.textContent) {
            guessRemainTotal--;
            guessRemain.innerHTML = guessRemainTotal;





        }









        

        }