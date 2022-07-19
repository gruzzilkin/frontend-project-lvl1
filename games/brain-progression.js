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

const PROGRESSION_LENGTH = {
  MIN: 5,
  MAX: 10,
};
const getProgressionLength = () => getRandomNumber(PROGRESSION_LENGTH.MIN, PROGRESSION_LENGTH.MAX);
const generateProgression = (length) => {
  const progression = [];
  const progressionStep = getRandomNumber(1, 10);

  let nextProgressionNumber = getRandomNumber(1, 100 - progressionStep);
  let counter = 0;

  while (counter < length) {
    progression.push(nextProgressionNumber);
    nextProgressionNumber += progressionStep;

    counter += 1;
  }

  return progression;
};

export default () => {
  showWelcomeText();

  const name = getUserName();

  showQuestionsTitle('What number is missing in the progression?');

  let counter = 0;

  while (counter < QUESTIONS_NUMBER) {
    const progressionLength = getProgressionLength();
    const progression = generateProgression(progressionLength);
    const progressionIndex = getRandomNumber(0, progressionLength - 1);
    const progressionString = progression.join(' ').replace(progression[progressionIndex], '..');
    const correctAnswer = progression[progressionIndex];

    showQuestionText(progressionString);

    const answer = +getAnswer();

    counter += 1;

    if (correctAnswer !== answer) {
      return showWrongAnswerText(name, answer, correctAnswer);
    }

    showRightAnswerText();
  }

  return showCongratsText(name);
};
