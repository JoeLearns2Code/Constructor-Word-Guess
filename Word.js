//enable functions from Letter.js
var Letter = require("./Letter.js");

//main function for Word.js

function Word(chosenWord) {
    //object array to push chosen word into

    this.chosenArray = [];
    //run letters of chosen word through Letter constructor and push into array
    for (var i = 0; i < chosenWord.length; i++) {
        var letter = new Letter(chosenWord[i]);
        this.chosenArray.push(letter);
    }

    //display this data in the terminal
    this.guessedLet = function () {
        guessedLetter = "";
        for (var i = 0; i < this.chosenArray.length; i++) {
            guessedLetter += this.chosenArray[i] + " ";
        }
        console.log(guessedLetter + "\n=========================\n");
    };
    //run letters through matchLetter function to determine value of each letter
    this.userGuess = function (input) {
        for (var i = 0; i < this.chosenArray.length; i++) {
            this.chosenArray[i].matchLetter(input);
        }
    }
    console.log(chosenArray);
};

//export

module.exports = Word;

Word("cat");