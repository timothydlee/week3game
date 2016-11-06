	
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
		p11: ["dennis system", "The name of the method that one of the gang uses to pick up women"],
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


	var guessesRemaining = 10; //Variable to hold the index of guesses remainng
	var wins = 0; //# of wins in a session
	var drawingIndex = 0;

	var randomNumber;
	var selectedWord = []; //Word(s) that are selected from the phraseArray
	var selectedHint = []; //The associated hint of the word(s) that are selected from the phraseArray

	var lettersUsed = []; //Array to hold letters that are guessed
	var blankWord = []; //Array to hold the word in blanks

	var space = 0; //Placeholder for spaces or other characters in words
	var counter = 0; //Variable that counts number of correct guesses
	var flag; //Variable used for logic purposes

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
		console.log(selectedHint);

		for (var i=0; i<selectedWord.length; i++){
			if(selectedWord[i] === " "){
				blankWord.push("\u00A0\u00A0");
				space++;
			} else if (selectedWord[i] === "'") {
				blankWord.push("'")
				space++;
			} else {
				blankWord.push("_ ");
			}
			
		}	
			console.log("The number of spaces: " + space);
			document.getElementById("hint").innerHTML="Hint: " + selectedHint;
			document.getElementById("blank-word").innerHTML=blankWord.join("");
			document.getElementById("lives-left").innerHTML="Chances left: " + guessesRemaining;
	};

	//Hint that displays
	var hint = function hint(){
		document.getElementById("hintLocation").innerHTML="Hint: " + selectedHint;
		console.log(selectedHint);
	};
	
	//Drawing the Hangman functions
	var head = function(){
		var context = document.getElementById("hangman").getContext("2d");
		context.beginPath();
		context.arc(60, 25, 10, 0, Math.PI*2, true);
		context.stroke();
		context.closePath();
	};

	var draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
		var context = document.getElementById("hangman").getContext("2d");
		context.beginPath();
		context.moveTo($pathFromx, $pathFromy);
	    context.lineTo($pathTox, $pathToy);
	    context.stroke(); 
	    context.strokeStyle = "yellow";
	    context.lineWidth = 2;
	    context.closePath();
	};

	var frame1 = function(){
		draw(0, 150, 150, 150);
	};

	var frame2 = function(){
		draw(10, 0, 10, 600);
	};

	var frame3 = function(){
		draw (0, 5, 70, 5);
	};

	var frame4 = function(){
		draw (60, 5, 60, 15);
	};

	var torso = function(){
		draw (60, 36, 60, 70);
	};

	var rightArm = function(){
		draw (60, 46, 100, 50);
	};

	var leftArm = function(){
		draw (60, 46, 20, 50);
	};

	var rightLeg = function(){
		draw (60, 70, 100, 100);
	};

	var leftLeg = function(){
		draw (60, 70, 20, 100);
	}; 
	
  	var drawArray = [frame1, frame2, frame3, frame4, head, torso, leftArm, rightArm, leftLeg, rightLeg];
	
	var animate = function(){
		drawArray[drawingIndex]();
	}

	frame1();

	play();

	//When user enters key, this function  controls what happens when user types a key.  
	function play(){
		document.onkeyup = function(){
			document.getElementById("pressToStart").innerHTML="";
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
						holder = true;
						counter ++;
						winOrLose();
						console.log("Counter: " + counter);
						console.log("Length of word: " + selectedWord.length);
					} 
				}
				//Guesses remainng only decreases if the letter that is guessed by the user is not contained in the random word.
				if (holder === false){
					guessesRemaining--;
					animate();;
					drawingIndex++;
					console.log("Guesses remaining: " + guessesRemaining);
					document.getElementById("lives-left").innerHTML="Guesses left: " + guessesRemaining;
					winOrLose();
					console.log("Counter is: " + counter);
				} 

				console.log(lettersUsed);
				lettersUsed.push(userGuess);
				document.getElementById("letters-used").innerHTML=lettersUsed.join("").toUpperCase();
			}

			document.getElementById("blank-word").innerHTML = blankWord.join("").toUpperCase();
		}
	};	


	//Function that determines when a user wins or loses.
	function winOrLose(){
		if (guessesRemaining < 1){
			document.getElementById("winOrLose").innerHTML="You Lose, Loser! Press any key to try again!";
			initiate();
		} else if (counter === selectedWord.length-space){
			document.getElementById("winOrLose").innerHTML="You Win, Winner! Press any key to play again!";
			wins++;
			document.getElementById("wins").innerHTML="Wins: " + wins;
			initiate();
		}
	};

	//Function that resets the game once the user has won or lost
	function initiate(){
		document.onkeyup = function(){
			document.getElementById("winOrLose").innerHTML="";
			counter = 0;
			space = 0;
			guessesRemaining = 10;
			selectedWord = [];
			selectedHint = [];
			lettersUsed = [];
			blankWord = [];
			document.getElementById("hangman").getContext("2d").clearRect(0, 0, 400, 400);
			drawingIndex = 0;
			document.getElementById("letters-used").innerHTML=" ";
			produceWord();
			play();
		}
	};
