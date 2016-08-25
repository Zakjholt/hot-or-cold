
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

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
