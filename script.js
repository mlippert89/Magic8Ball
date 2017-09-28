$(document).ready(function(){


	/*magic8Ball object & properties*/
	var magic8Ball = {};

	//creates an index to reference for answers
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it", "Yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Dont count on it", "My reply is no", "My sources say no", "No", "Outlook not so good", "Very doubtful"];

	$("#answer").hide();

	/*randomizes answer output*/
	magic8Ball.askQuestion = function(question) {

		//shakes #8ball before displaying the answer
		$("#8ball").effect ( "shake" );
		//delays answer display by 4 seconds
   		$("#answer").fadeIn(4000);
   		//changes to answer side when clicking the #questionButton
   		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
   		//randomizes which answer is shown
   		var randomNumber = Math.random();
   		//answer is chosen from the full length of the listOfAnswers index
   		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
   		//answer generated is rounded down
   		var randomIndex = Math.floor(randomNumberForListOfAnswers);
   		//creates "answer" variable for manipulation
   		var answer = this.listOfAnswers[randomIndex];

   		//generates answer after user inputs question into prompt
   		$("#answer").text( answer );
	
		console.log(question);
		console.log(answer);
	};

	/*creates a prompt window for user to ask a Question*/
	var onClick = function() {
		$("#answer").hide();
		//changes back to 8ball side when #questionButton is clicked again
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

		//wait half a second before showing prompt
			setTimeout(
				function() {
					//show prompt
					var question = prompt("ASK A YES/NO QUESTION!");
					magic8Ball.askQuestion(question);
				}, 500);
	};
	
	//connects #questionButton to the 'click' event & activates 'onClick' function
	$("#questionButton").click( onClick );


});//jQuery wrapper