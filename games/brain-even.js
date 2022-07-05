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
} from '../src/index.js';

const isEven = (num) => (!Number.isNaN(+num) ? +num % 2 === 0 : false);
const getRandomNumber = () => Math.round(Math.random() * 100) + 1;

export default () => {
  showWelcomeText();

  const name = getUserName();

  showQuestionsTitle('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;

  while (counter < QUESTIONS_NUMBER) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    showQuestionText(randomNumber);

    const answer = getAnswer();

    counter += 1;

    if (correctAnswer !== answer) {
      return showWrongAnswerText(name, answer, correctAnswer);
    }

    showRightAnswerText();
  }

  return showCongratsText(name);
};
