/**************************************************
*            Create Global Variable               *
**************************************************/
// make var to count correct answers
var rightAnswers = 0;
// make var to count wrong answer
var wrongAnswers = 0;
// make var to hold current question number count
var currentQuestion = 0;
// Make variable to hold user inputted Answer
var userAnswer;
// Make a variable to hold current
var time;
// Make variable to hold current time remaining
var remainingTime;
// make var to hold whether answer has been answered or not T/F
var answered;

/**************************************************
*        Objects Containing Questions             *
**************************************************/
// create object containing questions, choices, correct/wrong answer msgs, and correct/wrong images.
var questionChoices = [{
        question: 'Name Thors Hammer!',
        answers: [ 'Hammer of Lightning', 'Thor Jr', 'Jolnia', 'Mjolnir' ],
        correctAnswer: 3,
        correctImage: 'assets/images/thor_right.gif',
        wrongImage: 'assets/images/thor_wrong.gif',
        timeImage: 'assets/images/thor_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Mjolnir',
        timesUp: 'Times up! The right answer was Mjolnir'
    },
    {
        question: 'Whats Captain Americas shield made of?',
        answers: [ 'Titanium Alloy', 'Mithril', 'Vibranium', 'Adamantium',],
        correctAnswer: 2,
        correctImage: 'assets/images/captain_right.gif',
        wrongImage: 'assets/images/captain_wrong.gif',
        timeImage: 'assets/images/captain_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Vibranium',
        timesUp: 'Times up! The right answer was Vibranium'
    },
    {
        question: 'What power source does Iron Mans Suit use?',
        answers: [ 'Solar Power', 'Arc Reactor', 'Nuclear Power', 'The Power of Justice',],
        correctAnswer: 1,
        correctImage: 'assets/images/ironman_right.gif',
        wrongImage: 'assets/images/ironman_wrong.gif',
        timeImage: 'assets/images/ironman_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Arc Reactor',
        timesUp: 'Times up! The right answer was Arc Reactor'
    },
    {
        question: 'Who has appeared in every Marvel Cinematic Universe Film?',
        answers: [ 'Robert Downey Jr', 'Stanley Leonard', 'Stan Lee', 'Mr. Rogers' ],
        correctAnswer: 2,
        correctImage: 'assets/images/stanlee_right.gif',
        wrongImage: 'assets/images/stanlee_wrong.gif',
        timeImage: 'assets/images/stanlee_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Stan Lee',
        timesUp: 'Times up! The right answer was Stan Lee'
    },
    {
        question: 'Who Plays Spider-man is Spider-Man homecoming?',
        answers: [ 'Tom Holland', 'Tobey Maguire', 'Andrew Garfield', 'Drake Bell' ],
        correctAnswer: 0,
        correctImage: 'assets/images/spiderman_right.gif',
        wrongImage: 'assets/images/spiderman_wrong.gif',
        timeImage: 'assets/images/spiderman_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Tom Holland',
        timesUp: 'Times up! The right answer was Tom Holland'
    },
    {
        question: 'What brother and sister pair from the comics were revealed in the post-credits scene for Captain America: The Winter Soldier?',
        answers: [ 'Sue Storm and Johnny Storm', 'Andrea and Andreas Von Strucker', 'Satana and HellStorm', 'Quick Silver and Scarlet Witch',],
        correctAnswer: 3,
        correctImage: 'assets/images/scarquick_right.gif',
        wrongImage: 'assets/images/scarquick_wrong.gif',
        timeImage: 'assets/images/scarquick_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Quick Silver and Scarlet Witch',
        timesUp: 'Times up! The right answer was Quick Silver and Scarlet Witch'
    },
    {
        question: 'What song does baby Groot dance to at the end of Guardians of the Galaxy?',
        answers: [ 'Wanna Be Starting Something, Michael Jackson', 'Want You Back, The Jackson 5', 'Uptight, Stevie Wonder', 'O-O-h Child, Five Stair steps',],
        correctAnswer: 1,
        correctImage: 'assets/images/groot_right.gif',
        wrongImage: 'assets/images/groot_wrong.gif',
        timeImage: 'assets/images/groot_timesup.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong, The right answer was Want You Back, The Jackson 5',
        timesUp: 'Times up! The right answer was Want You Back, The Jackson 5'
    }

];

/**************************************************
*            Start of Game Functions              *
**************************************************/

// Create start game function to hold start game button when game page initially loads.
function startGame() {

    // Create On Click event to clear the button and start the game with first question
    $('.btn-startGame').on('click', function() {
       
        // empty question container once start game button is clicked to remove button
        $('.questionsContainer').empty();
            console.log('Succesfully emptied start button to replace with questions');
       
        // call askedQuestion function to create first questions
        askedQuestion();
    });
}

/**************************************************
*              Question Creation                  *
**************************************************/

//create function to generate question and display it after start game is pressed
function askedQuestion() {
    
    // empty question container at the beginning of every new question
    $('.questionsContainer').empty();
    
    // create new variable to retrieve question from object in order
    var chosenQuestion = questionChoices[currentQuestion].question;
    console.log('Current Question #:' + currentQuestion);
    
    // create new div to display question
    var questionDiv = $('<div>');
    
    //Add a class to new div for css
	questionDiv.addClass('question');
    
    //Add text to question using retrieved question from object
	questionDiv.text(chosenQuestion);
    
    //Add question to DOM using append
    $('.questionsContainer').append(questionDiv);
    console.log('Question Succesffuly Added');

    // make a for loop to create list of answers
    for ( var i = 0; i < questionChoices.length; i++ ) {
        
        //create new variable to retrieve answers from object in order
        var choices = questionChoices[currentQuestion].answers[i];
        
        // create new div to display answers
        var answerDiv = $('<div>');
        
        //Add a class to new div for css
		answerDiv.addClass('answers');
        
        //Add a attr to retrieve the value of each answer for later
		answerDiv.attr({'data-type': i });
        
        //Add text to answers using retrieved answers from object
		answerDiv.text(choices);
        
        //Add answers to DOM using append
        $('.questionsContainer').append(answerDiv);
        console.log('Answer Choices Succesfully Added');
    }
    
    //Call start time function to create a timer for each question
    startTimer();
    
    //Create on click for user answer
	$('.answers').on('click',function(){
        
        //Store users event click in userAnswer variable
        userAnswer = $(this).data('type');
        
        // Stop time when user picks an answer
        clearInterval(remainingTime);
        
        // Calls check Answer function to see if user guess is correct
		checkAnswer();
	});

}

/**************************************************
*                 Check Answer                    *
**************************************************/

// Create a function to check whether user answer is correct/wrong or no input
function checkAnswer() {
    console.log('Checking Answer Now');
    // create a variable to hold the correct answer choice
    var rightAnswerIndex = questionChoices[currentQuestion].correctAnswer;
    
    // create a variable to hold the correct answer message
    var rightMsgIndex = questionChoices[currentQuestion].youreRight;
    
    // create a variable to hold the wrong answer choice message
    var wrongMsgIndex = questionChoices[currentQuestion].youreWrong;

    // create a variable to hold the times up message
    var timeUpMsgIndex = questionChoices[currentQuestion].timesUp;
    
    // create a variable to hold the right answer image
    var correctImg = questionChoices[currentQuestion].correctImage;
    
    // create a variable to hold the wrong answer image
    var wrongImg = questionChoices[currentQuestion].wrongImage;

    // create a variable to hold the times up answer image
    var timeImg = questionChoices[currentQuestion].timeImage;

    // empty container of questions and answers after user chooses an answer
    $('.questionsContainer').empty();

    // if state to check whether user answer is correct
    if(userAnswer === rightAnswerIndex && (answered === true) ) {
        
        // increment right answers to display to user later
        rightAnswers++;
        console.log('You Got It Right');
        
        // create new image to hold correct image
        var rightImg = $('<img>');

        // add class to new img for css
        rightImg.addClass('rightImg');

        // add attribute to right image to retrieve the image
        rightImg.attr('src',correctImg);

        // append the image to the html
        $('.questionsContainer').append(rightImg);
        console.log('Right Answer Image Succesfully Added');
        
        //Create new div for right answer message
		var rightDiv = $('<div>');
        
        //Give new div a class for css
		rightDiv.addClass('rightAnswer');
        
        //adds correct answer message to player
		rightDiv.text(rightMsgIndex);
        
        //Add answer to DOM to display on html
		$('.questionsContainer').append(rightDiv);
        console.log('Right Answer Message Successfully Added');
        
        //Add 1 to question count to move to the next question
        currentQuestion+=1;       
    } 
    
    // else statement if the user answer is incorrect
    else if (userAnswer !== rightAnswerIndex && (answered === true) ){
        
        // add counter to wrong answers to display later
        wrongAnswers++;
        console.log('You Got it Wrong');
        
        // creat new img to display wrong answer image
        var incorrectImg = $('<img>');
        
        // add class to new img for css
        incorrectImg.addClass('wrongImg');
        
        // add attr to new img to retrieve wrong answer image from object
        incorrectImg.attr('src', wrongImg);
        
        // add wrong answer to DOM to display on htmll
        $('.questionsContainer').append(incorrectImg);
        console.log('Wrong Answer Image Successfully Added');
        
        // create new Div to display wrong answer message
		var wrongDiv = $('<div>');
        
        //Give new Div a class for css
		wrongDiv.addClass('wrongAnswer');
        
        //adds wrong answer message to player
		wrongDiv.text(wrongMsgIndex);
        
        //add wrong answer to DOM to display on HTML
        $('.questionsContainer').append(wrongDiv);
        console.log('Wrong Answer Message Successfully Added');
        
        // add to current question counter
        currentQuestion+=1;
    }
    // else statement for when a user does not choose an answer	
    else {
        // add counter to wrong answers to display later
        wrongAnswers++;
        console.log('Times Up!');
        
        // creat new img to display wrong answer image
        var timeUpImg = $('<img>');
        
        // add class to new img for css
        timeUpImg.addClass('timeUpImg');
        
        // add attr to new img to retrieve wrong answer image from object
        timeUpImg.attr('src', timeImg);
        
        // add wrong answer to DOM to display on htmll
        $('.questionsContainer').append(timeUpImg);
        console.log('Times Up Image Successfully Added');
        
        // create new Div to display wrong answer message
		var timeUpDiv = $('<div>');
        
        //Give new Div a class for css
		timeUpDiv.addClass('timeUp');
        
        //adds wrong answer message to player
		timeUpDiv.text(timeUpMsgIndex);
        
        //add wrong answer to DOM to display on HTML
        $('.questionsContainer').append(timeUpDiv);
        console.log('Times Up! Message Successfully Added');
        
        // re state answer true to proceed to next question to start timer back up
        answered === true;

        // add to current question counter
        currentQuestion+=1;
    }

    // if statement to check whether there are more questions left
    if(currentQuestion <= 6){
        // If there are more questions left set time out to proceed to next question
		setTimeout(askedQuestion, 4000);
		
    } 
    // else statement if there are no more questions
    else{
        // if there are no more questions set time out to proceed to results screen
        setTimeout(finalResults, 4000);
	}

}

/**************************************************
*          Start Functions for Timer              *
**************************************************/

// Create function to start timer
function startTimer(){
    // empties timer container for new progress bar each question
    $('#timer').empty();

    // have time variable start at 15 
    time = 100;    
    
    //Progress Bar using bootstrap 3
    
    // create new div to hold time remaining
    var timeRemaining = $('<div>');
    
    //Add class to time remaining and progress bar for css
	timeRemaining.addClass('timeRemaining');
	timeRemaining.addClass('progress');
    
    // create new div to hold bootstrap 3 striped and animated red bar
    var progressBar = $('<div>');

    //Add class with bootstrap 3 classes to give css to progress bar
	progressBar.addClass('progress-bar progress-bar-danger progress-bar-striped active');
    
    //Create size of Progress bar on screen
    progressBar.width(time + '%');

    //Add time remaining and progress bar to DOM to display on HTML
	$('#timer').append(timeRemaining);
	$('.timeRemaining').append(progressBar);	
    
    // Timer running while answered is true
    answered = true;
    
    //sets timer to go down
	remainingTime = setInterval(startDecrement, 1000);
}

function startDecrement(){

    //Create size of progress bar on screen and show the decrement as it happens to the bar
    $('.progress-bar').width(time + '%');

    //Decrement time by 5 each iteration of timer decrement
	time-=5;
    
    // If statement for when timer runs below 1
    if(time === -10){
        
        // Once timer hits 0 it stops the time
        clearInterval(remainingTime);
        
        //Timer is stopped while false
        answered = false;
        
        // Call check answer
		checkAnswer();
	}
}

/**************************************************
*        Final Score and Restart Button           *
**************************************************/

// create function for final results and restart button
function finalResults() {
    console.log('Final Results Successfully Added');

    // empty container to proceed to display final results
    $('.questionsContainer').empty();

    // empty timer container to remove time remaining from final results
    $('#timer').empty();

    // creat new Div to display final results
    var finalDiv = $('<div>');
    
    // Give new Div a class for css
    finalDiv.addClass('score');

    // make html text you want displayed
	finalDiv.html('<h2>Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers + '<br></h2>');
    
    // add final results to DOM to display on HTML
    $('.questionsContainer').append(finalDiv);

	//creat new button for play again/restart button
	var restartBtn = $('<button>');
    
    //Give new button a class for css
	restartBtn.addClass('btn btn-danger btn-lg btn-restart');
    
    //Display text on button saying Play Again?
	restartBtn.text('Play Again?');
    
    //Add button to the DOM to display on HTML
	$('.questionsContainer').append(restartBtn);
    
    //Reset all values for fresh start
	timer = 0;
	currentQuestion = 0;
	rightAnswers = 0;
    wrongAnswers = 0;

    // On click event for when player chooses to play again
    $('.btn-restart').on('click',function(){

        // If player chooses to play again empty final results from container
		$('.questionsContainer').empty()
        console.log("Successfully Restarted");
        //Game restarts from the first question by calling the asked question function
		askedQuestion();
	});

}


startGame();