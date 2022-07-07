import readlineSync from 'readline-sync';

export const showWelcomeText = (text = 'Welcome to the Brain Games!') => console.log(text);

export const showQuestionsTitle = (text = 'Please answer the questions') => console.log(text);

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

export const showQuestionText = (text) => console.log(`Question: ${text}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const showWrongAnswerText = (name, answer, correctAnswer) => console.log(
  `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  `Let's try again, ${name}!`,
);

export const showRightAnswerText = (text = 'Correct!') => console.log(text);

export const showCongratsText = (name, text = `Congratulations, ${name}!`) => console.log(text);

export const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min)) + min;
