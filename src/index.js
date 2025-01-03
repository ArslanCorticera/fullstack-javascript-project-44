import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
var result = 0;
var loose = 0; 

export function playGame (){
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const ranInt = function getRandomInt(max) {
        return Math.floor(Math.random(1,10) * max);
      }
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



export function playCalcGame() {
    
    while (loose < 3 || result < 3) {
        let result = 0;
        let a = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100);
        let oneTest = Math.floor(Math.random() * 4);
        if (oneTest === 1) {
            const userAnswer = readlineSync.question('Question: ' + a + ' + ' + b + '\nYour answer: ');
                if(userAnswer == a+b){
                    console.log("Correct!")
                    result+=1;
                }else{
                    console.log("Incorrect!")
                    loose+=1;
                }
        } else if (oneTest === 2) {
            const userAnswer = readlineSync.question('Question: ' + a + ' - ' + b + '\nYour answer: ');
                if(userAnswer == a-b){
                    console.log("Correct!");
                    result+=1;
                }else{
                    console.log("Incorrect!");
                    loose+=1;
                }
        } else if (oneTest === 3) {
            const userAnswer = readlineSync.question('Question: ' + a + ' * ' + b + '\nYour answer: ');
                if(userAnswer == a*b){
                    console.log("Correct!");
                    result+=1;
                }else{
                    console.log("Incorrect!");
                    loose+=1;
                }
        }
        if (loose > 2){
            console.log('Let\'s try again, ' + userName + '!')
            break;
        }else if(result>2){
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        }
    }


    export function gcdGames() {
        console.log('Find the greatest common divisor of given numbers.')
        let check = 0;
        while (loose < 3 || result < 3) {
            let a = Math.floor(Math.random() * 100)
            let b = Math.floor(Math.random() * 100)
            const userAnswer = readlineSync.question('Question: ' + a + ' ' + b + '\nYour answer:');
            a = Math.abs(a);
            b = Math.abs(b);
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            check = a;
            if (userAnswer == check) {
                console.log('Correct!');
                result += 1;
            } else if (userAnswer != check) {
                console.log("'" + userAnswer + "' " + 'is wrong answer;(. Correct answer was' + " '" + check + "'");
                loose += 1;
    
            }
            if (result === 3) {
                console.log('Congratulations, ' + userName + '!');
                break;
            } else if (loose === 3) {
                console.log('Let\'s try again, ' + userName + '!');
                break;
            }
    
        }
    }

    export function progressionGames() {
        console.log('What number is missing in the progression?')
        while (loose < 3 || result < 3) {
            let a = Math.floor(Math.random(1,10) * 80)
            let b = Math.floor(Math.random(2, 10) * 9)
            let rndm = Math.floor(Math.random(10) * 10)
            let question = [a, (a + b), (a + b * 2), (a + b * 3), (a + b * 4), (a + b * 5), (a + b * 6), (a + b * 7), (a + b * 8), (a + b * 9), (a + b * 10)]
            let check = question[rndm]
            question.splice(rndm, 1, '..');
            const userAnswer = readlineSync.question('Question: ' + question + '\nYour answer:');
            if (userAnswer == check) {
                console.log('Correct!');
                result += 1;
            } else if (userAnswer != check) {
                console.log("'" + userAnswer + "' " + 'is wrong answer;(. Correct answer was' + " '" + check + "'");
                loose += 1;
    
            }
            if (result === 3) {
                console.log('Congratulations, ' + userName + '!');
                break;
            } else if (loose === 3) {
                console.log('Let\'s try again, ' + userName + '!');
                break;
            }
    
        }
    }


    export function primeGame() {

        const isPrime = (n) => {
            if (n <= 1) return false;
            if (n === 2) return true;
            if (n % 2 === 0) return false;
    
            return ![...Array(Math.floor(Math.sqrt(n)) - 1)]
                .map((_, i) => i + 3)
                .filter(i => i % 2 !== 0)
                .some(i => n % i === 0);
        };
    
    
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    
        while (loose < 3 || result < 3) {
            let a = Math.floor(Math.random() * 100);
    
            const userAnswer = readlineSync.question('Question: ' + a + '\nYour answer: ');
            let res = isPrime(a);
            if (res == true) {
                res = 'yes';
            } else {
                res = 'no'
            }
            if (userAnswer === res) {
                console.log("Correct!");
                result += 1;
            } else {
                console.log('Uncorrect!');
                loose += 1;
            }if (result === 3) {
                console.log('Congratulations, ' + userName + '!');
                break;
            } else if (loose === 3) {
                console.log('Let\'s try again, ' + userName + '!');
                break;
            }
    
        }
    }