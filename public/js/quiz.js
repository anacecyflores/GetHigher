let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length - 1;

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
//buttonS to quicksearch page
const qsBtn = document.querySelector('#qs-btn');

function generateQuestions(index) {
  const question = questions[index];
  let option1Total = [];
  let option2Total = [];
  let option3Total = [];
  let option4Total = [];
  let option5Total = [];

  option1Total.push(
    ...Object.keys(Object.values(questions[index].aptitudes)[0])
  );

  option2Total.push(
    ...Object.keys(Object.values(questions[index].aptitudes)[1])
  );

  option3Total.push(
    ...Object.keys(Object.values(questions[index].aptitudes)[2])
  );

  option4Total.push(
    ...Object.keys(Object.values(questions[index].aptitudes)[3])
  );

  option5Total.push(
    ...Object.keys(Object.values(questions[index].aptitudes)[4])
  );
  //populates the html elements for question
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute('data-total', `${option1Total}`);
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option4.setAttribute('data-total', `${option4Total}`);
  option5.setAttribute('data-total', `${option5Total}`);
  option1.innerHTML = `${Object.keys(questions[index].aptitudes)[0]}`;
  option2.innerHTML = `${Object.keys(questions[index].aptitudes)[1]}`;
  option3.innerHTML = `${Object.keys(questions[index].aptitudes)[2]}`;
  option4.innerHTML = `${Object.keys(questions[index].aptitudes)[3]}`;
  option5.innerHTML = `${Object.keys(questions[index].aptitudes)[4]}`;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  const answerScore =
    selectedOption.nextElementSibling.getAttribute('data-total');

  ////Add the answer score to the score array
  score.push(answerScore);
  // console.log(score);

  selectedAnswersData.push();

  const totalScore = score.reduce(
    (total, currentNum) => total + ',' + currentNum
  );
  // console.log(totalScore);
  // console.log(totalScore.length);
  let splitScore = totalScore.split(',');
  // console.log(splitScore[0]);
  // console.log(splitScore.length);

  let healthScore = 0;
  let businessScore = 0;
  let pharmScore = 0;
  let engineeringScore = 0;
  let computertechScore = 0;
  let aerospaceScore = 0;
  let legalScore = 0;
  let marketingScore = 0;
  let telecommScore = 0;
  let energyScore = 0;
  let manufacturingScore = 0;
  let educationScore = 0;

  // for (i = 0; i < splitScore.length; i++) {
  //   if (splitScore[i] == 'Healthcare') {
  //     healthScore++;
  //   }
  //   if (splitScore[i] == 'Business') {
  //     businessScore++;
  //   }
  //   if (splitScore[i] == 'Pharmaceutical') {
  //     pharmScore++;
  //   }
  //   if (splitScore[i] == 'Engineering') {
  //     engineeringScore++;
  //   }
  //   if (splitScore[i] == 'Technology') {
  //     computertechScore++;
  //   }
  //   if (splitScore[i] == 'Aerospace') {
  //     aerospaceScore++;
  //   }
  //   if (splitScore[i] == 'Legal') {
  //     legalScore++;
  //   }
  //   if (splitScore[i] == 'Marketing') {
  //     marketingScore++;
  //   }
  //   if (splitScore[i] == 'Telecomm') {
  //     telecommScore++;
  //   }
  //   if (splitScore[i] == 'Energy') {
  //     energyScore++;
  //   }
  //   if (splitScore[i] == 'Manufacturing') {
  //     manufacturingScore++;
  //   }
  //   if (splitScore[i] == 'Education') {
  //     educationScore++;
  //   }
  // }
  // console.log(
  //   healthScore,
  //   businessScore,
  //   pharmScore,
  //   engineeringScore,
  //   computertechScore,
  //   aerospaceScore,
  //   legalScore,
  //   marketingScore,
  //   telecommScore,
  //   energyScore,
  //   manufacturingScore,
  //   educationScore
  // );

  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    //--------------------------
    mode(splitScore);
    function mode(splitScore) {
      if (splitScore.length == 0) return null;
      var modeMap = {};
      var maxEl = splitScore[0],
        maxCount = 1;
      for (var i = 0; i < splitScore.length; i++) {
        var el = splitScore[i];
        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      return maxEl, escapeFunction(maxEl), dbResults(maxEl);
    }
    function escapeFunction(maxEl) {
      container.style.display = 'none';
      result.innerHTML = `<h1 class="final-score">Your Industry Result: ${maxEl}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p> Based on your answers, you would do well in the ${maxEl} Industry
        </div>
        <a href="/quicksearch" class="qs-btn previous inline-flex items-center justify-center px-2.0 py-1.5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"id="qs-btn" style="">Search Jobs in this Industry</a>
        <button class="restart">Restart Quiz</button>
         `;
      return;
    }
  }
  generateQuestions(currentQuestion);
}

const dbResults = (maxEl) => {
  const quizTaken = 'true';
  const quizResults = maxEl;
  const dbId = document.querySelector('.user-id').id;
  // console.log(dbId);
  // console.log(maxEl);
  if (maxEl != 'null') {
    // console.log(maxEl);
    const response = fetch(`/api/users/quiz/${dbId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizTaken: quizTaken,
        quizResults: quizResults,
      }),
    });
    return response;
  }
};

// //Function to load previous question
// function loadPreviousQuestion() {
//   //Decrement quentions index
//   currentQuestion--;
//   //remove last array value;
//   score.pop();
//   //Generate the question
//   generateQuestions(currentQuestion);
// }

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
// previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);

//quiz results
const init = () => {
  promptUser()
    .then((data) =>
      fs.writeFileSync('./generated.html', generateMarkdown(data))
    )
    .then(() => console.log('Successfully Displayed Quiz Results!'))
    .catch((err) => console.error(err));
};
