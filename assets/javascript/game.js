//This function is called when the webpage has completely loaded.  It initiates the game.
$(document).ready(function(){

//Use jQuery .val() function to set the value of the "match" element to the value of the variable numMatch.
var numMatch = matchValue(19,120);
$("#match").val(numMatch);

var userScore;
var winCounter;
var lossCounter;
var blueGem = matchValue(1,12);
var redGem = matchValue(1,12);
var purpleGem = matchValue(1,12);
var yellowGem = matchValue(1,12);

//Use jQuery .val() function to set the value of the element "blue-gem" to the value of the variable blueGem.
$("#blue-gem").val(blueGem);
$("#red-gem").val(redGem);
$("#purple-gem").val(purpleGem);
$("#yellow-gem").val(yellowGem);
console.log(blueGem);
console.log(redGem);
console.log(purpleGem);
console.log(yellowGem);


	//Random value generator function. This function is called to assign random values to each gem button and the number to match.  
	function matchValue(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
	}

	//Assign a random number for the user to match.
	 if (userScore === undefined) {
	 	userScore = parseInt(0);
	};
	
	//Display the number to match and the initial score.
	document.getElementById("match").innerHTML =  "Match "+ " " + numMatch;
	document.getElementById("score").innerHTML = userScore;


	//Behaviors defined when user clicks a gem.
	$(".gems").on("click", function(){

		//If the user score is less than the number to match, add the gem val
		if (parseInt(userScore) < parseInt(numMatch)) {
		userScore = parseInt(userScore) + parseInt($(this).val());
		document.getElementById("score").innerHTML = userScore;
		}

		//If the user score equals the number to match, the user wins.
		if (parseInt(userScore) === parseInt(numMatch)) {

		document.getElementById("score").innerHTML = userScore + " " + "You win!";
	
		//Increment wins by one and display in the win counter.
		if (winCounter===undefined) {
			winCounter = parseInt(0)
			var winn1 = ++winCounter;
		}
		//Display the number of wins in the win counter.
			$("#wins").text("Wins" + " " + winCounter);		
		}
		
		//If the user score is greater than the number to match the user loses.
		if (parseInt(userScore) > parseInt(numMatch)) {

			document.getElementById("score").innerHTML = "Sorry, please try again!";
			//Increment losses by one and display in the loss counter.
			if (lossCounter===undefined) {
				lossCounter = parseInt(0)
				var loss1 = ++lossCounter;
			}
			//Display the number of losses in the loss counter.
			$("#losses").text("Losses" + " " + lossCounter);
		}

	})

	
	


	});

