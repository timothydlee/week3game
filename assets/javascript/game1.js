//Object of the array of phrases [0] and hint for that phrase [1].
var phraseChoice = {
	p1: ["kitten mittons", "This is Charlie Kelly's invention for cats that stomp around too loudly"],
	p2: ["magnum condom", "Frank likes to have this peeking out of his wallet to let the ladies know what he's packing"],
	p3: ["the nightman cometh", "A Charlie Kelly original musical score"],
	p4: ["the waitress", "Charlie's one true love"],
	p5: ["greenman", "Charlie Kelly's costume of choice for Phillies games"],
	p6: ["milksteak", "Charlie Kelly's favorite food"],
	p7: ["paddy's pub", "The gang 'works' here"],
	p8: ["magnets", "Charlie's interest"],
	p9: ["people's knees", "Charlie dislikes these"],
	p10: ["bird law", "Charlie is a self-proclaimed expert in this subject matter"],
	p11: ["d.e.n.n.i.s. system", "The name of the method that one of the gang uses to pick up women"],
	p12: ["the duster", "Mac's favorite long article of clothing"],
	p13: ["gruesome twosome", "The self-dubbed nickname for the Frank and Charlie duo"]
};
	
//Array of phraseChoice
var phraseArray = [
	phraseChoice.p1,
	phraseChoice.p2,
	phraseChoice.p3,
	phraseChoice.p4,
	phraseChoice.p5,
	phraseChoice.p6,
	phraseChoice.p7,
	phraseChoice.p8,
	phraseChoice.p9,
	phraseChoice.p10,
	phraseChoice.p11,
	phraseChoice.p12,
	phraseChoice.p13,
	];


var guessIndex = 0; //Variable to hold the index of guesses
var guessesRemaining = 15; //Variable to hold the index of guesses remainng
var wins = 0; //# of wins in a session

var randomNumber;
var selectedWord = []; //Word(s) that are selected from the phraseArray
var selectedHint = []; //The associated hint of the word(s) that are selected from the phraseArray

var lettersUsed = []; //Array to hold letters that are guessed
var blankWord = []; //Array to hold the word in blanks

var space = 0; //Placeholder for spaces or other characters in words
var counter = 0;
var flag;

//Calls on function that generates word(s) by randomly selecting a phrase from phraseArray
produceWord();

//=============================================================================
//								FUNCTIONS
//=============================================================================


//Function that generates a word randomly
function produceWord(){
	randomNumber = Math.floor(Math.random() * phraseArray.length);
	selectedWord = phraseArray[randomNumber][0];
	selectedHint = phraseArray[randomNumber][1];
	console.log(selectedWord);

	for (var i=0; i<selectedWord.length; i++){
		if(selectedWord[i] === " "){
			blankWord.push("\u00A0\u00A0");
		} else if (selectedWord[i] === "'") {
			blankWord.push("'")
		} else {
			blankWord.push("_ ");
		}
		
	}	
		document.getElementById("blank-word").innerHTML=blankWord.join("");
		document.getElementById("lives-left").innerHTML="Guesses left: " + guessesRemaining;
}

for (var i = 0; i<selectedWord.legnth; i++){
	if (selectedWord[i] === " " || selectedWord[i] === "'"){
		counter--;
		console.log("After word is generated, the number of spaces and apostrophes is: " + counter);
	} 
}
//Hint if user clicks hint button
function hint() {
	document.getElementById("hint").innerHTML="Hint: " + selectedHint;
	console.log(selectedHint);
};

//When user enters key, this function  controls what happens when user types a key.  
document.onkeyup = function(){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	//Checking to see if the letter has already been guessed. If it has been entered already, flag = true, then the function does not go to check the blankWord against the user's guess. 
	var flag = false;
	for (var j=0; j<lettersUsed.length;j++){
		if (userGuess === lettersUsed[j]){
			flag = true;
			break;
		}
	}

	//If letter has not been guessed, the following logic will run to check if the user input is contained within the random word. 
	if (flag === false){
		//Holder being created to correctly decrease guesses remainng
		var holder = false;
		for (var i=0; i<selectedWord.length; i++){
			if (userGuess === selectedWord.charAt(i)){
				blankWord[i] = userGuess;
				console.log(blankWord);
				holder = true;
				counter ++;
				console.log("Counter: " + counter);
				console.log("Length of word: " + selectedWord.length);
			} 
		}
		//Guesses remainng only decreases if the letter that is guessed by the user is not contained in the random word.
		if (holder === false){
			guessesRemaining--;
			console.log("Guesses remaining: " + guessesRemaining);
			document.getElementById("lives-left").innerHTML="Guesses left: " + guessesRemaining;
			winOrLose();
		} 

		console.log(lettersUsed);
		lettersUsed.push(userGuess);
		document.getElementById("letters-used").innerHTML=lettersUsed.join("").toUpperCase();
	}

	document.getElementById("blank-word").innerHTML = blankWord.join("").toUpperCase();
}

function winOrLose(){
	if (guessesRemaining < 1){
		document.getElementById("winOrLose").innerHTML="You Lose, Loser!";
	} 
};