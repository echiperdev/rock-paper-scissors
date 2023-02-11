// Store player and computer score
let playerScore = 0;
let compScore = 0;

// Presents weapon options for computer player
const weaponSelection = ["rock", "paper", "scissors"]; // Array of three possible choices

// Stores randomly selected computer player choice
function getCompChoice() {
    return weaponSelection [Math.floor(Math.random() * 3)]; // Calls 'weaponSelection' constant and returns random item from stored array
}
// console.log(getCompChoice()); // Tests if function returns random results in console (SUCCESS)

// Stores player input as lowercase string
function getPlayerChoice() {
    let playerAsk = prompt("Choose thy weapon! Rock, Pepr or Scissors?"); // Asks for player input
    return playerAsk.toLocaleLowerCase(); // Stores player input and returns it as lowercase string to parent function
}

// Processes user input, explores ruleset and stores result for one round of the ga
function playRound(playerSelection, compSelection) {
    compSelection = getCompChoice(); // Invokes and stores the computer's choice;
    playerSelection = getPlayerChoice(); // Invokes and stores the player's choice;

    // Parses through the various item interactions and returns score values and messages for player and computer
    if (playerSelection === "rock" && compSelection === "scissors") {
        playerScore +=1; // Increments player score by 1
        return "You win! Rock crushes Scissors!" // Returns victory message
    } else if (playerSelection === "scissors" && compSelection === "paper") {
        playerScore +=1;
        return "You win! Scissors slice through Paper!"
    } else if (playerSelection === "paper" && compSelection === "rock") {
        playerScore +=1;
        return "You win! It's a wrap!";
    } else if (playerSelection === "scissors" && compSelection === "rock") {
        compScore +=1;
        return "You lose! Det is all I want. Smesh my apponents.";
    } else if (playerSelection === "paper" && compSelection === "scissors") {
        compScore +=1;
        return "You lose! Blades 'n Shades, baby!";
    } else if (playerSelection === "rock" && compSelection === "paper") {
        compScore +=1;
        return "You lose! Tell me, bratha, who give him belt?"
    } else {
        playerScore +=1;
        compScore +=1;
        return "Fight!"
    }
}
// console.log(playRound()) // Tests if playRound correctly prints to console (SUCCESS)

// Runs five rounds of the game and tracks scores for each round
function playGame() {
    for (let i=0; i < 5; i++) { // Coutns to five
        console.log(playRound());
        console.log(`Your score: ${playerScore}`); // Prints player score
        console.log(`Computer score: ${compScore}`); // Prints computer score
    }
    getWinner()
}

// Determines winner
function getWinner() {
    if (compScore > playerScore) {
        console.log("\nComputer wins!");
    } else if (compScore < playerScore) {
        console.log("\nYou win!");
    } else {
        console.log("\nMajority draw!");
    }
}

playGame();