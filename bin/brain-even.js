#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  console.log('Correct!');
  correctAnswersCount += 1;
}

if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
