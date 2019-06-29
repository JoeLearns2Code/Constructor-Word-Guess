//enable functions from Letter.js
var Letter = require("./Letter.js");

//main function for Word.js

function Word(chosenWord) {
    //object array to push chosen word into

    this.wordArray = [];
    //run letters of chosen word through Letter constructor and push into array
    for (var i = 0; i < chosenWord.length; i++) {
        var letter = new Letter(chosenWord[i]);
        this.wordArray.push(letter);
    }

    //display this data in the console
    this.guessedLet = function () {
        guessedLetter = "";
        for (var i = 0; i < this.wordArray.length; i++) {
            guessedLetter += this.wordArray[i] + " ";
        }
        console.log(guessedLetter + "\n=========================\n");
    };
    //run letters through matchLetter function to determine value of each letter
    this.userGuess = function (input) {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].matchLetter(input);
        }
    }
    //Test this page by running the functions below:
    // guessedLet();
    // console.log(wordArray);
};

//export

module.exports = Word;

//test function
// Word();