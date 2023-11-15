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

// DOM selectors
// Elements to be used in UI
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const btnRestart = document.getElementById('btnRestart');
const results = document.getElementById('results');

// Allows for linebreaks when setting textContent
results.setAttribute('style', 'white-space: pre;');


function getComputerChoice() {
    // Pseudocode
    // When called, RANDOMLY return
    // Rock, Paper, or Scissors
    let choices = Array('Rock', 'Paper', 'Scissors');
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice.toString();
}

// Score variables
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
let roundLog = '';

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
    // ROCK vs ...
    if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        roundLog = 'You Lose! Paper beats Rock';
        cpuScore += 1;
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'ROCK') {
        roundLog = 'Tie! Rock cannot beat Rock';
        tieScore += 1;
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') {
        roundLog = 'You Win! Rock beats Scissors';
        playerScore += 1;
    // PAPER vs ...
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') {
        roundLog = 'You Win! Paper beats Rock';
        playerScore += 1;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'PAPER') {
        roundLog = 'Tie! Paper cannot beat Paper'
        tieScore += 1;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') {
        roundLog = 'You Lose! Scissors beat Paper'
        cpuScore += 1;
    // SCISSORS vs ...
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') {
        roundLog = 'You Win! Scissors beat Paper'
        playerScore += 1;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK') {
        roundLog = 'You Lose! Rock beats Scissors'
        cpuScore += 1;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'SCISSORS') {
        roundLog = 'Tie! Scissors cannot beat Scissors'
        tieScore += 1;
    }   

    if (playerScore === 5 && cpuScore !== 5) {
        results.textContent = `The winner is the player!\r\nFinal score: ${playerScore}-${cpuScore}`;
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnRestart.disabled = false;
    } else if (cpuScore === 5 && playerScore !== 5) {
        results.textContent = `The winner is the CPU!\r\nFinal score: ${playerScore}-${cpuScore}`;
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnRestart.disabled = false;
    } else {
        results.textContent = `${roundLog}!\r\nCurrent score (Player-CPU): ${playerScore}-${cpuScore}`;
    }
    
    console.log(roundLog)
    console.log(`Player's score: ${playerScore}`);
    console.log(`CPU's score: ${cpuScore}`);
    console.log(`Amount of ties: ${tieScore}`);    
}

function restartGame(msg) {
    // Everything back to initial values
    playerScore = 0;
    cpuScore = 0;
    tieScore = 0;
    roundLog = '';
    results.textContent = `${msg}`;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    btnRestart.disabled = true;
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
    // Calls playRound(), taking into account whose turn it is

    // Remains disabled until a winner is decided
    btnRestart.disabled = true
    btnRock.addEventListener('mousedown', () => {
        playRound('Rock', getComputerChoice());
    });
    btnPaper.addEventListener('mousedown', () => {
        playRound('Paper', getComputerChoice());
    });
    btnScissors.addEventListener('mousedown', () => {
        playRound('Scissors', getComputerChoice());
    });
    btnRestart.addEventListener('mousedown', () => {
        restartGame('New game, let\'s play again!');
    });
}

game();

// const playerSelection = 'Scissors';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))
// console.log(`Player selection: ${playerSelection}`)
// console.log(`CPU selection: ${computerSelection}`)