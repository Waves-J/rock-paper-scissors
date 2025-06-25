const buttons = document.querySelectorAll("button");
const display = document.querySelector("div");
const human_score_display = document.querySelector(".player-score");
const computer_score_display = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(button.textContent.toLocaleLowerCase(), getComputerChoice());
    });
})




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

function playRound(humanChoice, computerChoice) {
    winner.textContent = "";
    if (humanChoice == computerChoice) {
        display.textContent = "Both chose " + humanChoice + ". Tie!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        display.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        display.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        display.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        display.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    human_score_display.textContent = "Player Score: " + humanScore;
    computer_score_display.textContent = "Computer Score: " + computerScore;
    updateWinner();
}

function updateWinner() {
    if (humanScore >= 5) {
        winner.textContent = "Player wins!";
        computerScore = 0;
        humanScore = 0;
    } else if (computerScore >= 5) {
        winner.textContent = "Computer Wins";
        computerScore = 0;
        humanScore = 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore > computerScore) {
        console.log("Player wins! Player score: " + humanScore + " Computer score: " + computerScore)
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Player score: " + humanScore + " Computer score: " + computerScore)
    } else {
        console.log("Tie! Player score: " + humanScore + " Computer score: " + computerScore)
    }
}

