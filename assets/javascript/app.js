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

setTimeout(fiveSeconds, 1000 * 5);

function fiveSeconds() {
    $("#time-left").append("<h2>This is a test.</h2>");
    console.log("Hello World!");
  }