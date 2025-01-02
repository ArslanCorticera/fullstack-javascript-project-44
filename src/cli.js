import readlineSync from 'readline-sync';

export function greetUser() {var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!')

};