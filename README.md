# Constructor-Word-Guess

This program is a word guessing game based entirely in the command console.  The object of the game is to guess the correct Warcraft character's name, which starts out hidden at the begining.  You will need to guess one letter at a time, or else the computer will not except your answer and ask you to try again.  

You are given 10 guesses.  If you guess correctly, you win the game.  If you run out of guesses, you lose.  In either case you will be given the option to play again if you so choose.

If you are not very familiar with Warcraft characters, feel free to look their names up from a myriad of resources online, or if you prefer simply view the characters array in the index.js file.


## Getting Started

This app is a command-based program that can be run on GitBash or Terminal; it is not run on a browser.  You will need to have VSCode or similar editor along with GitBash/Terminal.  Store all the files you download within the same folder.

You will also need to have Node.js and the Inquirer package installed.  See installation section for details.

In the console, navigate to the folder where the .js files are stored.  To run the main program, simple type the following in the command line: node index.js

### Prerequisites

The data can be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.  If you are new to this process, please follow the directions below:

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

To download via GitBash, once you have a working SSH key with GitHub, create a folder you wish to download data into.  Next, click on the green 'Download or Clone' button on the GitHub respoitory page.  Make sure you have SSH key selected(and not HTTPS), and click on the clipboard icon.  This copies the address to your clipboard.

Next, navigate to the folder you wish to download the data into via GitBash or Terminal, and then simply type "git clone" followed by the link you copied onto your clipboard(paste via ctrl/cmd+v).  Press the enter key, and GitBash will pull the entire repository into your folder.

Additionally, you will need to have Node.js installed.  This can be done here: https://nodejs.org/en/


### Installing

Once you have the repository cloned, you will need to install a number of npm packages before you can begin using the program.

Begin with adding a folder for node_modules by typing the following in the command line: npm init

Next you will need to install each package used for LIRI Bot.  This can be done by typing each of the following into the command line:

* npm install
* npm install inquirer

## Instructions

Type in 'node index.js' to begin the game.  You will first be prompted to type in any letter from A-Z.  Take your best guess.  You will then receive a message stating whether or not you were correct, and will be shown the position of the letters in the name--with unknown letters marked as "_".

Any correctly guessed letters will replace the underscores.  There is no need to guess the same letter more than once, as all instances of that character will be replaced.  

If you correctly guess the character's name, you will win, and be prompted if you would like to play again.  Answer 'Aye' to play once more, or 'Nay' to exit the program.

You begin the game with 10 guesses; if these run out it's game over.  If this occurs, you will received the same prompt asking if you'd like to play again or exit the program. 


## Testing

This program can be tested through use of the command console(GitBash/Terminal, etc.).  Simply add console.log under any section you wish to examine the results from in the console.  This was done extensively during development. 

You can test the constructor files Letter.js and Word.js in this manner as well, in order to get a better idea of how they function individually.  


##Deployment

Navigate to https://github.com/ to clone.  Carefully follow the installation instructions above.


## Built With

Visual Studio Code: https://code.visualstudio.com/  
Node.js: https://nodejs.org/en/


## Contributing

Feel free to fork the repository for your own study.  If you would like to learn more about how I constructed this project you may also message me via GitHub.


## Versioning

Use github for version control (https://github.com/your/project/tags).


## Author

* **Joe Hutchinson**


## Acknowledgments

* Joe Rehfuss
* Trae Shanks
* Lan Truong

Thank you again to my Coding Boot Camp instructors for all of the support and constructive feedback.