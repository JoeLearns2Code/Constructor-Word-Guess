//Function for the individual letters.  Letter guessed boolean starts as False.  If user input equals the actual letter, boolean becomes true.

function Letter(letter) {
    this.letter = letter;
    this.guessState = false;

    this.toString = function () {
        //if letter entered is a match, switch guess state to true and return the letter as a string
        if (this.letter === " ") {
            this.guessState = true;
            return " ";
        } else {
            //if guess state is false, return a "_" character. 
            if (this.guessState === false) {
                return "_";
            }
            else {
                return this.letter;
            }
        }
    }
    //if user input equals the letter, guess state becomes true and the letter is returned.
    this.matchLetter = function (input) {
        if (input === this.letter) {
            this.guessState = true;
        }
    }
    // console.log("this loaded");
};

//export

module.exports = Letter;

//Test this file:
// Letter();