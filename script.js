// Problem: Make a simple version of rock-paper-scissors using JavaScript

// Plan
// 1) Type of game: Singleplayer (vs CPU)
// 2) Interface: Console, no UI yet
// 3) Inputs: Player and CPU will have input, ranging from 3 options: Rock, Paper, and Scissors
// 4) Output: Dependent on inputs from both but will be either Win or Lose
// 5) Steps to get Output:
///// -- First, get Player's Input
///// -- Second, get CPU's Input
///// -- Determine which of the two wins then output the statuss (from POV of player)


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
    let status = '';
    let roundWinner = 0; // Player win = 0, CPU win = 1, Tie = 2

    // ROCK vs ...
    if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'PAPER') {
        status = 'You Lose! Paper beats Rock';
        roundWinner = 1;
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'ROCK') {
        status = 'Tie! Rock cannot beat Rock';
        roundWinner = 2;
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') {
        status = 'You Win! Rock beats Scissors';
        roundWinner = 0;
    // PAPER vs ...
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') {
        status = 'You Win! Paper beats Rock';
        roundWinner = 0;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'PAPER') {
        status = 'Tie! Paper cannot beat Paper'
        roundWinner = 2;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') {
        status = 'You Lose! Scissors beat Paper'
        roundWinner = 1;
    // SCISSORS vs ...
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') {
        status = 'You Win! Scissors beat Paper'
        roundWinner = 0;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK') {
        status = 'You Lose! Rock beats Scissors'
        roundWinner = 1;
    } else {
        status = 'Tie! Scissors cannot beat Scissors'
        roundWinner = 2;
    }
    console.log(status)
    console.log(roundWinner)
    return roundWinner;
    
}

function game() {
    // Trying to get a score counter going by retrieving the result from playRound, just don't know how to do so

    // Pseudocode
    // STARTS a 5 round game between PLAYER and CPU
    // IF player wins 1 round, PLAYERSCORE += 1
    // ELSE CPUSCORE += 1
    // IF PLAYERSCORE > CPUSCORE
    //// PLAYER WINS, CPU LOSES
    // ELSE
    //// CPU WINS, PLAYER LOSES

    // Score variables
    let playerScore = 0;
    let cpuScore = 0;
    let tieScore = 0;

    // Variable to store result of playRound
    let roundResult = 0;

    // Play 5 rounds (using for loop)
    for (i = 1; i <= 5; i++) {
        roundResult = playRound(prompt('Rock, Paper, or Scissors?!', 'Decide!'), getComputerChoice())
        if (roundResult === 0) {
            playerScore += 1;
            console.log(`Round ${i} Winner: Player`)
        } else if(roundResult === 1) {
            cpuScore += 1;
            console.log(`Round ${i} Winner: CPU`)
        } else {
            tieScore += 1;
            console.log(`Round ${i} is a Tie`)
        }
    }
    console.log(`Player's score: ${playerScore}`);
    console.log(`CPU's score: ${cpuScore}`);
    console.log(`Amount of ties: ${tieScore}`);
}

game();

// const playerSelection = 'Scissors';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))
// console.log(`Player selection: ${playerSelection}`)
// console.log(`CPU selection: ${computerSelection}`)