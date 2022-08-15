/* older version


//console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection){
    //console.log(playerSelection);

    if (playerSelection.toLowerCase() === computerSelection ){
        return 0;
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")){
            return 1;
    }
    
    else if ((computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ||
        (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ||
        (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")){
            return -1;
    }
}

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


const paperButton = document.querySelector('#paper-btn');
const rockButton = document.querySelector('#rock-btn');
const scissorsButton = document.querySelector('#scissors-btn');

paperButton.addEventListener('click', function (e){
    console.log(e.target);
});

rockButton.addEventListener('click', function (e){
    console.log(e.target);
});

scissorsButton.addEventListener('click', function (e){
    console.log(e.target);
});

function getComputerChoice(){
    const type = ["rock", "paper", "scissors"];
    return type[Math.floor(Math.random() * type.length)];
}

console.log(getComputerChoice());
