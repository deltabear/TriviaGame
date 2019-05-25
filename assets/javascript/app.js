//Create trivia game
// Player will press button on start screen that begins Game
//Ask player timed questions with JavaScript timed events (30 seconds)
    //Question is shown until user answers or time runs out
    //IF player selects correct answer, congratulations screen for several seconds
    // after which the next question will be displayed w/o user input
// IF player runs out of time during question, inform player that time is up and display correct answer for
// several seconds
// IF player chooses incorrect answer, inform player that answer was wrong AND display correct answer for several
// seconds
// On FINAL SCREEN show player the number of correct and incorrect answers, AND option to restart game
$(document).ready(function(){

    $('button').click(function(){
    trivia.startGame});
    })

    //Variables
    var score = 0;
    var time = 20;

    //questions and answers data
    let questions = 
    {
        q1: ["In what year did The Transformers cartoon premier?"],
        choices1:
                [{
                A: '1989',
                B: '1984',
                C: '1980',
                D: '1985',
                answer: 'b',
                }],
        q2: ["Who provided the voice for Arcee, the first female Transformer in the 1986 movie?"],
        choices2:
                [{
                A: 'Tress MacNeille',
                B: 'June Foray',
                C: 'Susan Blu',
                D: 'Lucille Bliss',
                answer: 'c',
                }], 
    };

    let lastQuestionIndex = questions.length - 1;
    let runningQuestionIndex = 0;

    function renderQuestion(){
        let q = questions[runningQuestionIndex];
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q1.choices1.a;
        choiceB.innerHTML = q1.choices1.b;
        choiceC.innerHTML = q1.choices1.c;
        choiceD.innerHTML = q1.choices1.d;
    }

    var correctAnswers;
    var wrongAnswers;[]
    var intervalId;

/*Functions */
//test
//console.log(questions.q2)