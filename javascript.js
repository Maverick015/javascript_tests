// Prompt the user with three choices (Rock, paper, scissors)
// User enters choice
// Opponent chooses their weapon
// Print message to show a battle occurs between user and opponent
// Print winner

function getUserChoice() {
    let userSelection = prompt("Choose your weapon:\n\nRock\nPaper\nScissors", "" );
    console.log("You chose " + userSelection);
    
    return userSelection
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() *3) + 1
    if (computerSelection == 1) {
        console.log("Your opponent chose Rock");
    }

    else if (computerSelection == 2) {
        console.log("Your opponent chose Paper");
    }

    else {
        console.log("Your opponent chose Scissors");
    }
    return computerSelection
}

function battle() {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    if (userSelection === "Rock" && computerSelection === 1) {
        console.log("The users rock bounces off the Opponent's rock, it's a tie.")
    }
    else if (userSelection === "Rock" && computerSelection === 2) {
        console.log("User's rock gets suffocated by the Opponent's paper, User loses the battle...")
    }
    else if (userSelection === "Rock" && computerSelection === 3) {
        console.log("User's rock crushes the Opponent's scissors, User wins the battle!")
    }
    else if (userSelection === "Paper" && computerSelection === 1) {
        console.log("User's paper suffocates the Opponent's rock, User wins the battle!")
    }
    else if (userSelection === "Paper" && computerSelection === 2) {
        console.log("The pieces of paper rub agains't each other without doing anything, it's a tie.")
    }
    else if (userSelection === "Paper" && computerSelection === 3) {
        console.log("User's paper gets sliced by the Opponent's scissors, User loses the battle...")
    }
    else if (userSelection === "Scissors" && computerSelection === 1) {
        console.log("User's scissors gets crushed by the Opponent's rock, User loses the battle...")
    }
    else if (userSelection === "Scissors" && computerSelection === 2) {
        console.log("User's scissors slices the Opponent's paper, User wins the battle!")
    }
    else if (userSelection === "Scissors" && computerSelection === 3) {
        console.log("The scissors... scissor? It's a tie.")
    }
    else{
        console.log("Wtf?")
    }



}

battle()