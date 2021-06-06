//stored variables from html id
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');  


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        // need a place to store the output and the answer choices
        var output = [];
        var answers;
            // for each question...
            for(var i=0; i<questions.length; i++){
            //first reset the list of answers
            answers = [];
            //for each available answer to this auestion...
            for(letter in questions[i].answers){
            //...add an html radio puttion
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': ' 
                    + questions[i].answers[letter]
                + '</label>'
            );             
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
        //combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
        
}
function showResults(questions, quizContainer, resultsContainer){
    //gather answer continers from the quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //seek track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    //for each question...
    for(var i=0; i<questions.length; i++){
        //find slected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        //if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            //color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          userAnswer = false 
          return submitButton 
        }               
    }
    // show number of correct answers out of a total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length; 
} 
        // show the questions
        showQuestions(questions, quizContainer);

        //when user clicks submit, show results
        submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

    var myQuestions = [
        {
            question : "Inside which HTML element do we put the JavaScript?",
            answers: {
                a: '<script>',
                b: '<scripting>',
                c: '<js>',
                d: '<javascript>'
            },
            correctAnswer: 'a'
    
        },
        {
            question : "Who invented JavaScript?",
            answers: {
                a: 'Douglas Crockford',
                b: 'Sheryl Sandberg',
                c: 'Brendan Eich'
            },
            correctAnswer: 'c'
        },
        {
            question : "Where is the correct place to insert a JavaScript?",
            answers : {
                a: 'The <body>section', 
                b: 'The <head>section',
                c: 'Both the <head>section and the <body>section'
            },
            correctAnswer: "c"
        },
    ];
    // myQuestions.sort();// myquestion array is modified
    console.log(myQuestions);

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    console.log(generateQuiz);


// function showResults(){}

//     // display quiz right away
//    buildQuiz();

    // // on submit, show results
    // submitButton.addEventListener('click', showResults); 
    //    console.log('Does the button work?');
  
    
   