let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll('button');
const scoreClass = document.querySelector(".score");
scoreClass.textContent = "Player 0" + " | " + "Computer 0";
const battleResult = document.querySelector(".battleResult");

buttons.forEach(function (button) {
    button.addEventListener("click", function (event){

        let buttonClass = event.target.classList[0];

        if (playerWins < 5 && computerWins < 5){

            scoreClass.textContent = "Player " + playerWins + " | " + "Computer " + computerWins;
            battleResult.textContent = battle(buttonClass, getComputerChoice());
        }

        if (playerWins === 5 || computerWins === 5) {

            scoreClass.textContent = "Player " + playerWins +
                " | " + "Computer " + computerWins;

            battleResult.textContent = ((playerWins > computerWins)
                ? "You won the game!" : "You lost the game.");

            battleResult.style.color = (playerWins > computerWins) ? "green" : "red";
            battleResult.style.textShadow = "0 0 10px white";
        }
    });
});

function getComputerChoice() {
    let number = Math.floor(Math.random() *3) + 1;

    if (number === 1) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function battle(userSelection, computerSelection) {

    if (userSelection === "rock" && computerSelection === "rock") {
        return "The users rock bounces off the Opponent's rock, it's a tie."
    }
    else if (userSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        return "User's rock gets suffocated by the Opponent's paper, User loses the battle..."
    }
    else if (userSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return "User's rock crushes the Opponent's scissors, User wins the battle!"
    }
    else if (userSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return "User's paper suffocates the Opponent's rock, User wins the battle!"
    }
    else if (userSelection === "paper" && computerSelection === "paper") {
        return "The pieces of paper rub agains't each other without doing anything, it's a tie."
    }
    else if (userSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        return "User's paper gets sliced by the Opponent's scissors, User loses the battle..."
    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        return "User's scissors gets crushed by the Opponent's rock, User loses the battle..."
    }
    else if (userSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return "User's scissors slices the Opponent's paper, User wins the battle!"
    }
    else if (userSelection === "scissors" && computerSelection === "scissors") {
        return "The scissors... scissors? It's a tie."
    }
    else{
        return ("Wtf?")
    }
}