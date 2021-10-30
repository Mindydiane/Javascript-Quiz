//quiz variables
var start = document.querySelector('#start');
var homePage = document.querySelector('.homePage');
var answerBox = document.querySelector('#answerBox');
var instructions = document.querySelector('#instructions');
var correctBox = document.querySelector('#correctBox')
var countDown = 60;
var quizPage = document.querySelector('.quizPage');

var index = 0;

var quizQuestions = [
  

  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: {
      a: 'script',
      b: 'scripting',
      c: 'js',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Who invented JavaScript?',
    answers: {
      a: 'Douglas Crockford',
      b: 'Sheryl Sandberg',
      c: 'Brendan Eich',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: {
      a: 'The <body>section',
      b: 'The <head>section',
      c: 'Both the <head>section and the <body>section',
    },
    correctAnswer: 'c',
  },
];


// console.log(myQuestions);

function showQuestion() {
  questionHeader.innerHTML = quizQuestions[index].question;
  questionOne.innerHTML = quizQuestions[index].answers.a;
  questionTwo.innerHTML = quizQuestions[index].answers.b;
  questionThree.innerHTML = quizQuestions[index].answers.c;

}

// add event listener for the question choices
questionHeader.addEventListener('click', function() {
 
  showQuestion();
});

//verify if the choice is correct or false

//increase score

//increase index

//make sure there is another question

//call show questions again
showQuestion();

// function showResults(questions, quizContainer, resultsContainer) {
//   //gather answer continers from the quiz
//   var answerContainers = quizContainer.querySelectorAll('.answers');
//   //seek track of user's answers
//   var userAnswer = '';
//   var numCorrect = 0;

//   //for each question...
//   for (var i = 3; i < questions.length; i++) {
//     //find slected answer
//     userAnswer = (
//       answerContainers[i].querySelector(
//         'input[name=question' + i + ']:checked'
//       ) || {}
//     ).value;
//     //if answer is correct
//     if (userAnswer === questions[i].correctAnswer) {
//       // add to the number of correct answers
//       numCorrect++;
//       //color the answers green
//       answerContainers[i].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else {
//       // color the answer red
//       answerContainers[i].style.color = 'red';
//     }
//     // show number of correct answers out of a total
//   resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//   }
  


// on.submit, show results
// submitButton.addEventListener('click', showResults);
// console.log(submitButton);

// function showResults(){}

//     // display quiz right away
//    buildQuiz();

// // on submit, show results
// submitButton.addEventListener('click', showResults);
//    console.log('Does the button work?');

start.addEventListener('click', function () {
  homePage.classList.add('hide');
  quizPage.classList.remove('hide');
  showQuestion();
});
