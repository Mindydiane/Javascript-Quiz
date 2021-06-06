//stored variables from html id
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//start section
var start = document.querySelector("#start");

//guide section
// var guide = document.querySelector("#guide");
var exit = document.querySelector("#exit");
var continueBtn = document.querySelector("#continue");

//quiz section

var time = document.querySelector("#time");


var index = 0;

var button = document.createElement("button");

button.innerHtml = "do Something";
console.log(button);

var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            1: '<script>',
            2: '<scripting>',
            3: '<js>',
            4: '<javascript>'
        },
        correctAnswer: '1'

    },
    {
        question: "Who invented JavaScript?",
        answers: {
            a: 'Douglas Crockford',
            b: 'Sheryl Sandberg',
            c: 'Brendan Eich'
        },
        correctAnswer: 'c'
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: 'The <body>section',
            b: 'The <head>section',
            c: 'Both the <head>section and the <body>section'
        },
        correctAnswer: "c"
    },
];

// myQuestions.sort();// myquestion array is modified
// console.log(myQuestions);

function generateQuiz() {
    function showQuestions() {
        // need a place to store the output and the answer choices
        // var output = [];
        // var answers;
        // for each question...
        for (var i = 0; i < questions.length; i++) {
            //first reset the list of answers
            // answers = [];
            //for each available answer to this auestion...
            
                //...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[index].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');

    }

    // show the questions
    showQuestions(questions, quizContainer);

}



function showResults(questions, quizContainer, resultsContainer) {
    //gather answer continers from the quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //seek track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    //for each question...
    for (var i = 0; i < questions.length; i++) {
        //find slected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
        //if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
            //color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answer red
            answerContainers[i].style.color = 'red';

        }
    }
    // show number of correct answers out of a total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

generateQuiz();
console.log(generateQuiz);

//on submit, show results
submitButton.addEventListener('click', showResults);
console.log(submitButton);


// function showResults(){}

//     // display quiz right away
//    buildQuiz();

    // // on submit, show results
    // submitButton.addEventListener('click', showResults); 
    //    console.log('Does the button work?');


