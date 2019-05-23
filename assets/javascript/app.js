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

function fiveSeconds() {
    $("#time-left").append("<h2>This is a test.</h2>");
    console.log("Hello World!");
  }

//Variables
var time = 30;
var score = 0;
var questions = 
{
    q1: ["In what year did The Transformers cartoon premier?"],
     answers1:
            [{
            'a':'b',
            'c':'d',
            'e':'f',
            'g':'h',
            }]
};

var correctAnswers;
var wrongAnswers;[]
var intervalId;

/*Functions */
//test
console.log(questions.answers1[0].c);

function startGame(){
} function gamePlay(){
    $('.startBtn').on('click', function(){
        $('button').remove('.startBtn');
        quest1(); 
    });
}
function quest1()
{
    var newDiv = $('<div class="quest q1">');
    newDiv.html(questions.q1);

    $('.btnContainer').apppend(newDiv);
    intervalID = setInterval(timeCount,1000);
}
function timeCount(){
    time--;
    //test
    console.log(time);
    //clears and stops time
    if(time === 0)
    {}
}