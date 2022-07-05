import { QUESTIONS_NUMBER } from '../constants/index.js';

import {
  getUserName,
  showWelcomeText,
  showQuestionsTitle,
  showQuestionText,
  getAnswer,
  showWrongAnswerText,
  showRightAnswerText, showCongratsText,
} from '../src/index.js';

const OPERATION = {
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: '*',
};

const getRandomNumber = (min = 1, max = 25) => Math.round(Math.random() * (max - min)) + min;
const getRandomOperation = () => Object.values(OPERATION)[getRandomNumber(0, 2)];

const calc = (num1, num2, operation) => {
  switch (true) {
    case operation === OPERATION.MULTIPLICATION:
      return num1 * num2;

    case operation === OPERATION.SUBTRACTION:
      return num1 - num2;

    default:
      return num1 + num2;
  }
};

export default () => {
  showWelcomeText();

  const name = getUserName();

  showQuestionsTitle('What is the result of the expression?');

  let counter = 0;

  while (counter < QUESTIONS_NUMBER) {
    const randomOperation = getRandomOperation();
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();
    const correctAnswer = calc(firstRandomNumber, secondRandomNumber, randomOperation);
    const expression = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;

    showQuestionText(expression);

    const answer = +getAnswer();

    counter += 1;

    if (correctAnswer !== answer) {
      return showWrongAnswerText(name, answer, correctAnswer);
    }

    showRightAnswerText();
  }

  return showCongratsText(name);
};
