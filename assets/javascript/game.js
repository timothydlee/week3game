var phraseChoice = {
	q1: ["Kitten Mittons", "This is Charlie Kelly's invention for cats that stomp around too loudly"],
	q2: ["Troll Toll", "You gotta pay this to get into that baby boy's soul"],
	q3: ["Magnum Condom", "Frank likes to have this peeking out of his wallet to let the ladies know what he's packing"],
	q4: ["The Nightman Cometh", "A Charlie Kelly original musical score"],
	q5: ["The Waitress", "Charlie's one true love"],
	q6: ["Greenman", "Charlie Kelly's costume of choice for Phillies games"],
	q6: ["Milksteak", "Charlie Kelly's favorite food"],
	q7: ["Paddy's Pub", "The gang 'works' here"],
	q8: ["funny little green ghouls", "One of Charlie's likes"],
	q9: ["magnets", "Charlie's interest"],
	q10: ["people's knees", "Charlie dislikes these"],
	q11: ["bird law", "Charlie is a self-proclaimed expert in this subject matter"],
	q12: ["King of the Rats", "Charlie's nickname"],
	q13: ["DENNIS System", "The name of the method that one of the gang uses to pick up women"],
	q14: ["The Duster", "Mac's favorite long article of clothing"],
	q15: ["Gruesome Twosome", "The self-dubbed nickname for the Frank and Charlie duo"]
};

	// var selectedWord = phraseChoice[Math.floor(Math.random() * phraseChoice.length)];
	console.log(selectedWord);
	//Variable to hold the index of guesses
	var guessIndex = 0
	//Variable to hold the index of guesses remainng
	var guessesRemaining = 15 - guessIndex;
	//Array of phraseChoice
	var phraseArray = [
	phraseChoice.q1,
	phraseChoice.q2,
	phraseChoice.q3,
	phraseChoice.q4,
	phraseChoice.q5,
	phraseChoice.q6,
	phraseChoice.q7,
	phraseChoice.q8,
	phraseChoice.q9,
	phraseChoice.q10,
	phraseChoice.q11,
	phraseChoice.q12,
	phraseChoice.q13,
	phraseChoice.q14,
	phraseChoice.q15];

	//FUNCTIONS
	//=============================================================================

	function produceWord(){
		
	}
















// 	var questionIndex = wordChoice.indexOf(selectedWord);
// 	var selectedHint = hintChoice[questionIndex];
// 	console.log(selectedWord + " " + selectedHint);

// for (var i=0; i<wordChoice.length; i++){
// 	console.log(selectedWord.charAt(i));
// 	document.querySelector("#guess-word").innerHTML = selectedWord.charAt(i);
// }


// document.onkeyup = function(event)



			// document.onkeyup = function(event){
		
			// //Determines which key was pressed, then makes it lowercase//
			// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			// //This function is run whenever the user presses key//

			// 	if(userGuess !== 'r' && userGuess !== 'p' && userGuess !=='s'){
					
			// 		alert("Please insert correct value")
			// 	}
			// 	//Alerts the key the user pressed (userGuess)//
			// 	if(userGuess == 'r' || userGuess == 'p' || userGuess =='s'){
			// 		alert("User selects: " + userGuess);
			// 		var computerGuess = options[Math.floor(Math.random() * options.length)]; //Randomly chooses a choice from the options array. This is the computer's guess//
			// 		alert("Computer selects: " + computerGuess); //Alerts the computer's guess//
			// 		//Win Conditions//
			// 		if(userGuess =='r'){
			// 			if(computerGuess=='r'){
			// 				tie++;
			// 			} else if(computerGuess == 'p'){
			// 				lose++;
			// 			} else {
			// 				win++;
			// 			}
			// 		}
			// 		if(userGuess =='p'){
			// 			if(computerGuess=='p'){
			// 				tie++;
			// 			} else if(computerGuess == 's'){
			// 				lose++;
			// 			} else {
			// 				win++;
			// 			}
			// 		}
			// 		if(userGuess =='s'){
			// 			if(computerGuess=='s'){
			// 				tie++;
			// 			} else if(computerGuess == 'r'){
			// 				lose++;
			// 			} else {
			// 				win++;
			// 			}
			// 		}
			// 	}

			// 	
			// 	document.querySelector("#lose").innerHTML = "Losses: " + lose;
			// 	document.querySelector("#tie").innerHTML = "Ties: " + tie;
			// };