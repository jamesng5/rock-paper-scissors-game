let playerSelection;
let computerSelection;
let playerPoint = 0;
let computerPoint = 0;

const container = document.querySelector('.container');
const gamePoint = document.createElement('div');
const winner = document.createElement('div');
let buttons = document.querySelectorAll('button');

function getComputerChoice(){
    const type = ["rock", "paper", "scissors"];
    return type[Math.floor(Math.random() * type.length)];
}

function gameResult(){
    if (playerPoint === 5 || computerPoint === 5){
        if (playerPoint === computerPoint){
            winner.textContent = "Tie Game!";
        } else if (playerPoint > computerPoint){
            winner.textContent = "You won!";
        } else {
            winner.textContent = "Computer won!";
        }
    }

    container.appendChild(winner);
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection ){
        //container.textContent = "It's a tie game!";
        container.textContent = "It's a tie game!";
        gamePoint.textContent = `Player: ${playerPoint} ||| Computer: ${computerPoint}`;
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            playerPoint++;
            container.textContent = `You win! ${playerSelection} beat ${computerSelection}`;
            gamePoint.textContent = `Player: ${playerPoint} ||| Computer: ${computerPoint}`;
    }
    
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")){
            computerPoint++;
            container.textContent = `You lose! ${computerSelection} beat ${playerSelection}`;
            gamePoint.textContent = `Player: ${playerPoint} ||| Computer: ${computerPoint}`;
    }
    container.appendChild(gamePoint);
    gameResult();
}

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        playerSelection = e.target.innerText;
        playRound(playerSelection.toLowerCase(), getComputerChoice());
    });
})


