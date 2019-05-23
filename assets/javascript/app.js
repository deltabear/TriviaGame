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
            a:'b',
            c:'d',
            e:'f',
            g:'h',
            }],
    q2: ["Who provided the voice for Arcee, the first female Transformer?"],
    answers2:
            [{
            a: 'b2',
            c: 'd2',      
            }]
};

var correctAnswers;
var wrongAnswers;[]
var intervalId;

/*Functions */
//test
console.log(questions.q2);

function startGame(){
} function gamePlay(){
    $('.startBtn').on('click', function(){
        $('button').remove('.startBtn');
        quest1(); 
    });
}
function quest1()
{
    //create new div and place inside startBtn
    var newDiv = $('<div class="quest q1">');
    newDiv.html(questions.q1);
    $('#time-left').apppend(newDiv);
    intervalID = setInterval(timeCount,1000);
}
function timeCount(){
    var timeDiv = $('<div class="time-left">')
    timeDiv.html('Time Remaining:' + time);
    $('#time-left').apppend(timeDiv);

    time--;
    //test
    console.log(time);
    //clears and stops time
    $('div').remove('.time-left')
    if(time === 0)
    {
        clearInterval(intervalId);
        //debug
        console.log(true);
    }
}