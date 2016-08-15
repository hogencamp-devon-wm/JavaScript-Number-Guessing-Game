// Ask user if they want to play the game
var game = confirm("Do you want to play the number guessing game?");

// If they want to play
while (game == true) {
    // Generate Random number
    var randomNumber = Math.random();

    // Make it number bettween 1 and 100
    randomNumber = randomNumber * 100;

    // Rounds the number to the nearest whole number
    randomNumber = Math.floor(randomNumber);

    // Ask the user what they think the number is
    var userGuess = prompt("Guess a number bettween 1-100");

    // Parse Int string answer into a number
    var userGuess = parseInt(userGuess);

    // Track number of guesses
    var guesses = 1;

    while (userGuess != randomNumber) {
        // Check to see if user guess is a number
        if (isNaN(userGuess)) {
            // If its not a number
            alert("Please enter a number")
        }

        else {
            // They put a number in
            if (1 < userGuess < 100) {
                // Correct Range

                if (userGuess < randomNumber) {
                    // If number is to low
                    userGuess = prompt("Your to low\n\nGuess a number bettween 1-100");

                    // Parse Int string answer into a number
                    var userGuess = parseInt(userGuess);

                    guesses++;
                }
                else if (userGuess > randomNumber) {
                    // If number is to high
                    userGuess = prompt("Your to high\n\nGuess a number bettween 1-100");

                    // Parse Int string answer into a number
                    var userGuess = parseInt(userGuess);

                    guesses++;
                }
                else if (userGuess == randomNumber) {
                    // If they got the number right
                    guesses++;
                    confirm("You got it right the number was " + randomNumber + " it took you " + guesses + " guesses. Do you want to play again?");

                }
            }

            else {
                // Wrong Range
                alert("Enter a number bettween 1-100");
            }
        }
    }
    if (userGuess ==  randomNumber) {
        game = confirm("You got it right the number was " + randomNumber + " it took you " + guesses + " guesses. Do you want to play again?");
    }
}

// If they dont want to play
if (game == false) {
    alert("K, bye :(");
}
