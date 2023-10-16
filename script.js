// Problem: Make a simple version of rock-paper-scissors using JavaScript

// Plan
// 1) Type of game: Singleplayer (vs CPU)
// 2) Interface: Console, no UI yet
// 3) Inputs: Player and CPU will have input, ranging from 3 options: Rock, Paper, and Scissors
// 4) Output: Dependent on inputs from both but will be either Win or Lose
// 5) Steps to get Output:
///// -- First, get Player's Input
///// -- Second, get CPU's Input
///// -- Determine which of the two wins then output the results (from POV of player)


function getComputerChoice() {
    // Pseudocode
    // When called, RANDOMLY return
    // Rock, Paper, or Scissors
    let choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // Pseudocode
    // GETS the playerSelection and GETS the computerSelection
    // COMPARES playerSelection and computerSelection
    // IF playerSelection == Rock && computerSelection == Paper:
    //// RETURN 'You Lose! Paper beats Rock"
    // IF playerSelection == Rock && computerSelection == Rock:
    //// RETURN 'Tie! Rock cannot beat Rock"
    // IF playerSelection == Rock && computerSelection == Scissors:
    //// RETURN 'You Win! Rock beats Scissors"
    // ...and so on
    let result = '';

    // ROCK vs ...
    if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'PAPER') {
        result = 'You Lose! Paper beats Rock';
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'ROCK') {
        result = 'Tie! Rock cannot beat Rock';
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') {
        result = 'You Win! Rock beats Scissors';
    // PAPER vs ...
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') {
        result = 'You Win! Paper beats Rock';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'PAPER') {
        result = 'Tie! Paper cannot beat Paper'
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') {
        result = 'You Lose! Scissors beat Paper'
    // SCISSORS vs ...
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') {
        result = 'You Win! Scissors beat Paper'
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK') {
        result = 'You Lose! Rock beats Scissors'
    } else {
        result = 'Tie! Scissors cannot beat Scissors'
    }
    return result;
}

// function game() {
//     // Pseudocode
//     // STARTS a 5 round game between PLAYER and CPU
//     // IF player wins 1 round, PLAYERSCORE += 1
//     // ELSE CPUSCORE += 1
//     // IF PLAYERSCORE > CPUSCORE
//     //// PLAYER WINS, CPU LOSES
//     // ELSE
//     //// CPU WINS, PLAYER LOSES
//     playRound(prompt('Rock, Paper, or Scissors?!', 'Decide!'), getComputerChoice())
// }

const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
console.log(`Player selection: ${playerSelection}`)
console.log(`CPU selection: ${computerSelection}`)