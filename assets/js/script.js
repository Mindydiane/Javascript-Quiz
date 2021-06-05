//stored variables from html id
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//function to generate quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        console.log('generateQuiz');
        console.log('showResults');
        // code will go here
    }    


    function showResults(questions, quizContainer, resultsContainer){
        // code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function(){
    showResults(questions,quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: '<script>',
            b: '<scripting>',
            c: '<js>',
            d: '<javascript>'
        },
        correctAnswer: 'a'

    },
]