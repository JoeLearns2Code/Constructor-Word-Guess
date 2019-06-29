//enable functions from Word.js
var Word = require("./Word.js");

//enable inquirer package:
var inquirer = require("inquirer");


//variable of characters that will be accepted in function

var alphaArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//array of possible words used in word game

var loreCharacters = ["Thrall", "Jaina Proudmore", "Arthas", "Baine Bloodhoof", "Cairne Bloodhoof", "Genn Greymane", "Sylvanas Windrunner", "Kaelthas Sunstrider", "Illidan Stormrage", "Tyrande Whisperwind", "Malfurion Stormrage", "Medihv", "Orgrim Doomhammer", "Anduin Lothar", "Alleria Windrunner", "Khadgar", "Turalyon", "Magni Bronzebeard", "Muradin Bronzebeard", "Falstad Wildhammer", "Ragnaros", "Onyxia", "Deathwing", "Archimonde", "Sargeras"];

//variable for guesses remaining

var guessCount = 10;

//select random word from loreCharacters array by generating a random index number:
var randomNum = Math.floor(Math.random() * loreCharacters.length);
var chosenWord = loreCharacters[randomNum];

//run this word through Word constructor
var gameWord = new Word(chosenWord);
//boolean for if a new word needs to be selected
var selectNewWord = false;
//array for guessed letters:
var guessedLetterArray = [];


//main function for game

function wordGuess() {
    //Generate a new word if selectNewWord = true
    if (selectNewWord) {
        var randomNum = Math.floor(Math.random() * loreCharacters.length);
        var chosenWord = loreCharacters[randomNum];

        gameWord = new Word(chosenWord);
        selectNewWord = false;
    }
    //add an array for the completed word
    var completedWord = [];

    //run pushState function on each letter of wordArray
    gameWord.wordArray.forEach(pushState);

    //if completeWord array includes any false letters, run inquirer to prompt next guess
    if (completedWord.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter from A to Z",
                name: "inputLetter"

            }
        ]).then(function (input) {
            //if characters not found in alphaArray variable are what user typed
            if (!alphaArray.includes(input.inputLetter) || input.inputLetter.length > 1) {
                console.log("\nAch!  Stick t' usin' single letters will ya?\n");
                wordGuess();
            } else {
                //if user has already guessed the letter
                if (guessedLetterArray.includes(input.inputLetter)) {
                    console.log("\nAlready guessed dat mon.\n");
                    wordGuess();
                } else {
                    //use an empty array to compare with completedWord array
                    var wordCheckArray = [];
                    console.log(wordCheckArray);
                    //run userGuess function on chosenWord with user's input as the variable
                    gameWord.userGuess(input.inputLetter);
                    //wordCheck pushes the guessState of input into the wordCheckArray
                    gameWord.wordArray.forEach(wordCheck);

                    //check if guess is correct or not
                    //if letter is not in the completed word, it should give a message, deduct a guess from the count.  It will have a false state if it's incorrect, equal to the state of at least one remaining character in completedWord.
                    if (wordCheckArray.join("") === completedWord.join("")) {
                        console.log("\nINCORRECT!\n")
                        guessCount--;
                        guessedLetterArray.push(input.inputLetter);
                        console.log(guessCount + " guesses remain!")
                    } else {
                        console.log("\nCORRECT!\n");
                        guessedLetterArray.push(input.inputLetter);
                    }


                    function wordCheck(input) {
                     wordCheckArray.push(input.guessState);
                    }

                    //log information in console:
                    gameWord.guessedLet();
                    console.log("Letters Guessed: " + guessedLetterArray);

                    //guess count dependent functions
                    if (guessCount > 0) {
                      wordGuess();
                    } else {
                      console.log("\nYou have lost.\n");
                      playAgain();  
                    }  
                }
            }

        })
    } else {
        //if no remaining characters in completedWord array have a false state, victory
        console.log("\nLok'tar Ogar!  Victory!\n");
        playAgain();
    };
    //function to push Letter guessed state into completedWord array
    function pushState(input) {
        completedWord.push(input.guessState);
    };
};

//function to use inquirer and ask if user wants to play again
function playAgain() {
    inquirer.prompt([
        {
            type: "list",
            message: "Care for another round?",
            choices: ["Aye!", "Nay, I am done."],
            name: "play"
        }
    ]).then(function (input) {
        if (input.play === "Aye!") {
            selectNewWord = true;
            guessedLetterArray = [];
            guessCount = 10;
            wordGuess();
        } else {
            return
        }
    })
};

wordGuess();