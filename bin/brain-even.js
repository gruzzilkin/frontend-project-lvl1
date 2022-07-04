#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (num) => (!Number.isNaN(+num) ? +num % 2 === 0 : false);
const getRandomNumber = () => Math.round(Math.random() * 100) + 1;

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isSuccess = true;
let counter = 0;

while (isSuccess && counter < 3) {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  counter += 1;

  if (correctAnswer !== answer) {
    isSuccess = false;

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
}

if (isSuccess) console.log(`Congratulations, ${name}!`);
