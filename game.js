//import {pigDiceComponent} from "./pigdice.component";
var timesToPlay = parseInt(prompt('How many times would you like to play: '));
var highScore = 0;
var gameNumber = 0;
var eachRollTotal = [0, 0, 0, 0, 0, 0, 0];
while (timesToPlay != 0) {
    var isOne = false;
    var score = 0;
    var rolls = 0;
    var eachRoll = [0, 0, 0, 0, 0, 0, 0];
    gameNumber++;
    do {
        var roll = Math.floor((Math.random() * 6) + 1);
        if (roll == 1) {
            isOne = true;
            break;
        }
        else {
            score += roll;
            rolls++;
            eachRoll[roll]++;
        }
    } while (!isOne);
    timesToPlay--;
    highScore = Math.max(score, highScore);
    for (var i = 0; i < eachRoll.length; i++) {
        eachRollTotal[i] += eachRoll[i];
    }
    console.log("Game number " + gameNumber + ": Score = " + score + " Rolls = " + rolls + " \n    Average Roll = " + ((score != 0) ? (score / rolls) : 0) + " \nTwos rolled " + eachRoll[2] + "\nThrees rolled: " + eachRoll[3] + "\nFours rolled: " + eachRoll[4] + "\nFives rolled: " + eachRoll[5] + "\nSixes rolled: " + eachRoll[6]);
    console.log("Twos rolled " + eachRollTotal[2] + "\\nThrees rolled: " + eachRollTotal[3] + "\nFours rolled: " + eachRollTotal[4] + "\\nFives rolled: " + eachRollTotal[5] + "\\nSixes rolled: " + eachRollTotal[6] + "`);\n");
}
console.log("Highscore: " + highScore + "\nTwos rolled " + eachRollTotal[2] + "\nThrees rolled: " + eachRollTotal[3] + "\nFours rolled: " + eachRollTotal[4] + "\nFives rolled: " + eachRollTotal[5] + "\nSixes rolled: " + eachRollTotal[6]);
