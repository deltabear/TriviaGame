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
  
    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })

    //questions and answers data
    let trivia = 
    {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 15,
        timerOn: false,
        timerId : '',
        //Questions and Answers
        questions: {
            q1: 'In what year did The Transformers cartoon premier?',
            q2: 'Who provided the voice for Arcee in the 1986 movie?',
            q3: 'What was the name of the sequel series to the first Transformers cartoon?',
            q4: 'Who is the character usually seen leading the Autobots?',
            q5: 'This live-action Transformers flick directed by Travis Knight shares the name of the Autobot starring in it. The film is:'
        },
        choices: {
            q1: ['1989', '1984', '1980', '1985'],
            q2: ['Tress MacNeille','June Foray', 'Susan Blu','Lucille Bliss'],
            q3: ['Beast Wars', 'Transformers Gen 2', 'Beast Machines', 'Armada'],
            q4: ['Ultra Magnus', 'Optimal Prime', 'Omega Supreme', 'Optimus Prime'],
            q5: ['Waspinator', 'Honeybee', 'Bumblebee', 'Ant-man and the Waspinator']
        },
        answers: {
            q1: '1984',
            q2: 'Susan Blu',
            q3: 'Beast Wars',
            q4: 'Optimus Prime',
            q5: 'Bumblebee'
        },
        answerImages: {
            q1: 'assets/images/tf-G1.jpg',
            q2: 'assets/images/Arcee.jpg',
            q3: 'assets/images/beastWars.jpg',
            q4: 'assets/images/TF-OP.jpg',
            q5: 'assets/images/bumblebee.jpg',
        },
         // trivia methods
        // method to initialize game
        startGame: function(){
            // restarting game results
            trivia.currentSet = 0;
            trivia.correct = 0;
            trivia.incorrect = 0;
            trivia.unanswered = 0;
            clearInterval(trivia.timerId);
    
            // show game section
            $('#game').show();
    
            //  empty last results
            $('#results').html('');
            
            // show timer
            $('#timer').text(trivia.timer);
            
            // remove start button
            $('#start').hide();

            $('#remaining-time').show();
    
            // ask first question
            trivia.nextQuestion();
    
        },
        // method to loop through and display questions and options 
        nextQuestion : function(){
            
            // set timer to 15 seconds each question
            trivia.timer = 15;
            $('#timer').removeClass('last-seconds');
            $('#timer').text(trivia.timer);
            
            // to prevent timer speed up
            if(!trivia.timerOn){
            trivia.timerId = setInterval(trivia.timerRunning, 1000);
            }
            
            // gets all the questions then indexes the current questions
            var questionContent = Object.values(trivia.questions)[trivia.currentSet];
            $('#question').text(questionContent);
            
            // an array of all the user choices for the current question
            var questionChoices = Object.values(trivia.choices)[trivia.currentSet];
            
            // creates all the trivia guess options in the html
            $.each(questionChoices, function(index, key){
            $('#choices').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
            })
            
        },
        // method to decrement counter and count unanswered if timer runs out
        timerRunning : function(){
            // if timer still has time left and there are still questions left to ask
            if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $('#timer').text(trivia.timer);
            trivia.timer--;
                if(trivia.timer === 4){
                $('#timer').addClass('last-seconds');
                }
            }
            // the time has run out and increment unanswered, run result
            else if(trivia.timer === -1){
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 5*1000);
            $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] + '<p><img src="'+ Object.values(trivia.answerImages)[trivia.currentSet]+'"></p>'+'</h3>');
            }
            // if all the questions have been shown end the game, show results
            else if(trivia.currentSet === Object.keys(trivia.questions).length){
            
            // adds results of game (correct, incorrect, unanswered) to the page
            $('#results')
                .html('<h3>Thank you for playing!</h3>'+
                '<p>Correct: '+ trivia.correct +'</p>'+
                '<p>Incorrect: '+ trivia.incorrect +'</p>'+
                '<p>Unaswered: '+ trivia.unanswered +'</p>'+
                '<p>Please play again!</p>');
            
            // hide game sction
            $('#game').hide();
            
            // show start button to begin a new game
            $('#start').show();
            }
            
        },
        // method to evaluate the option clicked
        guessChecker : function() {
            
            // timer ID for gameResult setTimeout
            var resultId;
            
            // the answer to the current question being asked
            var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
            
            // if the text of the option picked matches the answer of the current question, increment correct
            if($(this).text() === currentAnswer){
            // turn button green for correct
            $(this).addClass('btn-success').removeClass('btn-info');
            
            trivia.correct++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 5*1000);
            $('#results').html('<h3>Correct Answer!</h3>' + '<p><img src="'+ Object.values(trivia.answerImages)[trivia.currentSet]+'"></p>');
            }
            // else the user picked the wrong option, increment incorrect
            else{
            // turn button clicked red for incorrect
            $(this).addClass('btn-danger').removeClass('btn-info');
            
            trivia.incorrect++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 5*1000);
            $('#results').html('<h3>Better luck next time! The answer was '+ currentAnswer + '<p><img src="'+ Object.values(trivia.answerImages)[trivia.currentSet]+'"></p>'+'</h3>');
            }
            
        },
        // method to remove previous question results and options
        guessResult : function(){
            
            // increment to next question set
            trivia.currentSet++;
            
            // remove the options and results
            $('.option').remove();
            $('#results h3').remove();
            $('#results img').remove();
            
            // begin next question
            trivia.nextQuestion();
            
    }

}