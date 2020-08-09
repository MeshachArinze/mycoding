const myQuestion = document.getElementById('question');

const choices =  document.getElementsByClassName('choice_text');
console.log(Array.from(choices))

let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
}


