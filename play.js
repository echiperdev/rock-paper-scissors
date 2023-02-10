// Store player and computer score
let playerScore = 0;
let compScore = 0;

// Presents weapon options for computer player
const weaponSelection = ["rock", "paper", "scissors"]; // Array of three possible choices

// Stores randomly selected computer player choice
function getCompChoice() {
    return weaponSelection [Math.floor(Math.random() * 3)]; // Calls 'weaponSelection' constant and returns random item from stored array
}