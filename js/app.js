
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

		var secretNum;
		var guessCount;
		newGame();

		$("form").submit(function(e) {
			e.preventDefault();
			feedback(parseInt($("#userGuess").val()));
			$("#guessList").append("<li>" + parseInt($("#userGuess").val()) + "</li>");
			$("form")[0].reset();
		});


		$(".new").click(function() {
			newGame();
		});

});


function newGame() {
	guessCount = 0;
	$("#count").text(guessCount);
	$("#feedback").text("Make your Guess!");
	$("#guessList").empty();
	randomNumSet();
}


function randomNumSet() {
	secretNum = Math.floor((Math.random() * 100) + 1);
}


function feedback(num) {
	var diff = Math.abs(secretNum - num);
	var feedback = $("#feedback");
	if (diff === 0) {
		feedback.text("You guessed the number!");
	} else {
		guessCount++;
		$("#count").text(guessCount);
		if (diff >= 50) {
			feedback.text("Ice Cold");
		} else if (diff >= 30 && diff < 50) {
			feedback.text("Cold");
		} else if (diff >= 10 && diff < 20) {
			feedback.text("hot");
		} else if (diff >=1 && diff < 10) {
			feedback.text("very hot");
		}
	}
}
