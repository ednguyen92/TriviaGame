// make global variables

// make var to count correct answers
var rightAnswers = 0;
// make var to count wrong answer
var wrongAnswers = 0;
var currentQuestion = 0;
var userAnswer;
var timer = 0;


// create object containing questions and choices
var questionChoices = [{
        question: "Name Thor's Hammer",
        answers: [ "Hammer of Lightning", "Thor Jr", "Jolnia", "Mjolnir" ],
        correctAnswer: 3
    },
    {
        question: "Mjolnir",
        answers: [ "5 Realms", "10 Realms", "9 Realms", "7 Realms",],
        correctAnswer: 2
    },
    {
        question: "Who has appeared in every Marvel Cinematic Universe Film",
        answers: [ "Robert Downey Jr", "Stanley Leonard", "Stan Lee", "Mr. Rogers" ],
        correctAnswer: 2
    },
    {
        question: "Who Plays Spider-man is Spider-Man homecoming",
        answers: [ "Tom Holland", "Tobey Maguire", "Andrew Garfield", "Drake Bell" ],
        correctAnswer: 0
    }

];

// Create start game function
function startGame() {
    $(".btn-startGame").on("click", function() {
        $("#questionsContainer").empty();
        console.log("Succesfully emptied start button to replace with questions");
        askedQuestion();
    });
}

function restartGame() {
    $(".btn-startGame").on("click", function() {
        $("#questionsContainer").empty();
        console.log("Succesfully restarted Game");
        startGame();
    });
}

//create function to choose random question and display it after start game is pressed
function askedQuestion() {
    var question = questionChoices[currentQuestion].question;
    var newDiv = $('<div>');
	//Add a class to newDIv
	newDiv.addClass('question');
	//Add text to question
	newDiv.text(question);
	//Add question to DOM
    $('#questionsContainer').append(newDiv);
    console.log("Question Succesffuly Added");
    answerList();

}

function answerList() {
    for ( var i = 0; i < questionChoices.length; i++ ) {
        var choices = questionChoices[currentQuestion].answers[i];
		var newBtn = $('<button>');

		newBtn.addClass('answers');

		newBtn.attr({'data-type': i });

		newBtn.text(choices);

		$('#questionsContainer').append(newBtn);
    }
    startTimer();
	$('.answers').on('click',function(){
        userAnswer = $(this).data('type');
		checkAnswer();
	});
}

function checkAnswer() {
    var rightAnswerIndex = questionChoices[currentQuestion].correctAnswer;
    if(userAnswer == rightAnswerIndex) {
        rightAnswers++;
        currentQuestion++;
        console.log("You Got It Right");
        $("#questionsContainer").empty();
        askedQuestion();

	} else {
        console.log("You Got it Wrong");
    }
}

function startTimer() {
    timer = 15;
    $("#timer").text(timer);
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1500);

}

function showCountdown(){
	timer--;
	$("#timer").text(timer);
	if(timer < 1){
		clearInterval(time);
	}
}

function finalResults() {

}


startGame();