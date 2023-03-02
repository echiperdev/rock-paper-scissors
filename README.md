# rock-paper-scissors

# **v1 [Feb 11 23]**

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

# **v2 [Mar 01 23]**

## **PREFACE TO UPDATE**

Revisiting the Rock-Paper-Scissors project required the implementation of a GUI.

Design was influenced by several objects encountered over the course of a day: a dental floss container, an old hand-held gaming console, a modern gamepad and a tamagotchi. Some of these influences are more obvious than others.

In this sense, a virtual device dubbed 'RoshamboX' was to become the desired GUI. Having opted for a 'hand-held gaming console' esthetic, the main problem had become ensuring smooth display functionality. In this sense, previous experience with image manipulation software has led to a semblence of a 'layered' design. There would be five instances of the game console's display: idle, start, game, end-game, reload.

## **IMPLEMENTATION**

Game functionality has been changed. The previously employed looping logic has been replaced with a chain of function calls. The game works as follows:

1) First, the responsive elements of the GUI are invoked from the updated DOM tree and stored in variables.

2) An onload function applied to the entire window ensures the gameplay items of rock, paper and scissors, now in the shape of buttons (R, P, and S, respectively), are disabled. The 'PLAY' and 'RESET' buttons are also disabled. The screen state is set to idle.

3) Two functions handle the state of a flash animation applied to three leds.

4) The 'START' button invokes a function that activates the device. When this happens, the idle screen is no longer displayed, the three aforementioned leds flash thrice, an animation is run on the start screen (now with a display of flex) and the 'PLAY' button is enabled.

5) The 'PLAY' button invokes a function that disables the start display, resets the leds flash animation, and enables the game display as well as the gameplay buttons (R, P, and S).

6) Two groups of variables store score, player choices and status messages.

7) Computer choice functions the same as before, only the constant storing the choices for the computer is now inside the function that previously called it (i.e. 'getCompChoice' [see play.js ln: 72]).

8) Game functionality is attached to the three large buttons: R for rock, P for paper and S for scissors. The game function, 'playGame' [see play.js ln: 79] stores the player's choices, and invokes three functions: playRound, determineWinner and displayArea. In order for these to work, the game function itself is invoked further down, within the event listener attached to the game buttons.

9) When one of the game buttons is clicked, a number of events must take place: the score must change, a status message must be displayed, and two images (one animated, another static, or two static) must mirror each other. In that regard, several functions have been declared to handle this behavior. [see play.js ln:87-155]

10) The 'playRound' function [see play.js ln: 158] uses the player's choices as arguments. A conditional statement using the previously mentioned functions will return the result of the round in the form of a score increase, a status message, and an animation or static image, respectively.

11) The 'resetAnim' function [see play.js ln: 183] resets the source and alternative text of the player and computer images to empty string.

12) The function itself is part of the 'endGame' function [see play.js ln: 191], which resets the scores to 0 and the status message to an empty string, deactives the open state of the game screen and activates the open state of the endScree, whilst also disabling the gameplay buttons and enabling the reset button. Leds flash and the 'resetAnim' function is invoked.

13) The winner of the game is determined through a function [see play.js ln: 206] containing a conditional statement which ends the game (through the 'endGame' function) and returns a winner once either or both players reach the score of 5.

14) Another function, 'displayArea' [see play.js ln: 222] assigns the scoreboard, status message and winner expressions to appropriate DOM tree elements.

15) To activate gameplay, the 'playGame' function is ultimately invoked with an event listener attached to the gameplay buttons. [see play.js ln: 229]

16) Finally, a replay mechanism must be set in place as to avoid reloading the page and running through the entire device and game activation sequences. In that sense, 'resetGame' [see play.js ln: 232] is a function that turns off the leds animation, deactivates the end screen and activates the reload screen. It is invoked inside and event listener attached to the 'RESET' button.

## **POTENTIAL ISSUES**

1) Device incompatibility: might not display appropriately on various mobile devices, especially smartphones.

2) Animated elements in the game screen might crowd cache.

## **ACQUIRED KNOLEDGE**

1. Asynchronous script loading;
2. Event listeners and DOM tree manipulation;
3. Simple animations and transitions;
4. Pseudo-classes;
5. JS-injected classes;
6. Position: relative and position: absolute;
7. Box shadows;
8. Gradients
9. Masking links in images

## **THE PATH FORWARD**

The current implementation of the game is satisfactory, not perfect, and while the latter cannot be achieved (only the idea of perfection is perfect), a more desirable state would imply tweaks in concurrence with the idea of responsive design, with the ultimate goal of making the web page mobile-friendly. Optionally, sounds may be added, though that may add to a perhaps already present feature redundancy.

# **v3 [Mar 02 23]**

## **PREFACE TO UPDATE**

Following the previous itereation's plan, the latest version's goal was achieving mobile device compatibility.

## IMPLEMENTATION

1) A media query was created targeting devices with screens of up to 554px.

2) The margins of the game console were adjusted and size was changed to vieport units.

3) The margin of the led section was adjusted.

4) Padding was removed from the display section and reload screen.

5) Screen border margin and padding were adjusted.

6) Display size was changed to vieport units.

7) Padding was adjusted for the open classes of the start screen and load screen, logo container and footer.

8) Animation containers and image size were adjusted using viewport units for loading screen, game screen and replay screen.

9) Font size was changed for open class of ending screen, utility button container text and logo.

10) Button were rearanged, and dimensions and font size were adjusted to fit mobile device display height.

# **REFERENCES**
1. Moore M. E., Sward J., _Introduction to the Game Industry_, Pearson Prentice Hall, 2007, ISBN: 9780131687431;s
2. Ogawa D. M., _Jan Ken Po: The World of Hawaii's Japanese Americans_, University of Hawaii Press, 1978, ISBN: 9780824803988;
3. Wang Z., Xu B., Zhou H.-J., _Social cycling and conditional responses in the Rock-Paper-Scissors game_, Scientific Reports, 2014, 4:4830, ISSN: 2045-2322;
4. Zhou H.-J., _The rock-paper-scissors game_, Contemporary Physics, 2015, 57(2): 151-163, ISSN: 1366-5812.
