/* older version


//console.log(getComputerChoice());



/*
const playerChoice = "sciSsoRs";
const computerSelection = getComputerChoice();



function game(){
    let playerPoint = 0;
    let computerPoint = 0;
    /*
    for (let i = 0; i < 5; i++){

        let playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();

        //console.log("Computer: " + computerSelection);
        
        if (gameRound(playerSelection, computerSelection) === 1){
            playerPoint++;
            console.log("You won! " + playerSelection + " beat " + computerSelection);
        } else if (gameRound(playerSelection, computerSelection) === -1){
            computerPoint++;
            console.log("You lose! " + computerSelection + " beat " + playerSelection);
        } else {
            console.log("It's a tie game!");
        }
    }
    

    

    if (playerPoint === computerPoint){
        return "It's a tie game!"
    } else if (playerPoint > computerPoint){
        return "You won! ";
    } else if (computerPoint > playerPoint){
        return "You lose! ";
    }
}*/

let playerSelection;
let computerSelection;
let playerPoint = 0;
let computerPoint = 0;

//get computer choice
function getComputerChoice(){
    const type = ["rock", "paper", "scissors"];
    return type[Math.floor(Math.random() * type.length)];
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    //console.log(computerSelection);

    if (playerSelection.toLowerCase() === computerSelection ){
        return 0;
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")){
            playerPoint++;
            return 1; 
    }
    
    else if ((computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ||
        (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ||
        (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")){
            computerPoint++;
            return -1;
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        playerSelection = e.target.innerText;
        playRound(playerSelection.toLowerCase(), computerSelection);
    });
})

