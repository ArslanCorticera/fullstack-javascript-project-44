#!/usr/bin/env node


import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame();



function playGame (){
    const ranInt = function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let result = 0;
    let loose = 0;
    while (loose < 3 || result < 3) {
        let write = ranInt(100);
        const userAnswer = readlineSync.question('Question: ' + write + '\nYour answer: ');

        if (userAnswer === 'yes' && write % 2 === 0) {
         console.log('Correct!');
         result+=1;
        } else if (userAnswer === 'no' && write % 2 !== 0) {
        console.log('Correct!');
        result+=1;
        } else {
         console.log('Incorrect!');
            loose+=1;
            }
        if (result === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }else if (loose === 3) {
            console.log('Let\'s try again, ' + userName + '!');
            break;
        }
    }
       
}
