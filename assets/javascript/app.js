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
        question: 'Name Thors Hammer',
        answers: [ 'Hammer of Lightning', 'Thor Jr', 'Jolnia', 'Mjolnir' ],
        correctAnswer: 3,
        correctImage: 'assets/images/Thors_Hammer.jpg',
        wrongImage: 'assets/images/thor_wrong.gif',
        youreRight: 'You got it Right',
        youreWrong: 'You got it Wrong'
    },
    {
        question: 'How many realms are there in the Marvel Universe',
        answers: [ '5 Realms', '10 Realms', '9 Realms', '7 Realms',],
        correctAnswer: 2,
        youreRight: 'You got it Right'
    },
    {
        question: 'Who has appeared in every Marvel Cinematic Universe Film',
        answers: [ 'Robert Downey Jr', 'Stanley Leonard', 'Stan Lee', 'Mr. Rogers' ],
        correctAnswer: 2,
        youreRight: 'You got it Right'
    },
    {
        question: 'Who Plays Spider-man is Spider-Man homecoming',
        answers: [ 'Tom Holland', 'Tobey Maguire', 'Andrew Garfield', 'Drake Bell' ],
        correctAnswer: 0,
        youreRight: 'You got it Right'
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
    
    // create a variable to hold the right answer image
    var correctImg = questionChoices[currentQuestion].correctImage;
    
    // create a variable to hold the wrong answer image
    var wrongImg = questionChoices[currentQuestion].wrongImage;

    // empty container of questions and answers after user chooses an answer
    $('.questionsContainer').empty();

    // if state to check whether user answer is correct
    if(userAnswer == rightAnswerIndex && (answered = true) ) {
        
        // increment right answers to display to user later
        rightAnswers++;
        console.log('You Got It Right');
        
        // create new image to hold correct image
        var rightImg = $('<img>');

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
    else if (userAnswer != rightAnswerIndex && (answered = true) ){
        
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
        
        // re state answer true to proceed to next question to start timer back up
        answered = true

        // add to current question counter
        currentQuestion+=1;
    }

    // if statement to check whether there are more questions left
    if(currentQuestion <= 3){
        // If there are more questions left set time out to proceed to next question
		setTimeout(askedQuestion, 3000);
		
    } 
    // else statement if there are no more questions
    else{
        // if there are no more questions set time out to proceed to results screen
        setTimeout(finalResults, 3000);
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
    $('.resetBtn').on('click',function(){

        // If player chooses to play again empty final results from container
		$('.questionsContainer').empty()
        
        //Game restarts from the first question by calling the asked question function
		askedQuestion();
	});

}


startGame();