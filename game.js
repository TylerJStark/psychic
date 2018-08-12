var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var win = 0;
var lose = 0;
var guessesLeft = 9;
var allGuesses = [];

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    var guessLeft = document.getElementById("guessLeft");
    guessLeft.textContent = guessesLeft;

    if (options.indexOf(userGuess) > -1) {

        if (userGuess == computerGuess) {
            //Adds 1 to wins
            win++;
            //Resets guess array and guesses left
            guessesLeft = 9;
            allGuesses = [];
            //Updates win html element
            var wins = document.getElementById("win");
            wins.textContent = win;

        } else {
            //Subtracts 1 from guesses left
            guessesLeft --;
            //Adds the wrong guess to the allGuesses array
            allGuesses.push(userGuess);
            var allGuess = document.getElementById("allGuess");
            allGuess.textContent = allGuesses
            
        }

        if (guessesLeft == 0) {
            //Resets number of Guesses
            guessesLeft = 9;
            //Add 1 to losses and update the html element for losses
            lose ++;
            var loss = document.getElementById("loss");
            loss.textContent = lose;
            //Reset guess array
            allGuesses = [];
        }
    }
}