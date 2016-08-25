//initialize variables
'use strict';
var secretNumber, 
userGuess, 
pastGuesses = [], 
count,
guessHtml, 
userFeedback,
alreadyGuessed,
newButton,
form ,
input,
feedback,
countElement,
guessList;

<<<<<<< HEAD
$(document).ready(pageLoad);

 function pageLoad(){
	
=======
$(document).ready(function(){

>>>>>>> d2c983678257dac05efae509140a46474f663b82
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

<<<<<<< HEAD
  	//fetch dom objects
  	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');

    //page load
    newGame();
    //event handlers
    form.submit(function(event){
      event.preventDefault();
      getUserGuess();
    });
    newButton.click(newGame);
}

//new game function
function newGame(){
	form.find('input[type=submit]').css('opacity','1');
	resetVariables();
	render();
	generateNumber();
}

//get the user guess
function getUserGuess(){
	//get the user guess
	userGuess = input.val();
	//reset input value
	input.val('');
	//focus on input for next guess
	input.focus();
	//ensure valid input
	if(checkGuess()){return ;}
	//generate feedback
	generateFeedback();
	//track the past user guesses
	trackGuess();
	//increment the count
	guessCount();
	//render changes to the page
	render();
}

  	//check for valid input
  	function checkGuess(){
  		if(userGuess % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('please choose a number between zero and 100');
  			return true;
  		}
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(userGuess == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}

//generate user feedback
function generateFeedback(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}

//keep track of the users past guesses
function trackGuess(){
	pastGuesses.push(userGuess);
	guessHtml = '';
	if(pastGuesses[0].length) {
		$.each(pastGuesses,function(guess,value){
			guessHtml += '<li>' + value + '</li>';
		});
	}
}

//keep track of guess count
function guessCount(){
	count++;
}

	//page render function
function render(){
	guessList.html(guessHtml);
	countElement.html(count);
	feedback.html(userFeedback);
}

function winner(){
	userFeedback = 'You Won. Click new game to play again';
	form.find('input[type=submit]').css('opacity','0');
}
  	
//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

//reset variable 
function resetVariables(){
	count = 0;
	pastGuesses = [];
	guessHtml='';
	userGuess = '';
	userFeedback = 'Make your Guess!';
}
  	
  	

  


=======
/** My Code **/


//Initialize variables
		var secretNum;
		var guessCount;
		newGame();


// When the user submits a number
		$("form").submit(function(e) {
			e.preventDefault();
			var guess = parseInt($("#userGuess").val());
			feedback(guess); // Feedback on the current guess BEFORE setting it to recent
			lastguess = guess;
			$("#guessList").append("<li>" + guess + "</li>");
			$("form")[0].reset();
		});

// When the user clicks on New Game
		$(".new").click(function() {
			newGame();
		});

});
>>>>>>> d2c983678257dac05efae509140a46474f663b82


function newGame() {
	guessCount = 0;
	$("#userGuess").show();
	$("#guessButton").show();
	$("#count").text(guessCount);
	$("#feedback").text("Make your Guess!");
	$("#guessList").empty();
	randomNumSet();
}


function randomNumSet() {
	secretNum = Math.floor((Math.random() * 100) + 1);
}


function feedback(num) {
	var feedback = $("#feedback");
	if (num % 1 !== 0) { //User enters something other than a number
		feedback.text("Please enter a number");

	} else {

		var diff = (Math.abs(secretNum - num));

		if (diff === 0) { //User guesses right
			$("#userGuess").hide();
			$("#guessButton").hide();
			feedback.text("You guessed the number!");

		} else if (guessCount === 0) {
			if (diff >= 50) {
				updateCount();
				feedback.text("Ice Cold");
			} else if (diff >= 30 && diff < 50) {
				updateCount();
				feedback.text("Cold");
			} else if (diff >= 10 && diff < 20) {
				updateCount();
				feedback.text("hot");
			} else if (diff >=1 && diff < 10) {
				updateCount();
				feedback.text("very hot");
			}
		}
		else {
			var lastdiff = (Math.abs(secretNum - lastguess));
			if (diff < lastdiff) {
				updateCount();
				feedback.text("Warmer");
			} else if (diff > lastdiff) {
				updateCount();
				feedback.text("Colder");
			} else {
				feedback.text("You already guessed this number");
			}
		}
	}
}

function updateCount() {
	guessCount++;
	$("#count").text(guessCount);
}
