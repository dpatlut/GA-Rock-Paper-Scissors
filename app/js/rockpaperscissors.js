////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   if(move===null || move===undefined){ //could be cut down to one line
        return getInput();
    }
    return move;
}

function getComputerMove(move) {
    if(move===null || move===undefined){//could also be cut down
        return randomPlay();
    }
    return move;
}
//recommended subsitute code via another students answer
// function getPlayerMove(move) {
//       return (move || getInput());
// }

// function getComputerMove(move) {
//     return (move || randomPlay());
// }

function getWinner(playerMove,computerMove) {
    var winner=null;
    var playr = getPlayerMove(playerMove);
    var comp = getComputerMove(computerMove);
    if(playr===comp){
        winner='tie';
    }
    switch (playr){//all cases for move of player
        case'rock':
        if(comp==='paper'){
            winner='computer';
        }
        if(comp==='scissors'){
            winner='player';
        }
        break;
        case'scissors':
            if(comp==='paper'){
            winner='player';
        }
        if(comp==='rock'){
            winner='computer';
        }
        break;
        case'paper':
             if(comp==='rock'){
            winner='player';
        }
        if(comp==='scissors'){
            winner='computer';
        }
        break;
    }
    return winner;
}

function playToFive() {
console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins != 5 && computerWins != 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === "player"){
            console.log("Player wins " + [playerMove] + " beats " + [computerMove]);
            playerWins ++;
        }else if (winner === "computer"){
            console.log("Computer wins " + [computerMove] + " beats " + [playerMove]);
            computerWins ++;
        }else if (winner === "tie"){
        console.log("Both moves were the same. The result is a Tie and no points awarded to any player");
        }
   
console.log("The score is " + [playerWins] +" - Player "+ [computerWins] + " - Computer " );
    }
        
console.log("Final score is " +  [playerWins] + " - Player " + [computerWins] + " - Computer" );
        
    return [playerWins, computerWins];
    
}
    
playToFive();