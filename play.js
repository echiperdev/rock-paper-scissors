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

// Change elements functionality and display after pressing the 'PLAY' button
function startGame () {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    if (startScreen.className = "open") {
        startScreen.className = "";
        gameScreen.className = "open";
    }
    ledsOff ();
}
playBtn.addEventListener('click', startGame)


// Store scores and choices
let playerScore = 0;
let compScore = 0;
let playerChoice = "";
let compChoice = "";

// Store event messages
let statusMsg = "";
let getWinner = "";

// Stores randomly selected computer player choice
function getCompChoice() {
    const wpnSelect = ["rock", "paper", "scissors"]; // Array of three possible choices
    return wpnSelect [Math.floor(Math.random() * 3)]; // Calls 'weaponSelection' constant and returns random item from stored array
}
// console.log(getCompChoice()); // Tests if function returns random results in console (SUCCESS)

// Handles game functionality
function playGame (e) {
    compChoice = getCompChoice();
    playerChoice = e.targe.id;
    playRound (compChoice, playerChoice);
    determineWinner ();
    displayArea ();
}

// The following four functions handle behavior on player victory
function playerWin () { // Increases score and tells player they won
    playerScore+=1;
    statusMsg = `You win!`;
}

function playerRock () {
    document.getElementById("playerAnim").src="./images/anim/rock.gif";
    document.getElementById("playerAnim").alt="A smashing rock";
    document.getElementById("compAnim").src="./images/static/compShears.png";
    document.getElementById("compAnim").alt="A pair of scissors facing left";
}

function PlayerPaper () {
    document.getElementById("playerAnim").src="./images/anim/playerPaper.gif";
    document.getElementById("playerAnim").alt="A wondrous scroll";
    document.getElementById("compAnim").src="./images/static/rock.png";
    document.getElementById("compAnim").alt="A bland rock";
}

function playerScissors () {
    document.getElementById("playerAnim").src="./images/anim/playerShearsWin.gif";
    document.getElementById("playerAnim").alt="Shining scissors facing right";
    document.getElementById("compAnim").src="./images/static/compPaper.png";
    document.getElementById("compAnim").alt="Paper awaiting to be spoiled";
}

// The following four functions handle behavior on computer victory
function compWin () { // Increases scors and tells player they lost
    compScore+=1;
    statusMsg = `You lose!`;
}

function compRock () {
    document.getElementById("playerAnim").src="./images/static/playerShears.png";
    document.getElementById("playerAnim").alt="Dull-bladed scissors facing right";
    document.getElementById("compAnim").src="./images/anim/rock.gif";
    document.getElementById("compAnim").alt="A fearsome rock";
}

function compPaper () {
    document.getElementById("playerAnim").src="./images/static/rock.png";
    document.getElementById("playerAnim").alt="A bland rock";
    document.getElementById("compAnim").src="./images/anim/compPaper.gif";
    document.getElementById("compAnim").alt="A slandering paper";
}

function compScissors () {
    document.getElementById("playerAnim").src="./images/static/playerPaper.png";
    document.getElementById("playerAnim").alt="Empty paper";
    document.getElementById("compAnim").src="./images/anim/compShearsWin.gif";
    document.getElementById("compAnim").alt="Gleaming scissorss facing left";
}

// Hanndle choice equivalence behavior
function equalChoice () {
    playerScore+=1;
    compScore+=1;
    if (playerChoice === "rock" && compChoice === "rock") {
        document.getElementById("playerAnim").src="./images/static/rock.png";
        document.getElementById("compAnim").src="./images/static/rock.png";
    } else if (playerChoice === "paper" && compChoice === "paper") {
        document.getElementById("playerAnim").src="./images/static/playerPaper.png";
        document.getElementById("compAnim").src="./images/static/compPaper.png";
    } else {
        document.getElementById("playerAnim").src="./images/static/playerShears.png";
        document.getElementById("compAnim").src="./images/static/compShears.png";
    }
}

// Handles scoring criteria and display behavior per one round of the game
function playRound (compChoice, playerChoice) {
    if (playerChoice === "rock" && compChoice === "scissors") {
        playerWin();
        playerRock();
    } else if (playerChoice === "paper" && compChoice === "rock") {
        playerWin();
        PlayerPaper();
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        playerWin();
        playerScissors();
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        compWin();
        compRock();
    } else if (compChoice === "paper" && playerChoice === "rock") {
        compWin();
        compPaper();
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        compWin();
        compScissors();
    } else {
        equalChoice();
    }
}

// Resets animations
function resetAnim () {
    document.getElementById("playerAnim").src="";
    document.getElementById("compAnim").src="";
    document.getElementById("playerAnim").alt="";
    document.getElementById("compAnim").alt="";
}

// Handles end-game behavior
function endGame () {
    playerScore = 0;
    compScore = 0;
    statusMsg = "";
    gameScreen.className = "";
    endScreen.className = "open";
    rockBtn.disabled=true;
    paperBtn.disabled=true;
    scissorsBtn.disabled=true;
    resetBtn.disabled=false;
    ledsOn();
    resetAnim();
}

gameBtns.addEventListener("click", playGame);