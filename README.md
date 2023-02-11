# rock-paper-scissors

## **INTRODUCTION**

Rock-Paper-Scissors (abrev. RPS), known under various other names, is a non-cooperative hand-game, usually played between two opponents, in which both form one of three shapes with their hands stretched out. These shapes are "rock" (a closed fist), "paper" (an open palm) and scissors (a fist with the index and medius extended in a V). [4]

The game dates back to 3rd century China, during the Han dinasty, and it has spread beyond East Asia in the early 20th century. [1, 2]

Though the game appears simple, it is that very quality that has allowed scientists to employ it in the study of competition phenomena in various environments - societal, biological, economic. [3]

## **ASSIGNMENT**

This project is part of the 'Foundations' track of 'The Odin Project'.

This initial implementation is focused strictly on game functionality. It will be played from the browser console [Google Chrome Version 110.0.5841.77 (Official Build) (64-bit)].

The assignment requires the implementation a 5 round RPS game between a human (?) player and a computer. The score must be tracked and a winner or loser must be reported at the end.

## **IMPLEMENTATION**

**RPS1) SCORES.**
Consequently, the first things to establish are a means to keep track of the score. In this sense, two variables (_'playerScore'_ and _'compScore'_) have been declared and assigned an initial value of _'0'_ (integer, not string). This value changes as the game executes.

**RPS2) COMPUTER CHOICE**

**RPS2.1) Options.** Considering the opponent is not human, the program must ensure the computer understands the rules of the game. An array of strings, containing the three items of RPS, has been declared and assigned to a constant (_'weaponSelection'_).

**RPS2.2)** For the computer to be able to make a random choice, a function (_'getCompChoice'_) has been declared. It has no parameters, but the expression returns a random item from the array stored in the _'weaponSelection'_ constant.

**RPS2.3)** Functionality has been successfully tested by printing the stored results to the browser console.

**RPS3) PLAYER CHOICE.** The player's choice is contained within a function (_'getPlayerChoice'_) without parameters. The expression stores the player's input into a variable (_'letPlayerAsk'_), and returns the input as a lowercase string.

**RPS4) ROUNDS.** Once the choices have been stored, the next step is to ensure at least one round of the game executes correctly. For that, a function (_'playRound'_) has been declared, with two parameters ('compSelection' and 'playerSelection') declared within the scope of the function. These store the computer's and player's choices, and are later employed to determine the round's winner.

**RPS4.1)** The winner is determined through a conditional statement, wherein the circular mechanic of the game is executed. Traditionally, 'Rock' beats 'Scissors', who beats 'Paper', who beats 'Rock', meaning that the score of the computer or the player increases by the value of _'1'_ (integer, not string). A message (i.e. 'You win' or 'You lose') is also returned and stored in the _'playRound'_ function. If neither of these situations is encountered, the conditional statement increases both scores by '1' and telling the human player to 'Fight!' again.

**RPS 4.2)** Functionality has been successfully tested by printing the round's result to the browser console.

**RPS5) GAME.** As previously mentioned, the game must run for five rounds. Consequently, a function (_'playGame'_) without parameters has been declared. The expresion contains a loop which counts to five and prints the scores of both palyers (human and computer) to the browser console each round. The function also calls an external function (_'getWinner'_).

**RPS5.1)** The _'getWinner'_ function also has no parameters, and its expression contains a conditional statement that prints the game's final result on a new line to the browser console.

**RPS5.2)** Finally, for the game to execute properly, the _'playGame'_ function must be called once more.

## **THE STRUGGLE**

The most difficult aspect confronted was the correct application of the conditional statment in the _'playRound'_ function, and its subsequent integration in the _'playGame'_ loop. Much has been learned.

## **THE BENEFITS**

Understanding of several concepts has increased:
1. variable declarations;
2. function declarations;
3. function scope;
4. returning values;
5. string manipulation;
6. randomization;
7. conditional statements (if, else if, else);
8. loops (i.e. for loops).

## **THE PATH FORWARD**

The current implementation of the game is what could be called bare-bones. In the future, the project will be stylized (i.e. offered a GUI) and made to function in a responsive manner to other sorts of input (e.g. clicks, taps, etc.).

## **_REFERENCES_**

1. Moore M. E., Sward J., _Introduction to the Game Industry_, Pearson Prentice Hall, 2007, ISBN: 9780131687431;s
2. Ogawa D. M., _Jan Ken Po: The World of Hawaii's Japanese Americans_, University of Hawaii Press, 1978, ISBN: 9780824803988;
3. Wang Z., Xu B., Zhou H.-J., _Social cycling and conditional responses in the Rock-Paper-Scissors game_, Scientific Reports, 2014, 4:4830, ISSN: 2045-2322;
4. Zhou H.-J., _The rock-paper-scissors game_, Contemporary Physics, 2015, 57(2): 151-163, ISSN: 1366-5812.

### **[1st Edition] [Feb 11 23] [Emilian Chiper]**
