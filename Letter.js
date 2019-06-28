//TODO: Function for the individual letters.  Letter guessed boolean starts as False.  If user input equals the actual letter, boolean becomes true.

function Letter(letter) {
    this.letter = letter;
    this.guessState = false;

    this.toString = function () {
     //if guess state is false, return a "_" character.   
        if (!this.guessState) {
            return "_";
        }
        else {
            return this.letter;
        }
    //if user input equals the letter, guess state becomes true and the letter is returned.
        this.matchLetter = function (input) {
            if (input === this.letter) {
                this.guessState = true;
            }
        }
    }
    console.log(guessState);
};

//export to Word.js

module.exports = Letter;

Letter();