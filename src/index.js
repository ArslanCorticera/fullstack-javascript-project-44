import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let score = 0;
let mistakes = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (mistakes < 3 && score < 3) {
    const randomNum = getRandomInt(100);
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistakes += 1;
    }

    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (mistakes === 3) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

function playCalcGame() {
  console.log('What is the result of the expression?');
  while (mistakes < 3 && score < 3) {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const operationIndex = getRandomInt(3);
    let question = '';
    let correctAnswer = 0;

    switch (operationIndex) {
      case 0:
        question = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case 1:
        question = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case 2:
        question = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
      default:
        break;
    }

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistakes += 1;
    }

    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (mistakes === 3) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

function gcdGames() {
  console.log('Find the greatest common divisor of given numbers.');

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  while (mistakes < 3 && score < 3) {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const correctAnswer = gcd(num1, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistakes += 1;
    }

    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (mistakes === 3) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

function progressionGames() {
  console.log('What number is missing in the progression?');
  while (mistakes < 3 && score < 3) {
    const start = getRandomInt(10) * 8;
    const step = getRandomInt(10) + 1;
    const hiddenIndex = getRandomInt(10);

    const progression = Array.from({ length: 10 }, (_, i) => start + i * step);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistakes += 1;
    }

    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (mistakes === 3) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

function primeGame() {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (mistakes < 3 && score < 3) {
    const randomNum = getRandomInt(100);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistakes += 1;
    }

    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (mistakes === 3) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

export { playGame, playCalcGame, gcdGames, progressionGames, primeGame };
