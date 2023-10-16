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