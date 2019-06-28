//enable functions from Letter.js
var Letter = require("./Letter.js");

//main function for Word.js

function Word(chosenWord) {
//object array to push chosen word into

this.chosenArray = [];
//run letters of chosen word through Letter constructor
for (var i=0; i < chosenWord.length; i++) {
    var letter = new Letter(chosenWord[i]);
    this.chosenArray.push(letter);
}



};