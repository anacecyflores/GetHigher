let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.question-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//function that generates questions
function generateQuestions(index) {
  //selects each question by passing it through question index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  const option5Total = questions[index].answer5Total;
  //populates the html elements for question
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute('data-total', `${option1Total}`);
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option4.setAttribute('data-total', `${option4Total}`);
  option5.setAttribute('data-total', `${option5Total}`);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
  option3.innerHTML = `${question.answer3}`;
  option4.innerHTML = `${question.answer4}`;
  option5.innerHTML = `${question.answer5}`;
  console.log(questions[index]);
  console.log(Object.values(questions[index].aptitudes.agree));
  console.log(Object.keys(questions[index].aptitudes.agree));
  console.log(Object.keys(questions[index].aptitudes)[0]);
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  console.log(selectedOption.nextElementSibling);
  const answerScore = Number(
    selectedOption.nextElementSibling.getAttribute('data-total')
  );
  console.log(answerScore);

  ////Add the answer score to the score array
  score.push(answerScore);
  console.log(score);

  selectedAnswersData.push();

  const totalScore = score.reduce((total, currentNum) => total + currentNum);
  console.log(totalScore);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //If the quiz is finished then we hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    result.innerHTML = `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>15 - 21</p>
            <p>10 - 15</p>
            <p>5 - 10</p>
            <p>5</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }
}
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);

const init = () => {
  promptUser()
    .then((data) =>
      fs.writeFileSync('./generated.html', generateMarkdown(data))
    )
    .then(() => console.log('Successfully Displayed Quiz Results!'))
    .catch((err) => console.error(err));
};
