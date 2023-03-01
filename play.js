// Store responsive elements in variables
var leds = Array.from(document.getElementsByClassName("led"));
var idleScreen = document.getElementById("idleScreen");
var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var endScreen = document.getElementById("endScreen");
var gameBtns = document.querySelector(".gameBtns");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var startBtn = document.getElementById("start");
var playBtn = document.getElementById("play");
var resetBtn = document.getElementById("reset");

// Establish elements functionality and display on page load
window.onload = (e) => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playBtn.disabled = true;
    resetBtn.disabled = true;
    idleScreen.className = "open";
}
// Two functions handling led behavior
function ledsOn () { // Activates animation
    leds.forEach(led => {
        led.style.animation = "ledFlash 1s 3 ease";
    });
}

function ledsOff () { // Resets animation
    leds.forEach(led => {
        led.style.animation = "";
    });
}

// Change elements functionality and display after pressing the 'START' button
function startDevice () {
    if (idleScreen.style.display = "flex") {
        idleScreen.className = "";
        startScreen.className = "open";
        ledsOn ();
    }
    playBtn.disabled = false;
}
startBtn.addEventListener('click', startDevice)

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