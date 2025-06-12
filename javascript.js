function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Please choose rock, paper, or scissors: ");
    return input.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Both chose " + humanChoice + ". Tie!");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! " + humanChoice + " beats " + computerChoice)
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice)
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice)
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log("Player wins! Player score: " + humanScore + " Computer score: " + computerScore)
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Player score: " + humanScore + " Computer score: " + computerScore)
    } else {
        console.log("Tie! Player score: " + humanScore + " Computer score: " + computerScore)
    }
}

playGame()