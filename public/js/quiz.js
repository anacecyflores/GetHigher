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
  // console.log(option1.dataset.total);
  // console.log($(option1).data());
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option4.setAttribute('data-total', `${option4Total}`);
  option5.setAttribute('data-total', `${option5Total}`);
  option1.innerHTML = `${Object.keys(questions[index].aptitudes)[0]}`;
  option2.innerHTML = `${Object.keys(questions[index].aptitudes)[1]}`;
  option3.innerHTML = `${Object.keys(questions[index].aptitudes)[2]}`;
  option4.innerHTML = `${Object.keys(questions[index].aptitudes)[3]}`;
  option5.innerHTML = `${Object.keys(questions[index].aptitudes)[4]}`;
  // console.log(questions[index]);
  // console.log(Object.values(questions[index].aptitudes));
  // console.log(Object.values(questions[index].aptitudes)[0]);
  // console.log(Object.keys(questions[index].aptitudes.agree));
  // console.log(Object.keys(questions[index].aptitudes)[0]);
  // let answerOne = Object.values(questions[index].aptitudes);
  // answerOne.forEach((one) => {
  //   console.log(Object.values(one)), console.log(Object.keys(one));
  // });
  // console.log(Object.values(jobs));
  // let aptKey =
  // let choiceOne = Object.values(questions[index].aptitudes)[0];
  // let choiceTwo = Object.values(questions[index].aptitudes)[1];
  // answer1Total.push(choiceOne);
  // answer1Total.push(choiceTwo);
  // console.log(answer1Total);

  // let jobArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // let healthScore = 0;
  // let businessScore = 0;
  // let pharmScore = 0;
  // let engineeringScore = 0;
  // let computertechScore = 0;
  // let aerospaceScore = 0;
  // let legalScore = 0;
  // let marketingScore = 0;
  // let telecommScore = 0;
  // let energyScore = 0;
  // let manufacturingScore = 0;
  // let educationScore = 0;

  // console.log(Object.values(questions[index].aptitudes)[0]);
  // let vals = Object.values(questions[index].aptitudes)[0];
  // console.log(Object.keys(vals));
  // let v = Object.keys(vals);
  // console.log(v[0]);

  // for (i = 0; i < v; i++) {
  //   // console.log(v[i]);
  //   if (v[i] == 'healthcare') {
  //     healthScore++;
  //   }
  //   if (v[i] == 'businessfinance') {
  //     businessScore++;
  //   }
  //   if (v[i] == 'pharmaceutical') {
  //     pharmScore++;
  //   }
  //   if (v[i] == 'engineering') {
  //     engineeringScore++;
  //   }
  //   if (v[i] == 'computertechfinance') {
  //     computertechScore++;
  //   }
  //   if (v[i] == 'aerospace') {
  //     aerospaceScore++;
  //   }
  //   if (v[i] == 'legal') {
  //     legalScore++;
  //   }
  //   if (v[i] == 'marketing') {
  //     marketingScore++;
  //   }
  //   if (v[i] == 'telecomm') {
  //     telecommScore++;
  //   }
  //   if (v[i] == 'energy') {
  //     energyScore++;
  //   }
  //   if (v[i] == 'manufacturing') {
  //     manufacturingScore++;
  //   }
  //   if (v[i] == 'education') {
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
  // const answerScore = Number(
  //   selectedOption.nextElementSibling.getAttribute('data-total')
  // );
  const answerScore =
    selectedOption.nextElementSibling.getAttribute('data-total');

  ////Add the answer score to the score array
  // score.concat(answerScore) ||
  score.push(answerScore);
  console.log(score);

  //-------------
  // $(function () {
  //   var match = score.split(', ');
  //   console.log(match);
  //   for (var a in match) {
  //     var variable = match[a];
  //     console.log(variable);
  //   }
  // });
  //-------------

  selectedAnswersData.push();

  const totalScore = score.reduce(
    (total, currentNum) => total + ',' + currentNum
  );
  // console.log(totalScore);
  // console.log(totalScore.length);
  let splitScore = totalScore.split(',');
  // console.log(splitScore[0]);
  // console.log(splitScore.length);

  // for (i = 0; i < splitScore.length; i++) {}

  //-------------------------------

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

  for (i = 0; i < splitScore.length; i++) {
    // console.log(v[i]);
    if (splitScore[i] == 'healthcare') {
      healthScore++;
    }
    if (splitScore[i] == 'businessfinance') {
      businessScore++;
    }
    if (splitScore[i] == 'pharmaceutical') {
      pharmScore++;
    }
    if (splitScore[i] == 'engineering') {
      engineeringScore++;
    }
    if (splitScore[i] == 'computertechfinance') {
      computertechScore++;
    }
    if (splitScore[i] == 'aerospace') {
      aerospaceScore++;
    }
    if (splitScore[i] == 'legal') {
      legalScore++;
    }
    if (splitScore[i] == 'marketing') {
      marketingScore++;
    }
    if (splitScore[i] == 'telecomm') {
      telecommScore++;
    }
    if (splitScore[i] == 'energy') {
      energyScore++;
    }
    if (splitScore[i] == 'manufacturing') {
      manufacturingScore++;
    }
    if (splitScore[i] == 'education') {
      educationScore++;
    }
  }
  console.log(
    healthScore,
    businessScore,
    pharmScore,
    engineeringScore,
    computertechScore,
    aerospaceScore,
    legalScore,
    marketingScore,
    telecommScore,
    energyScore,
    manufacturingScore,
    educationScore
  );
  // let industryChoice = Math.max(
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
  // console.log(industryChoice);

  // //--------------------------
  // mode(splitScore);
  // function mode(splitScore) {
  //   if (splitScore.length == 0) return null;
  //   var modeMap = {};
  //   var maxEl = splitScore[0],
  //     maxCount = 1;
  //   for (var i = 0; i < splitScore.length; i++) {
  //     var el = splitScore[i];
  //     if (modeMap[el] == null) modeMap[el] = 1;
  //     else modeMap[el]++;
  //     if (modeMap[el] > maxCount) {
  //       maxEl = el;
  //       maxCount = modeMap[el];
  //     }
  //   }
  //   return maxEl, escapeFunction(maxEl);
  // }
  // function escapeFunction(maxEl) {
  //   console.log(maxEl);
  // }
  // //-------------------------------

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
      return maxEl, escapeFunction(maxEl);
    }
    function escapeFunction(maxEl) {
      console.log(maxEl);
      // }
      //-------------------------------
      container.style.display = 'none';
      result.innerHTML = `<h1 class="final-score">Your Results: ${maxEl}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p> Based on your answers, you would do well in the ${maxEl} Industry
        </div>
        <button class="restart">Restart Quiz</button>
         `;
      return;
    }
  }
  generateQuestions(currentQuestion);
}

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

const init = () => {
  promptUser()
    .then((data) =>
      fs.writeFileSync('./generated.html', generateMarkdown(data))
    )
    .then(() => console.log('Successfully Displayed Quiz Results!'))
    .catch((err) => console.error(err));
};
