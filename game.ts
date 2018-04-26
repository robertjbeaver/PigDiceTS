//import {pigDiceComponent} from "./pigdice.component";

let timesToPlay: number = parseInt(prompt('How many times would you like to play: '));
let highScore: number = 0;
let gameNumber: number = 0;
let eachRollTotal: number[] = [0,0,0,0,0,0,0];
while (timesToPlay != 0) {
    let isOne: boolean = false;
    let score: number = 0;
    let rolls: number = 0;
    let eachRoll: number[] = [0,0,0,0,0,0,0];
    gameNumber++;
    do{
        let roll: number = Math.floor((Math.random()*6)+1)
        if(roll == 1) {
            isOne = true;
            break;
        } else {
          score += roll;
          rolls++;
          eachRoll[roll]++;
        }

    } while (!isOne);
    timesToPlay--;
    highScore = Math.max(score,highScore);
    for(let i: number = 0; i<eachRoll.length; i++){
        eachRollTotal[i] += eachRoll[i];
    }
    console.log(`Game number ${gameNumber}: Score = ${score} Rolls = ${rolls} 
    Average Roll = ${(score!=0)?(score/rolls):0} \nTwos rolled ${eachRoll[2]}\nThrees rolled: ${eachRoll[3]}
Fours rolled: ${eachRoll[4]}\nFives rolled: ${eachRoll[5]}\nSixes rolled: ${eachRoll[6]}`);
    console.log(`Twos rolled ${eachRollTotal[2]}\\nThrees rolled: ${eachRollTotal[3]}
Fours rolled: ${eachRollTotal[4]}\\nFives rolled: ${eachRollTotal[5]}\\nSixes rolled: ${eachRollTotal[6]}\`);
`)
}
console.log(`Highscore: ${highScore}\nTwos rolled ${eachRollTotal[2]}\nThrees rolled: ${eachRollTotal[3]}
Fours rolled: ${eachRollTotal[4]}\nFives rolled: ${eachRollTotal[5]}\nSixes rolled: ${eachRollTotal[6]}`);
