import { QUESTIONS_NUMBER } from '../constants/index.js';

import {
  getUserName,
  showWelcomeText,
  showQuestionsTitle,
  showQuestionText,
  getAnswer,
  showWrongAnswerText,
  showRightAnswerText,
  showCongratsText,
  getRandomNumber,
} from '../src/index.js';

const getGcd = ([num1, num2]) => (num2 === 0 ? num1 : getGcd([num2, num1 % num2]));

export default () => {
  showWelcomeText();

  const name = getUserName();

  showQuestionsTitle('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;

  while (counter < QUESTIONS_NUMBER) {
    const randomNumbers = [getRandomNumber(), getRandomNumber()];
    const correctAnswer = getGcd(randomNumbers);

    showQuestionText(randomNumbers.join(' '));

    const answer = +getAnswer();

    counter += 1;

    if (correctAnswer !== answer) {
      return showWrongAnswerText(name, answer, correctAnswer);
    }

    showRightAnswerText();
  }

  return showCongratsText(name);
};
